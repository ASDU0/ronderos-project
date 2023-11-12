"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieCrimenChart({ listaCrimenes }) {
    const options = createOptionsChart('Tipo crímenes');

    // contar por tipo de crimen
    const conteo = listaCrimenes.reduce((acumulador, crimen) => {
        const tipoCrimen = crimen.tipo;

        if (acumulador[tipoCrimen]) {
            acumulador[tipoCrimen]++;
        } else {
            acumulador[tipoCrimen] = 1;
        }

        return acumulador;
    }, {});

    const coloresObjeto = [
        '#3498db', // Azul
        '#e74c3c', // Rojo
        '#2ecc71', // Verde
        '#f39c12', // Amarillo
        '#1abc9c', // Turquesa
        '#9b59b6', // Morado
        '#e67e22', // Naranja
        '#95a5a6', // Gris
        '#d35400', // Zanahoria
        '#27ae60', // Esmeralda
    ];

    const coloresBorde = [
        '#2980b9', // Azul oscuro
        '#c0392b', // Rojo oscuro
        '#27ae60', // Verde oscuro
        '#d35400', // Amarillo oscuro
        '#16a085', // Turquesa oscuro
        '#8e44ad', // Morado oscuro
        '#d35400', // Naranja oscuro
        '#7f8c8d', // Gris oscuro
        '#e67e22', // Zanahoria oscuro
        '#229954', // Esmeralda oscuro
    ];

    const data = {
        labels: Object.keys(conteo),
        datasets: [
            {
                label: '# de crimenes',
                data: Object.values(conteo),
                backgroundColor: coloresObjeto,
                borderColor: coloresBorde,
                borderWidth: 1,
            },
        ]
    }

    return <Pie data={data} options={options} width={200} height={200} />;
}
