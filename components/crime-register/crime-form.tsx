"use client";
import { ListObjects } from "@/utils/services/object-service";
import { ListTypesCrime } from "@/utils/services/type-crime-service";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface CrimeFormProps {
    onSubmitForm: (crimeDataForm: any) => void;
  }

function CrimeForm({ onSubmitForm }: CrimeFormProps) {
    const [typesCrime, setTypesCrime] = useState<{ _id: string, typeCrime: string }[]>([]);
    const [objectsStolen, setobjectsStolen] = useState<{ _id: string, objectName: string }[]>([]);

    const [crimeDataForm, setcrimeDataForm] = useState({
        title: "",
        theftType: "",
        date: "",
        hour: "",
        prejudiceEstimated: "",
        gender: "",
        objectsStolen: [] as string[],
        complaintPolice: "",
        detail: ""
    });

    
    const handleInput = (e: ChangeEvent<  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name;
        let fieldValue: string | string[];

        if (e.target.type === "checkbox" && e.target instanceof HTMLInputElement) {
            const checkboxValue = e.target.value;
            const objectsStolen = [...crimeDataForm.objectsStolen];

            if (e.target.checked) {
                objectsStolen.push(checkboxValue);
            } else {
                const index = objectsStolen.indexOf(checkboxValue);
                if (index !== -1) {
                    objectsStolen.splice(index, 1);
                }
            }
            fieldValue = objectsStolen;
        } else {
            fieldValue = e.target.value;
        }

        setcrimeDataForm((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    };

    const isChecked = (value: string) => crimeDataForm.objectsStolen.includes(value);

    
    
    // Recuperar lista de tipos de Crimen
    useEffect(() => {
        // Llamada a la función del servicio para obtener los tipos de crimen
        const fetchTypesCrime = async () => {
            try {
                const typesCrimeData = await ListTypesCrime();                               
                // Asigna los datos obtenidos al estado
                setTypesCrime(typesCrimeData);
            } catch (error) {                
                console.error("Error al obtener los tipos de crimen:", error);
            }
        };
        // Llama a la función para obtener los tipos de crimen cuando el componente se monta
        fetchTypesCrime();
    }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez al montar el componente

    // Recuperar lista de tipos de Crimen
    useEffect(() => {
        // Llamada a la función del servicio para obtener los tipos de crimen
        const fetchObjects = async () => {
            try {
                const objectsData = await ListObjects();                               
                // Asigna los datos obtenidos al estado
                setobjectsStolen(objectsData);
            } catch (error) {                
                console.error("Error al obtener los tipos de crimen:", error);
            }
        };
        // Llama a la función para obtener los tipos de crimen cuando el componente se monta
        fetchObjects();
    }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez al montar el componente
    

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Llama a la función proporcionada desde las props con el formData
        onSubmitForm(crimeDataForm);
    };
    
    
    return (
        <div className="bg-gray-300 py-4 px-12">
            <form  onSubmit={submitForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Título:</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                            name="title"
                            onChange={handleInput}
                            value={crimeDataForm.title}
                            placeholder="Ingrese título"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Fecha:</label>
                        <input
                            className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                            type="date"
                            name="date"
                            onChange={handleInput}
                            value={crimeDataForm.date}
                            placeholder="Ingrese fecha del incidente"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Hora:</label>
                        <input
                            type="time"
                            className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                            name="hour"
                            onChange={handleInput}
                            value={crimeDataForm.hour}
                            placeholder="Ingrese hora del incidente"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            Tipo:
                        </label>
                        <select
                            className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                            name="theftType"
                            onChange={handleInput}
                            value={crimeDataForm.theftType}
                            required
                        >
                            <option disabled value="">Choose...</option>
                            {typesCrime
                                .filter((crime) => crime.typeCrime) // Filtra elementos sin typeCrime
                                .map((crime) => (
                                    <option key={crime._id} value={crime._id}>
                                        {crime.typeCrime}
                                    </option>
                            ))}
                        </select>
                    </div>

                    

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            Prejuicio estimado (s/.):
                        </label>
                        <input
                            type="number"
                            className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                            name="prejudiceEstimated"
                            onChange={handleInput}
                            value={crimeDataForm.prejudiceEstimated}
                            placeholder="Ingrese la cantidad de dinero perdido en el incidente"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            Genero:
                        </label>
                        <div>
                            <input
                                type="radio"
                                className="rounded border border-bcbec0 text-fe4a49"
                                name="gender"
                                value="Masculino"
                                onChange={handleInput}
                                checked={crimeDataForm.gender === "Masculino"}
                            />
                            <span className="text-bcbec0">Masculino</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="rounded border border-bcbec0 text-fe4a49"
                                name="gender"
                                value="Femenino"
                                onChange={handleInput}
                                checked={crimeDataForm.gender === "Femenino"}
                            />
                            <span className="text-bcbec0">Femenino</span>
                        </div>
                    </div>

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            Objetos robados:
                        </label>

                        {objectsStolen.map((objeto) => (
                            <div key={objeto._id}>
                                <input
                                    type="checkbox"
                                    name="objectsStolen"
                                    value={objeto._id}
                                    checked={isChecked(objeto._id)}
                                    onChange={handleInput}
                                />

                                <label>
                                    {objeto.objectName}
                                </label>
                            </div>
                        ))}
                    </div>

                

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            ¿Realizó su denuncia policial?
                        </label>
                        <div>
                            <input
                                type="radio"
                                className="rounded border border-bcbec0 text-fe4a49"
                                name="complaintPolice"
                                value="Sí"
                                onChange={handleInput}
                                checked={crimeDataForm.complaintPolice === "Sí"}
                            />
                            <span className="text-bcbec0">Sí</span>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="rounded border border-bcbec0 text-fe4a49"
                                name="complaintPolice"
                                value="No"
                                onChange={handleInput}
                                checked={crimeDataForm.complaintPolice === "No"}
                            />
                            <span className="text-bcbec0">No</span>
                        </div>
                    </div>

                    <div>
                        <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                            Más detalles...
                        </label>
                        <textarea
                            name="detail"
                            id="detail"
                            onChange={handleInput} 
                            value={crimeDataForm.detail}                         
                            cols={30}
                            rows={10}
                        ></textarea>
                    </div>

                </div>
                

                <div>
                    <button
                        type="submit"
                        className="p-2 bg-red-600 text-gray-200 font-bold rounded hover:bg-red-700"
                    >
                        Guardar
                    </button>

                </div>

                
            </form>
            
        </div>
    );
}

export default CrimeForm;