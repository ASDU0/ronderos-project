"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { createOptionsChart } from './utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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

//@ts-ignore
export function CrimeLineChart({ crimeList }) {
    const options = createOptionsChart('Día vs Noche');

    //@ts-ignore
    const count: CrimeCount = crimeList.reduce((accumulator, crime) => {
        const { year, season } = crime;

        // initializes counter for the year if it doesn't exist yet
        if (!accumulator[year]) {
            accumulator[year] = { day: 0, night: 0 };
        }

        // increments the counter for the season
        if (season === 'day') {
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
                label: 'Día',
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

    return <Line options={options} data={data} width={200} height={200} />;
}
