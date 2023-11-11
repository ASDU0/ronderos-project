
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

type TipoCrimen =
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

type Temporada = 'dia' | 'noche'

interface Crimen {
    agno: number,
    tipo: TipoCrimen,
    temporada: Temporada,
    denunciado: boolean
}

function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const agnos = [2023, 2022, 2021, 2020];

const tipos: TipoCrimen[] = [
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
const temporadas: Temporada[] = ['dia', 'noche'];

export const listaCrimenes: Crimen[] = [];

for (let i = 0; i < 100; i++) {
    const crimen: Crimen = {
        agno: getRandomElement(agnos),
        tipo: getRandomElement(tipos),
        temporada: getRandomElement(temporadas),
        denunciado: Math.random() < 0.5,
    };

    listaCrimenes.push(crimen);
}
