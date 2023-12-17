import Map from "@/components/maps";
import {Button} from "@/components/ui/button";
import {DatePicker} from "@/components/date-picker";
import StatisticsCard from "@/components/statistics/statistics-card";
import FooterStatistics from "@/components/statistics/footer-statistics-";
const StatisticsPage = () => {
    return (
        <div>
            <Map />
            <div className="bg-gray-800 flex flex-col gap-y-4 py-5">
                <StatisticsCard />
            </div>
            <FooterStatistics />
        </div>
    );
};

export default StatisticsPage;
