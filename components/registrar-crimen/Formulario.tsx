"use client";
import { ListTypesCrime } from "@/utils/services/typeCrime-service";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

function Formulario() {
    const [typesCrime, setTypesCrime] = useState([]);
    const [formData, setFormData] = useState({
        titulo: "",
        tipoRobo: "",
        fecha: "",
        hora: "",
        prejuicioEstimado: "",
        genero: "",
        objetosRobados: [] as string[],
        denunciaPolicial: "",
        mayorDetalle: ""
    });


    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const fieldName = e.target.name;
        let fieldValue: string | string[];

        if (e.target.type === "checkbox" && e.target instanceof HTMLInputElement) {
            const checkboxValue = e.target.value;
            const objetosRobados = [...formData.objetosRobados];

            if (e.target.checked) {
                objetosRobados.push(checkboxValue);
            } else {
                const index = objetosRobados.indexOf(checkboxValue);
                if (index !== -1) {
                    objetosRobados.splice(index, 1);
                }
            }
            fieldValue = objetosRobados;
        } else {
            fieldValue = e.target.value;
        }

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    };

    const isChecked = (value: string) => formData.objetosRobados.includes(value);

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
    };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://ronderos.onrender.com/api/type-crime');
            const data = response.data;
            console.log('data:  ',data);
            
    
            // Actualiza el estado con los datos obtenidos
            setTypesCrime(data);
          } catch (error) {
            console.error('Error al obtener los tipos de crimen:', error);
          }
        };
    
        // Llama a la función para obtener los tipos de crimen cuando el componente se monta
        fetchData();
      }, []);

    /* useEffect(() => {
        // Llamada a la función del servicio para obtener los tipos de crimen
        const fetchTypesCrime = async () => {
            try {
                const typesCrime = await ListTypesCrime();
                // Hacer algo con los datos obtenidos, por ejemplo, actualizar el estado
                // o realizar cualquier acción necesaria con los tipos de crimen.
                console.log("Tipos de crimen obtenidos:", typesCrime);
            } catch (error) {
                // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
                console.error("Error al obtener los tipos de crimen:", error);
            }
        };

        // Llama a la función para obtener los tipos de crimen cuando el componente se monta
        fetchTypesCrime();
    }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez al montar el componente */

    return (
        <div className="bg-gray-300 py-4 px-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submitForm}>
                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Título:</label>
                    <input
                        type="text"
                        className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                        name="titulo"
                        onChange={handleInput}
                        value={formData.titulo}
                        placeholder="Ingrese título"
                        required
                    />
                </div>
                
                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Fecha:</label>
                    <input
                        className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                        type="date"
                        name="fecha"
                        onChange={handleInput}
                        value={formData.fecha}
                        placeholder="Ingrese fecha del incidente"
                        required
                    />
                </div>

                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">Hora:</label>
                    <input
                        type="time"
                        className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                        name="hora"
                        onChange={handleInput}
                        value={formData.hora}
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
                        name="tipoRobo"
                        onChange={handleInput}
                        value={formData.tipoRobo}
                        required
                    >
                        <option disabled value="">Choose...</option>
                        <option value="hurto">Hurto</option>
                        <option value="robo">Robo</option>
                        <option value="robo-arma-blanca">Robo con arma blanca</option>
                        <option value="robo-arma-fuego">Robo con arma de fuego</option>
                        <option value="asalto-grupo">Asalto en grupo</option>
                        <option value="secuestro-relampago">Secuestro relámpago</option>
                        <option value="robo-automoviles">Robo de automóviles</option>
                        <option value="robo-piezas-automoviles">Robo de piezas de automóviles</option>
                        <option value="robo-domicilios">Robo a domicilios</option>
                        <option value="robo-centro-comercial">Robo a centro comercial</option>
                        <option value="intento-robo">Intento de robo</option>
                        <option value="marcas-raqueteros">Marcas Raqueteros</option>
                    </select>
                </div>

                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                        Prejuicio estimado (s/.):
                    </label>
                    <input
                        type="number"
                        className="w-full p-2 rounded border border-bcbec0 bg-white-500 text-bcbec0"
                        name="prejuicioEstimado"
                        onChange={handleInput}
                        value={formData.prejuicioEstimado}
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
                            name="genero"
                            value="Masculino"
                            onChange={handleInput}
                            checked={formData.genero === "Masculino"}
                        />
                        <span className="text-bcbec0">Masculino</span>
                    </div>
                    <div>
                        <input
                            type="radio"
                            className="rounded border border-bcbec0 text-fe4a49"
                            name="genero"
                            value="Femenino"
                            onChange={handleInput}
                            checked={formData.genero === "Femenino"}
                        />
                        <span className="text-bcbec0">Femenino</span>
                    </div>
                </div>

                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                        Objetos robados:
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Bolsa o mochila"
                            checked={isChecked("Bolsa o mochila")}
                            onChange={handleInput}
                        />

                        <label>
                            Bolsa o mochila
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Celular"
                            checked={isChecked("Celular")}
                            onChange={handleInput}
                        />

                        <label>
                            Celular
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Documentos"
                            checked={isChecked("Documentos")}
                            onChange={handleInput}
                        />

                        <label>
                            Documentos
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Laptop"
                            checked={isChecked("Laptop")}
                            onChange={handleInput}
                        />

                        <label>
                            Laptop
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Tablet"
                            checked={isChecked("Tablet")}
                            onChange={handleInput}
                        />

                        <label>
                            Tablet
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="MP4 o iPod"
                            checked={isChecked("MP4 o iPod")}
                            onChange={handleInput}
                        />

                        <label>
                            MP4 o iPod
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Tarjeta de crédito"
                            checked={isChecked("Tarjeta de crédito")}
                            onChange={handleInput}
                        />

                        <label>
                            Tarjeta de crédito
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Reloj"
                            checked={isChecked("Reloj")}
                            onChange={handleInput}
                        />

                        <label>
                            Reloj
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Bicicleta"
                            checked={isChecked("Bicicleta")}
                            onChange={handleInput}
                        />

                        <label>
                            Bicicleta
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Dinero"
                            checked={isChecked("Dinero")}
                            onChange={handleInput}
                        />

                        <label>
                            Dinero
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="objetosRobados"
                            value="Otros"
                            checked={isChecked("Otros")}
                            onChange={handleInput}
                        />

                        <label>
                            Otros
                        </label>
                    </div>
                </div>

                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                        ¿Realizó su denuncia policial?
                    </label>
                    <div>
                        <input
                            type="radio"
                            className="rounded border border-bcbec0 text-fe4a49"
                            name="denunciaPolicial"
                            value="Sí"
                            onChange={handleInput}
                            checked={formData.denunciaPolicial === "Sí"}
                        />
                        <span className="text-bcbec0">Sí</span>
                    </div>
                    <div>
                        <input
                            type="radio"
                            className="rounded border border-bcbec0 text-fe4a49"
                            name="denunciaPolicial"
                            value="No"
                            onChange={handleInput}
                            checked={formData.denunciaPolicial === "No"}
                        />
                        <span className="text-bcbec0">No</span>
                    </div>
                </div>

                <div>
                    <label className="text-fe4a49 font-bold text-bcbec0 text-lg block mb-2">
                        Más detalles...
                    </label>
                    <textarea name="detalles" id="detalles" cols={30} rows={10}></textarea>
                </div>
            </form>
            <button
                type="submit"
                className="p-2 bg-red-600 text-gray-200 font-bold rounded hover:bg-red-700"
            >
                Guardar
            </button>
        </div>
    );
}

export default Formulario;