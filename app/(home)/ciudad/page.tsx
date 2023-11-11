"use client"

import Legend from "@/components/Legend";
import Map from "@/components/Maps";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 bg-red-500">
          <div className="w-100 bg-red-500 h-32 flex flex-col lg:flex-row p-4">
            <p className="text-3xl text-center text-gray-200">
              Ubicacion
            </p>
            <Input className={cn(
              "bg-red-400"
            )} />
          </div>
        </div>
        <div className="w-3/4">
          <Legend />
          <Map />
        </div>
      </div>
    </div>
  )
}
