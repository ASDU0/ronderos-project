"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function PieCrimeChart({ crimeList }) {
    const options = createOptionsChart('Tipos de crimen');

    // count by crime type
    //@ts-ignore
    const count = crimeList.reduce((accumulator, crime) => {
        const crimeType = crime.type;

        if (accumulator[crimeType]) {
            accumulator[crimeType]++;
        } else {
            accumulator[crimeType] = 1;
        }

        return accumulator;
    }, {});

    const fillColors = [
        '#3498db', // Blue
        '#e74c3c', // Red
        '#2ecc71', // Green
        '#f39c12', // Yellow
        '#1abc9c', // Turquoise
        '#9b59b6', // Purple
        '#e67e22', // Orange
        '#95a5a6', // Gray
        '#d35400', // Carrot
        '#27ae60', // Emerald
    ];

    const borderColors = [
        '#2980b9', // Dark Blue
        '#c0392b', // Dark Red
        '#27ae60', // Dark Green
        '#d35400', // Dark Yellow
        '#16a085', // Dark Turquoise
        '#8e44ad', // Dark Purple
        '#d35400', // Dark Orange
        '#7f8c8d', // Dark Gray
        '#e67e22', // Dark Carrot
        '#229954', // Dark Emerald
    ];

    const data = {
        labels: Object.keys(count),
        datasets: [
            {
                label: '# of crimes',
                data: Object.values(count),
                backgroundColor: fillColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ]
    }

    return <Pie data={data} options={options} width={200} height={200} />;
}
