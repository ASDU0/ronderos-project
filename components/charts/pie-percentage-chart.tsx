"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = (reportPercentage = 25) => {
    const remainingPercentage = 100 - reportPercentage;

    return {
        labels: ['Reported', 'Not Reported'],
        datasets: [
            {
                data: [reportPercentage, remainingPercentage],
                backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(0, 0, 0, 0)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(0, 0, 0, 0)'],
                borderWidth: 1,
            },
        ],
    };
};

// @ts-ignore
export function PiePercentageChart({ crimeList }) {
    const options = createOptionsChart('Porcentaje de crímenes reportados');

    // @ts-ignore
    const count = crimeList.reduce((accumulator, crime) => {
        crime.reported ? accumulator.reported++ : accumulator.notReported++;
        return accumulator;
    }, { reported: 0, notReported: 0 });

    const data = {
        labels: ['Reportado', 'No reportado'],
        datasets: [
            {
                data: Object.values(count),
                backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(0, 0, 0, 0)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(0, 0, 0, 0)'],
                borderWidth: 1,
            }
        ]
    }

    return <Pie data={data} options={options} width={200} height={200} />;
}
