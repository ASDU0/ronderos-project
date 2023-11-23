import Map from "@/components/maps";
import {Button} from "@/components/ui/button";
import {DatePicker} from "@/components/date-picker";
import StatisticsCard from "@/components/statistics/statistics-card";
const StatisticsPage = () => {
    return (
        <div>
            <Map />
            <div className="bg-gray-800 flex flex-col gap-y-4 py-5">
                <StatisticsCard />
            </div>
        </div>
    );
};

export default StatisticsPage;
