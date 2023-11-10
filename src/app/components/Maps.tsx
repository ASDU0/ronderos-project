"use client";

import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  "lat": -12.046374,
  "lng": -77.042793
};

const citiesCoors = [
  {
    "city": "Lima",
    "position": {
      "lat": -12.046374,
      "lng": -77.042793
    },
    "type": "brujijeros",
  },
  {
    "city": "Arequipa",
    "position": {
      "lat": -16.409047,
      "lng": -71.537451
    },
    "type": "mano_armada",
  },
  {
    "city": "Cusco",
    "position": {
      "lat": -13.522235,
      "lng": -71.967462
    },
    "type": "mano_armada",
  },
  {
    "city": "Trujillo",
    "position": {
      "lat": -8.109052,
      "lng": -79.025714
    },
    "type": "cogoteo",
  },
  {
    "city": "Chiclayo",
    "position": {
      "lat": -6.771144,
      "lng": -79.840977
    },
    "type": "falso_taxista",
  },
  {
    "city": "Piura",
    "position": {
      "lat": -5.196268,
      "lng": -80.632702
    },
    "type": "hurto",
  },
  {
    "city": "Iquitos",
    "position": {
      "lat": -3.749473,
      "lng": -73.253742
    },
    "type": "marca",
  },
  {
    "city": "Tacna",
    "position": {
      "lat": -18.011914,
      "lng": -70.254595
    },
    "type": "pepera",
  },
  {
    "city": "Huancayo",
    "position": {
      "lat": -12.065149,
      "lng": -75.204866
    },
    "type": "raquetero",
  },
  {
    "city": "Cajamarca",
    "position": {
      "lat": -7.160454,
      "lng": -78.519663
    },
    "type": "secuestro",
  }
]

export default function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
    });

    loader.importLibrary('maps').then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 8
      });

      // podemos agregar marcadores, poligonos, etc

      const markers = citiesCoors.map(
        (city) => {
          const marker = createMarker(city, map);
          // Crear un contenedor para la etiqueta del marcador
          labelForMarker(city, map, marker);
        }
      );
    });
  }, [])

  return <div
    ref={mapRef} style={containerStyle}
  ></div>
}

function labelForMarker(
  city: { city: string; position: { lat: number; lng: number; }; type: string; },
  map: google.maps.Map,
  marker: google.maps.Marker
) {
  const label = document.createElement('div');
  label.className = 'marker-label';
  label.textContent = `${city.type}`.toUpperCase();

  // Vincular la etiqueta al marcador
  const infoWindow = new google.maps.InfoWindow();
  infoWindow.setContent(label);
  infoWindow.open(map, marker);
}

function createMarker(
  city: { city: string; position: { lat: number; lng: number; }; type: string; },
  map: google.maps.Map
) {
  return new google.maps.Marker({
    position: city.position,
    map,
    title: city.city,
    icon: {
      url: `/assets/images/${city.type}.png`,
      scaledSize: new google.maps.Size(30, 30),
      fillColor: 'red',
    },
  });
}

