"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ConteoCrimenes {
    [agno: string]: {
        dia: number,
        noche: number
    };
}

export default function BarChart({ listaCrimenes }) {
    const options = createOptionsChart('Crecimiento por meses');

    const conteo: ConteoCrimenes = listaCrimenes.reduce((acumulador, crimen) => {
        const { agno, temporada } = crimen;

        // inicializa contador para el año si aun no existe
        if (!acumulador[agno]) {
            acumulador[agno] = { dia: 0, noche: 0 };
        }

        // incrementa el contador correspondiente a la temporada
        if (temporada === 'dia') {
            acumulador[agno].dia++;
        } else {
            acumulador[agno].noche++;
        }

        return acumulador;
    }, {});

    const data = {
        labels: Object.keys(conteo),
        datasets: [
            {
                label: 'Día',
                data: Object.keys(conteo).map((agno) => conteo[agno].dia),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Noche',
                data: Object.keys(conteo).map((agno) => conteo[agno].noche),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }    

    return <Bar options={options} data={data} />;
}
