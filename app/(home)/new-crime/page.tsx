'use client';
import Formulario from "@/components/crime-register/crime-form";
import Header from "@/components/crime-register/header";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapView, { LastPlace } from "@/components/crime-register/map-view";
import { useEffect, useState } from "react";
import { createComplaint } from "@/utils/services/complaint-service";


export default function registroCrimen() {
  const [submittedFormData, setSubmittedFormData] = useState<any>(null);
  const [lastPlace, setLastPlace] = useState<LastPlace | null>(null);
  const [formComplaintSubmitted, setFormComplaintSubmitted] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    setSubmittedFormData(formData);

  };

  const handleLastPlaceChange = (place: LastPlace) => {
    setLastPlace(place);
  };

  
  useEffect(() => {
    if (lastPlace && submittedFormData && !formComplaintSubmitted) {
      const registrationDate = transformarFechaHora(submittedFormData.date, submittedFormData.hour);

      const objectComplaint = {
        title: submittedFormData.title,
        address: lastPlace?.name || "",
        lostValue: parseFloat(submittedFormData.prejudiceEstimated),
        madeComplaint: submittedFormData.complaintPolice === "Sí",
        details: submittedFormData.detail,
        latitude: lastPlace?.coordinates[1] || 0,
        longitude: lastPlace?.coordinates[0] || 0,
        registrationDate: registrationDate,
        typeCrime: submittedFormData.theftType,
        object: submittedFormData.objectsStolen,
      };

      console.log(objectComplaint);

      try {
        
        createComplaint(objectComplaint);
        setFormComplaintSubmitted(true);
        
      } catch (error) {
        console.error('Error al enviar la queja:', error);
      }
    }
  }, [lastPlace, submittedFormData, formComplaintSubmitted]);

  

  return (
    <main className="bg-black">
      <div className="">
        <div>
          
          <br />
          <MapView onLastPlaceChange={handleLastPlaceChange}/>
          <div className="bg-rose-500" >
            <br />
          </div>
          <br />
          <Header />
          
          <Formulario onSubmitForm={handleFormSubmit}  />
        </div>
      </div>
    </main>
  );
}

function transformarFechaHora(fecha: string, hora: string): string {
  const fechaObjeto = new Date(fecha);
  const [horas, minutos] = hora.split(':').map(Number);

  // Establecer la hora y los minutos en el objeto de fecha
  fechaObjeto.setHours(horas, minutos);

  // Obtener la cadena en formato ISO (UTC)
  const fechaTransformada = fechaObjeto.toISOString();

  return fechaTransformada;
}
