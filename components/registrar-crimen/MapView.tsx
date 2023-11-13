import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Buscador from './Buscador';

mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YzVzYSIsImEiOiJjbG91a2tzOXYwaTd5MmlvOW96cXRubTlzIn0.HIMdltIYeNRsgHmdwT6Sww';


function MapView() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const [marker, setMarker] = useState<mapboxgl.Marker | null>(null);

    const setUbicacion = (ubicacion: [number, number]) => {
        if (map) {
            map.flyTo({
                center: ubicacion,
                zoom: 14,
            });

             // Si ya hay un marcador, remover
             if (marker) {
                marker.remove();
            }
            // Creamos un nuevo marcador y lo añadimos al mapa
            const newMarker = new mapboxgl.Marker().setLngLat(ubicacion).addTo(map);
            setMarker(newMarker);

            //new mapboxgl.Marker().setLngLat(ubicacion).addTo(map);
        }
    };

    

    useEffect(() => {
        const initializeMap = ({ setMap, mapContainer }: { setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | null>>, mapContainer: React.RefObject<HTMLDivElement> }) => {
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
            {map && <Buscador map={map} setUbicacion={setUbicacion} />}
        </div>
    );
   
}

export default MapView;
