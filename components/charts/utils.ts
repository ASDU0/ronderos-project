

function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export const createOptionsChart = (title: string, displayLegend: boolean = false) => {
    return {
        responsive: true,
        plugins: {
            legend: {
                display: displayLegend,
            },
            title: {
                display: true,
                text: title
            }
        }
    };
};

type CrimeType =
    | 'mano_armada'
    | 'brujijeros'
    | 'carterista'
    | 'cogoteo'
    | 'falso_taxista'
    | 'hurto'
    | 'marca'
    | 'pepera'
    | 'raquetero'
    | 'secuestro';

type TimeOfDay = 'day' | 'night'

interface Crime {
    year: number,
    type: CrimeType,
    time: TimeOfDay,
    reported: boolean
}

const years = [2023, 2022, 2021, 2020];

const types: CrimeType[] = [
    'mano_armada',
    'brujijeros',
    'carterista',
    'cogoteo',
    'falso_taxista',
    'hurto',
    'marca',
    'pepera',
    'raquetero',
    'secuestro',
];

const times: TimeOfDay[] = ['day', 'night'];

export const crimeList: Crime[] = [];

for (let i = 0; i < 100; i++) {
    const crime: Crime = {
        year: getRandomElement(years),
        type: getRandomElement(types),
        time: getRandomElement(times),
        reported: Math.random() < 0.5,
    };

    crimeList.push(crime);
}

