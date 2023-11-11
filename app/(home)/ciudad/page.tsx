"use client"

import Legend from "@/components/Legend";
import Map from "@/components/Maps";
import Sidebar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export default function Page() {
  return (
    <div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <p className="bg-red-500 text-gray-100 text-xl font-bold px-3 py-1 rounded-sm">
              Abrir estadisticas
            </p>
          </SheetTrigger>
          <SheetContent side={"left"} className="m-0 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex">
        <div className="hidden md:flex flex-col w-[280px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Legend />
          <Map />
        </div>
      </div>
     
    </div>
  )
}
