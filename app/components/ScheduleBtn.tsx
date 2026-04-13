import { ArrowRight } from "lucide-react";

const ScheduleBtn = ({ text }: { text: string }) => {
    return (
        <button className="bg-[#ED3C6A] px-6 py-4 text-white hover:bg-[#ED3C6A]/90 cursor-pointer flex items-center gap-2 rounded-md transition-colors duration-200">
            {text} <ArrowRight />{" "}
        </button>
    );
};
export default ScheduleBtn;
