import Legend from "../components/Legend";
import Map from "../components/Maps";
import Navbar from "../components/Navbar";

export default function Page() {

  return (
    <div>
      <div className="flex">
        <div className="w-1/4">
          Statistics sidebar
        </div>
        <div className="w-3/4">
          <Legend />
          <Map />
        </div>
      </div>
    </div>
  )
}
