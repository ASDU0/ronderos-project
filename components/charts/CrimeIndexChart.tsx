"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

const CrimeIndexChart = () => {
    const data = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                data: [10, 15, 8, 20], // Datos del índice criminalístico para cada semana
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    };

    const scales = {
        x: {
            display: true,
            title: {
                display: false,
                text: 'Semanas',
            },
        },
        y: {
            display: false,
            title: {
                display: true,
                text: 'Índice Criminalístico',
            },
        },
    }

    const options = createOptionsChart('LIMA');
    options.scales = scales;
    

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default CrimeIndexChart;
