"use client"
import Map from "@/components/maps";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {DatePicker} from "@/components/date-picker";
import {useState} from "react";
import PersonDressIcon from "@/components/person-dress-icon";
import PersonIcon from "@/components/person-icon";
import {Moon, Sun} from "lucide-react";

const StatisticsPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <Map />
            <div className="bg-gray-800 flex flex-col gap-y-4 py-5">
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
                <div className="flex gap-x-10 py-4 px-10">
                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-center w-72">
                        <p className="text-center text-white font-semibold">
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

                    <div className="rounded-3xl border-2 border-gray-200 flex flex-col gap-y-3 py-2 px-3 items-center justify-center w-72">
                        <p className="text-center text-white font-semibold">
                            HORARIOS MAS RECURRENTES
                        </p>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center justify-center">
                                <Sun className="w-20 h-16 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    74%
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Moon className="w-20 h-16 text-gray-300" />
                                <p className="text-xl font-mono text-gray-300">
                                    26%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
