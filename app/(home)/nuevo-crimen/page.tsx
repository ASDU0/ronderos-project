'use client';
import Formulario from "@/components/registrar-crimen/Formulario";
import Header from "@/components/registrar-crimen/Header";
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapView from "@/components/registrar-crimen/MapView";

 


export default function registroCrimen() {
  return (
    <main className="bg-black">
      <div className="">
        <div>
          
          <br />
          <MapView />
          <div className="bg-rose-500" >
            <br />
          </div>
          <br />
          <Header />
          
          <Formulario />
        </div>
      </div>
    </main>
  );
}
