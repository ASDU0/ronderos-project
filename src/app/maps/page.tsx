"use client";

import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"

interface MapProps {
  apiKey: string
}

export default function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAFD_AWriC586dl5mwjkzAJhn4Uu2IS7d0',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 8
      });

      // podemos agregar marcadores, poligonos, etc
      const marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        map, // el mapa en el que se mostrar el marcador
        title: 'Mi Marcador',
        icon: {
          url: '/assets/images/brujijeros.png',
          scaledSize: new google.maps.Size(40, 40),
        },
      });
    })
  }, [])

  return <div
    ref={mapRef} style={{ width: '100%', height: '400px' }}
  ></div>
}
