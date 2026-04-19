"use client";

import { useState } from "react";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#1f232b] sm:text-5xl">
                    Airbnb Assistant{" "}
                    <span className="text-[#ED3C6A]">pricing</span>
                </h2>
                <p className="mt-5 text-lg text-[#30343b] sm:text-2xl">
                    Choose a plan that&apos;s right for you
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-lg text-[#2d3138] sm:gap-6">
                    <span
                        className={
                            isYearly ? "text-[#1f232b]" : "text-[#6b7280]"
                        }
                    >
                        Pay Monthly
                    </span>

                    <button
                        type="button"
                        aria-pressed={isYearly}
                        aria-label="Toggle yearly pricing"
                        onClick={() => setIsYearly((value) => !value)}
                        className={`relative h-9 w-16 rounded-full transition-colors duration-300 ${
                            !isYearly ? "bg-[#ED3C6A]" : "bg-[#b9bcc6]"
                        }`}
                    >
                        <span
                            className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                                !isYearly ? "-translate-x-7" : "translate-x-0"
                            }`}
                        />
                    </button>

                    <span
                        className={
                            isYearly ? "text-[#1f232b]" : "text-[#6b7280]"
                        }
                    >
                        Pay Yearly
                    </span>

                    <div className="flex items-center gap-2 text-[#ED3C6A]">
                        <svg
                            width="107"
                            height="88"
                            viewBox="0 0 107 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M95.4464 61.5975C83.1573 64.6612 68.4838 65.2433 57.6839 57.506C50.782 52.5614 47.1171 42.5628 49.6965 34.4472C52.1325 26.7826 57.8212 20.0482 66.3458 20.2535C70.789 20.3605 74.6202 22.4047 75.429 27.084C76.6648 34.2329 69.5331 41.6309 63.8629 44.7405C46.1673 54.4452 21.1341 53.9052 4.27689 42.6407"
                                stroke="#ED3C6A"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                d="M11.7068 55.8448C9.64479 52.9635 5.14205 46.2418 3.62678 42.4055"
                                stroke="#ED3C6A"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                d="M3.62686 42.4056C7.13951 41.9421 15.1239 40.6363 18.9602 39.121"
                                stroke="#ED3C6A"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                        </svg>

                        <span className="text-xl font-medium">Save 25%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
