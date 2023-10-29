"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from '../styles/registroCrimen.module.css';

function Formulario() {
    const [formData, setFormData] = useState<{
        titulo: string;
        tipoRobo: string;
        fecha: string;
        hora: string;
        prejuicioEstimado: string;
        genero: string;
        objetosRobados: string[];
        denunciaPolicial: string;
        mayorDetalle: string;
    }>({
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
        let fieldValue: string | string[];;
        if (e.target.type === "checkbox" && e.target instanceof HTMLInputElement) {
            const checkboxValue = e.target.value;

            // Copia objetosRobados existentes y agrega o quita el valor
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

    return (
        <div>
            <div className={styles.formulario} >
                <div className='p-4 g-col-6'>
                    <form className="row g-3" onSubmit={submitForm}>
                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Titulo:</label>

                            <input
                                type="text"
                                className="form-control"
                                name="titulo"
                                onChange={handleInput}
                                value={formData.titulo}
                                placeholder="Ingrese titulo"
                                required
                            />
                        </div>



                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Tipo:</label>
                            <select
                                className="form-select"
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

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Fecha:</label>
                            <input
                                className="form-control"
                                type="date"
                                name="fecha"
                                onChange={handleInput}
                                value={formData.fecha}
                                placeholder="Ingrese fecha del incidente"
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Hora:</label>
                            <input
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange={handleInput}
                                value={formData.hora}
                                placeholder="Ingrese hora del incidente"
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Prejuicio estimado(s/.):</label>
                            <input
                                type="number"
                                className="form-control"
                                name="prejuicioEstimado"
                                onChange={handleInput}
                                value={formData.prejuicioEstimado}
                                placeholder="Ingrese la cantidad de dinero perdido en el incidente"
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Genero:</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="genero"
                                    value="Masculino"
                                    onChange={handleInput}
                                    checked={formData.genero === "Masculino"}
                                />
                                <label className="form-check-label">Masculino</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="genero"
                                    value="Femenino"
                                    onChange={handleInput}
                                    checked={formData.genero === "Femenino"}
                                />
                                <label className="form-check-label">Femenino</label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">Objetos Robados:</label>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Billetera"
                                    checked={isChecked("Billetera")}
                                    onChange={handleInput}
                                />
                                <label className="form-check-label">
                                    Billetera
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Bolsa o mochila"
                                    checked={isChecked("Bolsa o mochila")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Bolsa o mochila
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Celular"
                                    checked={isChecked("Celular")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Celular
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Documentos"
                                    checked={isChecked("Documentos")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Documentos
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Laptop"
                                    checked={isChecked("Laptop")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Laptop
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Tablet"
                                    checked={isChecked("Tablet")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Tablet
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="MP4 o iPod"
                                    checked={isChecked("MP4 o iPod")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    MP4 o iPod
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Tarjeta de crédito"
                                    checked={isChecked("Tarjeta de crédito")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Tarjeta de crédito
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Reloj"
                                    checked={isChecked("Reloj")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Reloj
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Bicicleta"
                                    checked={isChecked("Bicicleta")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Bicicleta
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Dinero"
                                    checked={isChecked("Dinero")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Dinero
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="objetosRobados"
                                    value="Otros"
                                    checked={isChecked("Otros")}
                                    onChange={handleInput}
                                />

                                <label className="form-check-label">
                                    Otros
                                </label>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold fs-6">¿Realizó su denuncia policial?</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="denunciaPolicial"
                                    value="Sí"
                                    onChange={handleInput}
                                    checked={formData.denunciaPolicial === "Sí"}
                                />
                                <label className="form-check-label">Sí</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="denunciaPolicial"
                                    value="No"
                                    onChange={handleInput}
                                    checked={formData.denunciaPolicial === "No"}
                                />
                                <label className="form-check-label">No</label>
                            </div>
                        </div>


                        <div className="col-12">
                            <label className="form-label fw-bold fs-6">Más detalles...</label>
                            <input
                                type="text"
                                className="form-control"
                                name="mayorDetalle"
                                onChange={handleInput}
                                value={formData.mayorDetalle}
                                placeholder="Ingrese mas detalles del incidente"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
}

export default Formulario;

