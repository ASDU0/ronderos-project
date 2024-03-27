// MapView.tsx
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import SearchBox from './search-box';

mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YzVzYSIsImEiOiJjbG91a2tzOXYwaTd5MmlvOW96cXRubTlzIn0.HIMdltIYeNRsgHmdwT6Sww';

export interface LastPlace {
    name: string;
    coordinates: [number, number]; 
    //coordinates[0] ... (longitude).
    //coordinates[1] ... (latitude).
  }
interface MapViewProps {
onLastPlaceChange: (lastPlace: LastPlace) => void;
}

function MapView({ onLastPlaceChange }: MapViewProps){
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker | null>(null);
  const [lastPlace, setLastPlace] = useState<{ name: string; coordinates: [number, number] } | null>(null);

  const setLocation = (location: LastPlace)  => {
    if (map) {
      map.flyTo({
        center: location.coordinates,
        zoom: 14,
      });

      // Si ya hay un marcador, remover
      if (marker) {
        marker.remove();
      }

      // Creamos un nuevo marcador y lo añadimos al mapa
      const newMarker = new mapboxgl.Marker().setLngLat(location.coordinates).addTo(map);
      setMarker(newMarker);
      setLastPlace(location);
      onLastPlaceChange(location); // Llamamos a la función proporcionada por la prop
    }
  };

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }: { setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | null>>; mapContainer: React.RefObject<HTMLDivElement> }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current as HTMLElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-77, -12],
        zoom: 4,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  

  return (
    <div className="w-full h-96" ref={mapContainer}>
      {map && <SearchBox map={map} setLocation={setLocation} />}
    </div>
  );
}

export default MapView;

