import MyCityStats from "@/components/my-city-stats";
import {redirect} from "next/navigation";

export default function Home() {
  return <MyCityStats cityName="LIMA" />
}
