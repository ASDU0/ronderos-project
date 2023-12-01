"use client";

import { googleMapsLoader } from "@/config/google-maps-config";
import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const containerStyle = {
  width: '100%',
  height: '500px',
};

const mapCenter = {
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
  const mapRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const loader = googleMapsLoader();

    loader.importLibrary('maps').then(() => {
      const map = new google.maps.Map(mapRef.current!, {
        center: {
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        },
        zoom: 8
      });

      const markers = citiesCoors.map(
        (city) => {
          const crimeMarker = createMarker(city, map);
          
          const crimeInfo = labelForMarker(city, router);
          
          crimeMarker.addListener('mouseover', () => crimeInfo.open(map, crimeMarker));
        }
      );
    });
  }, [])

  return <div
    ref={mapRef} style={containerStyle}
  ></div>
}

function createMarker(
  city: { city: string; position: { lat: number; lng: number; }; type: string; },
  map: google.maps.Map
) {
  const marker = new google.maps.Marker({
    position: city.position,
    map,
    title: city.city,
    icon: {
      url: `/assets/images/${city.type}.png`,
      scaledSize: new google.maps.Size(30, 30),
      fillColor: 'red',
    },
    clickable: true,
    
  });
  return marker;
}

function labelForMarker(
  city: { city: string; position: { lat: number; lng: number; }; type: string; },
  router: AppRouterInstance
) {
  const containerInfo = generateInfoContent(city, router);

  const crimeInfo = new google.maps.InfoWindow();
  crimeInfo.setContent(containerInfo);
  return crimeInfo;
}

function generateInfoContent(
  city: { city: string; position: { lat: number; lng: number; }; type: string; },
  router: AppRouterInstance
) {
  const containerInfo = document.createElement('div');
  containerInfo.style.display = 'flex';
  containerInfo.style.padding = '5px';
  containerInfo.style.flexDirection = 'flex-column';
  containerInfo.style.gap = '12px';
  containerInfo.style.alignItems = 'center';
  const infoLabel = document.createElement('p');
  infoLabel.textContent = `${city.city.toUpperCase()}`;
  const moreInfoIcon = document.createElement('img');
  moreInfoIcon.setAttribute('src', '/more-information.png');
  moreInfoIcon.setAttribute('width', '20px');
  moreInfoIcon.setAttribute('height', '20px');
  moreInfoIcon.style.cursor = 'pointer';
  moreInfoIcon.addEventListener('click', () => router.push(`/city/${city.city}`));
  containerInfo.append(infoLabel, moreInfoIcon);
  return containerInfo;
}

