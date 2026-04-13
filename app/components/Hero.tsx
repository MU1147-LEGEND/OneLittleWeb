import { AirbnbIcon, BookingIcon, TripAdvIcon, VrboIcon } from "./Icons";
import ScheduleBtn from "./ScheduleBtn";

const Hero = () => {
    return (
        <section className="relative min-h-146 bg-white text-white overflow-hidden">
            {/* <!-- Grid Lines Background --> */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)] bg-size-[5.5rem_5.5rem]"></div>

            {/* <!-- Icons and Hero Content --> */}
            <div className="relative z-10 max-w-243 min-h-100 mx-auto text-center flex items-center justify-center">
                <div className="space-y-4 text-black text-center flex items-center justify-center flex-col w-[75%] z-10">
                    <h1 className="text-4xl font-bold text-[3rem] ">
                        Airbnb Assistants For
                    </h1>
                    <h2 className="text-2xl font-semibold text-[2.3rem]">
                        Property Management
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                    </p>
                    <ScheduleBtn text="Schedule A Meeting" />
                    <a href="#pricing" className="underline hover:no-underline">
                        See Pricing
                    </a>
                </div>

                {/* <!-- Icons --> */}
                <span className="absolute top-16 left-16 w-10 h-10 lg:w-20 lg:h-20 -rotate-45 lg:rounded-2xl rounded-sm shadow-xl bg-[#FF5A5F] flex items-center justify-center">
                    <AirbnbIcon className="rotate-25" />
                </span>
                <span className="absolute top-16 right-16 w-10 h-10 lg:w-20 lg:h-20 rotate-45 lg:rounded-2xl rounded-sm shadow-xl bg-[#0C3B7C] flex items-center justify-center">
                    <BookingIcon className="-rotate-25" />
                </span>

                <span className="absolute bottom-0 left-16 w-10 h-10 lg:w-20 lg:h-20 -rotate-45 lg:rounded-2xl rounded-sm shadow-xl bg-[#0E214B] flex items-center justify-center">
                    <VrboIcon className="rotate-25" />
                </span>
                <span className="absolute bottom-0 right-16 w-10 h-10 lg:w-20 lg:h-20 rotate-45 lg:rounded-2xl rounded-sm shadow-xl bg-[#34E0A1] flex items-center justify-center">
                    <TripAdvIcon className="-rotate-25" />
                </span>
            </div>

            {/* Random Dots. */}

            {/* <!-- Green Dot --> */}
            <div className="absolute top-20 left-[18%] animate-pulse">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#34E0A1" />
                </svg>
            </div>

            {/* <!-- Red Dot --> */}
            <div className="absolute top-[55%] left-6 animate-pulse">
                <svg width="14" height="14" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="7" fill="#ff5b5b" />
                </svg>
            </div>

            {/* <!-- Blue Dot --> */}
            <div className="absolute bottom-16 right-[22%] animate-pulse">
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="#4fc3ff" />
                </svg>
            </div>

            {/* <!-- Yellow Star --> */}
            <div className="absolute top-32 right-24 rotate-12">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffd54a">
                    <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                </svg>
            </div>
        </section>
    );
};
export default Hero;
