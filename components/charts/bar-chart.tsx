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

interface CrimeCount {
    [year: string]: {
        day: number,
        night: number
    };
}

export function BarChart({ crimeList }) {
    const options = createOptionsChart('Crecimiento por meses');

    const count: CrimeCount = crimeList.reduce((accumulator, crime) => {
        const { year, time } = crime;

        // initialize counter for the year if it does not exist yet
        if (!accumulator[year]) {
            accumulator[year] = { day: 0, night: 0 };
        }

        // increment the counter for the corresponding season
        if (time === 'day') {
            accumulator[year].day++;
        } else {
            accumulator[year].night++;
        }

        return accumulator;
    }, {});

    const data = {
        labels: Object.keys(count),
        datasets: [
            {
                label: 'Dia',
                data: Object.keys(count).map((year) => count[year].day),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Noche',
                data: Object.keys(count).map((year) => count[year].night),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    return <Bar options={options} data={data} />;
}
