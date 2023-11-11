import MyCityStats from "@/components/MyCityStats";
import {redirect} from "next/navigation";

export default function Home() {
  return <MyCityStats cityName="LIMA" />
}
