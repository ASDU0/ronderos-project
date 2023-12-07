import axios from 'axios';

interface ObjectComplaint {
    title: string;
    address: string;
    lostValue: number;
    madeComplaint: boolean;
    details:string;
    latitude: number;
    longitude:  number;
    registrationDate: string;
    typeCrime:string;
    object:string[];
  }

  
export const createComplaint = async (ObjectComplaint:ObjectComplaint) => {
    try {
      const response = await axios.post('https://ronderos.onrender.com/api/complaint', ObjectComplaint);
      return response.data;
    } catch (error) {
      // Manejar errores, puedes imprimirlos en la consola o realizar otras acciones según tus necesidades.
      console.error('Error al realizar la solicitud POST:', error);
      throw error; // Puedes optar por lanzar el error para que se maneje en la capa superior.
    }
  };

