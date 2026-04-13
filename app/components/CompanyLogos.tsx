"use client";

import Image from "next/image";
import { type PointerEvent, useRef } from "react";

const logos = [
    { name: "Airbnb", src: "/Airbnb.svg" },
    { name: "Booking.com", src: "/Booking.svg" },
    { name: "Vrbo", src: "/Vrbo.svg" },
    { name: "Tripadvisor", src: "/Tripadvisor.svg" },
    { name: "Agoda", src: "/Agoda.svg" },
    { name: "Expedia", src: "/Expedia.svg" },
    { name: "HomeToGo", src: "/HomeToGo.svg" },
];

const CompanyLogos = () => {
    const railRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
    });

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        const rail = railRef.current;

        if (!rail) return;

        dragState.current = {
            isDragging: true,
            startX: event.clientX,
            scrollLeft: rail.scrollLeft,
        };

        rail.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        const rail = railRef.current;

        if (!rail || !dragState.current.isDragging) return;

        const distance = event.clientX - dragState.current.startX;
        rail.scrollLeft = dragState.current.scrollLeft - distance;
    };

    const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
        const rail = railRef.current;

        if (!rail) return;

        dragState.current.isDragging = false;

        if (rail.hasPointerCapture(event.pointerId)) {
            rail.releasePointerCapture(event.pointerId);
        }
    };

    return (
        <section className="bg-[#F6F6F6]">
            <div
                ref={railRef}
                className="flex justify-around cursor-grab items-center gap-4 mx-auto overflow-x-auto px-4 py-4 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                {logos.map((logo) => (
                    <div
                        key={logo.name}
                        className="flex h-14 min-w-40 shrink-0 items-center justify-center rounded-xl px-5"
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            width={150}
                            height={40}
                            className="h-8 w-auto object-contain"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyLogos;
