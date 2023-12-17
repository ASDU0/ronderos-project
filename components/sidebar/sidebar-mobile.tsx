import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const SidebarMobile = () => {
  return ( 
    <Sheet>
      <SheetTrigger>
        <p className="bg-red-500 text-gray-100 text-xl font-bold px-3 py-1 rounded-sm">
          Abrir estadisticas
        </p>
      </SheetTrigger>
      <SheetContent side={"left"} className="m-0 p-0">
        <Sidebar isMobile />
      </SheetContent>
    </Sheet>
   );
}
 
export default SidebarMobile;