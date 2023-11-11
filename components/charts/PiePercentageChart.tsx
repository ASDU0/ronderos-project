"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = (denunciasPorcentaje = 25) => {
    const porcentajeRestante = 100 - denunciasPorcentaje;

    return {
        labels: ['Denunciados', 'No Denunciados'],
        datasets: [
            {
                data: [denunciasPorcentaje, porcentajeRestante],
                backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(0, 0, 0, 0)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(0, 0, 0, 0)'],
                borderWidth: 1,
            },
        ],
    };
};

export function PiePercentageChart({ listaCrimenes }) {
    const options = createOptionsChart('Porcentaje de Crímenes Denunciados');

    const conteo = listaCrimenes.reduce((acumulador, crimen) => {
        crimen.denunciado ? acumulador.denunciados++ : acumulador.noDenunciados++;
        return acumulador;
    }, { denunciados: 0, noDenunciados: 0 });

    const data = {
        labels: ['Denunciados', 'No denunciados'],
        datasets: [
            {
                data: Object.values(conteo),
                backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(0, 0, 0, 0)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(0, 0, 0, 0)'],
                borderWidth: 1,
            }
        ]
    }

    return <Pie data={data} options={options} width={200} height={200} />;
}
