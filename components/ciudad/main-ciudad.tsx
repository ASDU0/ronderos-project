import Legend from "../Legend";
import Map from "../Maps";
import Sidebar from "../sidebar/sidebar";

const MainCiudad = () => {
  return ( 
    <div className="flex">
      <div className="hidden md:flex flex-col w-[280px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Legend />
        <Map />
      </div>
    </div>
   );
}
 
export default MainCiudad;