
import Image from 'next/image'
import React from 'react'
import { CrimeLineChart } from './charts/crimeline-chart'
import { BarChart } from './charts/bar-chart'
import { PieCrimeChart } from './charts/pie-crime-chart'
import { PiePercentageChart } from './charts/pie-percentage-chart'
import { CrimeIndexChart } from './charts/crime-index-chart'
import Link from 'next/link'
import { crimeList } from './charts/utils'

const MyCityStats = ({
    cityName
}: { cityName: string }) => {
    

    return (
        <div className='bg-gray-900'>
            <div className="flex items-center">
                <div
                    className="
                        flex-1 flex flex-col items-center gap-4
                        text-xl text-gray-200 font-bold
                    "
                >
                    <Image
                        src="/google-maps.svg"
                        alt='Google maps icon'
                        width={100}
                        height={100}
                    />
                    <p className="text-center w-[300px]">
                        VEA LOS CRÍMENES QUE SUCEDEN CERCA DE USTED
                    </p>
                    <div className="bg-red-600 px-4 py-1">
                        <p>CIUDADES MAS VISITADAS</p>
                    </div>
                    <div className="bg-red-600 px-2">
                        <div className="flex flex-wrap gap-3">
                            <Link href={'/ciudad'}>
                                <p className="hover:bg-gray-800 hover:cursor-pointer p-1">AREQUIPA</p>
                            </Link>
                            <Link href={'/ciudad'}>
                                <p className="hover:bg-gray-800 hover:cursor-pointer p-1">CUSCO</p>
                            </Link>
                            <Link href={'/ciudad'}>
                                <p className="hover:bg-gray-800 hover:cursor-pointer p-1">LIMA</p>
                            </Link>
                            <Link href={'/ciudad'}>
                                <p className="hover:bg-gray-800 hover:cursor-pointer p-1">CHICLAYO</p>
                            </Link>
                            <Link href={'/ciudad'}>
                                <p className="hover:bg-gray-800 hover:cursor-pointer p-1">PUNO</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                    <h2 className="text-gray-200 text-lg font-semibold mb-4">Índice Criminalístico actual de tu ciudad</h2>
                    <CrimeIndexChart />
                </div>
            </div>

            <div className="flex flex-col items-center py-20">
                <p className="text-3xl text-gray-200">ESTADÍSTICAS</p>
                <hr className="h-2 bg-red-600" />
                <p className="text-gray-200">Ciudad de {cityName.toLowerCase()}</p>

                <div className="flex flex-row space-x-4 py-5">
                    <div className="flex-1 flex items-center justify-center">
                        <CrimeLineChart crimeList={crimeList} />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <BarChart crimeList={crimeList} />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <PieCrimeChart crimeList={crimeList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCityStats
