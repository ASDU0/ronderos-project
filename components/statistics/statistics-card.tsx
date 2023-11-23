"use client"
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {DatePicker} from "@/components/date-picker";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import PersonDressIcon from "@/components/person-dress-icon";
import PersonIcon from "@/components/person-icon";
import {CircleDollarSign, Moon, Sun} from "lucide-react";
import PoliceIcon from "@/components/police-icon";
import {Separator} from "@/components/ui/separator";
import {PiePercentageChart} from "@/components/charts/pie-percentage-chart";
import {crimeList} from "@/components/charts/utils";

const StatisticsCard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <div className="bg-red-600 w-full">
                <p className="text-left pl-8 py-4 text-xl md:text-2xl text-white font-bold">
                    ESTADISTICAS DE LIMA
                </p>
            </div>
            <div className="px-10 flex gap-x-6 md:gap-x-12 mt-3 flex-col md:flex-row gap-y-4 ">
                <Button variant={"destructive"}>
                    Filtrar por fecha
                </Button>
                <div className="flex gap-x-3 items-center justify-center font-semibold">
                    <label htmlFor="dateStart" className="text-white">De:</label>
                    <DatePicker date={selectedDate} setDate={handleDateChange} />
                </div>
                <div className="flex gap-x-3 items-center justify-center font-semibold">
                    <label htmlFor="dateStart" className="text-white">Hasta:</label>
                    <DatePicker date={selectedDate} setDate={handleDateChange} />
                </div>
            </div>
            <ScrollArea>
                <div className="flex gap-x-10 py-4 px-10 items-center justify-center">
                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-start w-72">
                        <p className="text-center text-white font-semibold mt-2">
                            SEXO DE LAS VICTIMAS
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center justify-center">
                                <PersonDressIcon className="w-20 h-20 mb-1" />
                                <p className="text-xl font-mono text-gray-300">
                                    74%
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <PersonIcon className="w-20 h-20 mb-1" />
                                <p className="text-xl font-mono text-gray-300">
                                    26%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-start w-72">
                        <p className="text-center text-white font-semibold mt-2">
                            HORARIOS MAS RECURRENTES
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center justify-center">
                                <Sun className="w-20 h-20 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    74%
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Moon className="w-20 h-20 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    26%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-start w-72">
                        <p className="text-center text-white font-semibold mt-2">
                            DENUNCIAS A OFICIALES
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center justify-center">
                                <PoliceIcon className="w-20 h-20 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    26%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-start w-72">
                        <p className="text-center text-white font-semibold mt-2">
                            CALCULO DE PERDIDAS
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center justify-center">
                                <CircleDollarSign className="w-20 h-20 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    S/. 1576 989.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            <div className="px-5">
                <p className="text-2xl text-gray-200 font-semibold p-5">
                    TIPOS DE CRIMENES MAS COMETIDOS
                </p>
                <Separator />

                <div className="flex mt-6 px-4 py-6">
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-5">
                <p className="text-2xl text-gray-200 font-semibold p-5">
                    OBJETOS MAS ROBADOS
                </p>
                <Separator />

                <div className="flex mt-6 px-4 py-6">
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                        <PiePercentageChart crimeList={crimeList} />
                        <p className="text-lg text-gray-200 font-mono ">
                            2.339
                        </p>
                        <p className="text-lg text-gray-200 font-mono">
                            Marcas
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-5">
                <p className="text-2xl text-gray-200 font-semibold p-5">
                    RANKING DE BARRIOS
                </p>
               <div className="p-10">
                   <div className="rounded-lg border-2 border-gray-200 flex items-center justify-around py-6 px-2">
                       <p className="text-xl text-gray-300">
                           1. Barrio Uno
                       </p>
                       <p className="text-xl text-gray-300">
                           2. Barrio Dos
                       </p>
                       <p className="text-xl text-gray-300">
                           3. Barrio Tres
                       </p>
                       <p className="text-xl text-gray-300">
                           4. Barrio Cuatro
                       </p>
                       <p className="text-xl text-gray-300">
                           5. Barrio Cinco
                       </p>
                   </div>
               </div>
            </div>
        </>

    );
};

export default StatisticsCard;
