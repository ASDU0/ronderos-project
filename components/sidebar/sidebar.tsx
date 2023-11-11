import PersonDressIcon from "@/components/person-dress-icon";
import PersonIcon from "@/components/person-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react"; 

const Sidebar = () => {
  return ( 
    <>
      <div className="w-100 bg-red-500 h-24 flex flex-col p-4 items-center justify-center gap-x-2 gap-y-1">
        <p className="text-xl sm:text-2xl text-center text-gray-200 font-bold">
          UBICACION
        </p>
        <Input
          placeholder="Ingrese su ubicacion"
          className={cn(
            "bg-red-400 text-gray-200 placeholder:text-gray-100 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-slate-100 "
          )} />
      </div>

      <div className="bg-zinc-800 px-4 py-3 flex flex-col items-center justify-center gap-y-4">
        <p className="text-xl sm:text-2xl  font-bold px-4 text-zinc-300 text-center mt-3">
          ULTIMOS CRIMINES
        </p>
        <div className="flex flex-col gap-y-3">
          <Input
            placeholder="Filtrar por fechas" />
          <Input
            placeholder="Filtrar por crimenes" />
        </div>
        <ScrollArea className="w-52 h-52 px-5 border-2 border-gray-300 rounded-lg flex flex-col items-start py-3">
          <div className="">
            <p className="text-gray-200 font-medium">Hurto</p>
            <p className="text-gray-300 text-xs">08/03/2017 8:49am</p>
          </div>
          <div className="">
            <p className="text-gray-200 font-medium">Asalto</p>
            <p className="text-gray-300 text-xs">08/03/2017 8:50am</p>
          </div>
          <div className="">
            <p className="text-gray-200 font-medium">Secuestro</p>
            <p className="text-gray-300 text-xs">08/03/2017 8:10am</p>
          </div>
          <div className="">
            <p className="text-gray-200 font-medium">Hurto</p>
            <p className="text-gray-300 text-xs">08/03/2017 8:11am</p>
          </div>
          <div className="">
            <p className="text-gray-200 font-medium">Asalto</p>
            <p className="text-gray-300 text-xs">08/03/2017 10:11am</p>
          </div>
        </ScrollArea>
        <p className="text-xl sm:text-2xl font-bold px-4 text-zinc-300 text-center mt-3">
          RANKING
        </p>
        <div className="flex justify-between gap-x-4">
          <Button variant={"secondary"}>
            Barrios
          </Button>
          <Button variant={"secondary"}>
            Objetos
          </Button>
        </div>
        <p className="text-xl sm:text-2xl font-bold px-4 text-zinc-300 text-center mt-3">
          GENERO
        </p>
        <div className="flex justify-between gap-x-4">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <PersonDressIcon className="w-20 h-20" />
            <p className="text-2xl font-mono text-gray-300">
              26%
            </p>
            <p className="text-sm text-font-medium text-gray-400">
              Mujeres
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <PersonIcon className="w-20 h-20" />
            <p className="text-2xl font-mono text-gray-300">
              74%
            </p>
            <p className="text-sm text-font-medium text-gray-400">
              Hombres
            </p>
          </div>
        </div>
        <p className="text-xl sm:text-2xl font-bold px-4 text-zinc-300 text-center mt-3">
          HORARIO
        </p>
        <div className="flex justify-between gap-x-4">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Sun className="w-20 h-16 text-gray-300" />
            <p className="text-2xl font-mono text-gray-300">
              100%
            </p>
            <p className="text-sm text-font-medium text-gray-400">
              Dia
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Moon className="w-20 h-16 text-gray-300" />
            <p className="text-2xl font-mono text-gray-300">
              100%
            </p>
            <p className="text-sm text-font-medium text-gray-400">
              Noche
            </p>
          </div>
        </div>
        <Button variant={"destructive"}>
          <p className="text-gray-200 font-bold text-xs">
            ESTADISTICAS DE LA CIUDAD
          </p>
        </Button>
      </div>
    </>
   );
}
 
export default Sidebar;