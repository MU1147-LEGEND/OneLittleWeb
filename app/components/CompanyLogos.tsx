"use client";

import Image from "next/image";
import {
    useCallback,
    type PointerEvent,
    useEffect,
    useMemo,
    useRef,
} from "react";

const logos = [
    { name: "Airbnb", src: "/Airbnb.svg" },
    { name: "Booking.com", src: "/Booking.svg" },
    { name: "Vrbo", src: "/Vrbo.svg" },
    { name: "Tripadvisor", src: "/Tripadvisor.svg" },
    { name: "Agoda", src: "/Agoda.svg" },
    { name: "Expedia", src: "/Expedia.svg" },
    { name: "HomeToGo", src: "/HomeToGo.svg" },
];

const LOOP_MULTIPLIER = 3;
const AUTO_SCROLL_SPEED = 0.45;
const DRAG_MULTIPLIER = 1.1;
const SPRING_EASING = 0.14;
const MOMENTUM_FRICTION = 0.94;

const CompanyLogos = () => {
    const railRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        startTarget: 0,
        lastX: 0,
        lastTime: 0,
    });
    const motionState = useRef({
        current: 0,
        target: 0,
        velocity: 0,
        autoScrollEnabled: true,
        hoverPaused: false,
    });

    const loopedLogos = useMemo(
        () =>
            Array.from({ length: LOOP_MULTIPLIER }, (_, loopIndex) =>
                logos.map((logo) => ({
                    ...logo,
                    key: `${logo.name}-${loopIndex}`,
                })),
            ).flat(),
        [],
    );

    const getSegmentWidth = useCallback(() => {
        const rail = railRef.current;

        if (!rail) return 0;

        return rail.scrollWidth / LOOP_MULTIPLIER;
    }, []);

    const recenterValue = useCallback(
        (value: number) => {
            const segmentWidth = getSegmentWidth();

            if (!segmentWidth) return value;

            if (value < segmentWidth * 0.5) {
                return value + segmentWidth;
            }

            if (value > segmentWidth * 1.5) {
                return value - segmentWidth;
            }

            return value;
        },
        [getSegmentWidth],
    );

    useEffect(() => {
        const rail = railRef.current;

        if (!rail) return;

        const syncPosition = () => {
            const segmentWidth = getSegmentWidth();

            if (!segmentWidth) return;

            motionState.current.current = segmentWidth;
            motionState.current.target = segmentWidth;
            motionState.current.velocity = 0;
            rail.scrollLeft = segmentWidth;
        };

        const animate = () => {
            const railNode = railRef.current;

            if (!railNode) return;

            const state = motionState.current;

            if (
                !dragState.current.isDragging &&
                state.autoScrollEnabled &&
                !state.hoverPaused
            ) {
                state.target += AUTO_SCROLL_SPEED;
            }

            const nextCurrent =
                state.current + (state.target - state.current) * SPRING_EASING;

            state.current = recenterValue(nextCurrent);
            state.target = recenterValue(state.target + state.velocity);
            state.velocity *= MOMENTUM_FRICTION;

            if (Math.abs(state.velocity) < 0.01) {
                state.velocity = 0;
            }

            railNode.scrollLeft = state.current;
            frameRef.current = requestAnimationFrame(animate);
        };

        syncPosition();
        frameRef.current = requestAnimationFrame(animate);
        window.addEventListener("resize", syncPosition);

        return () => {
            window.removeEventListener("resize", syncPosition);

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [getSegmentWidth, recenterValue]);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        const rail = railRef.current;

        if (!rail) return;

        dragState.current = {
            isDragging: true,
            startX: event.clientX,
            startTarget: motionState.current.target,
            lastX: event.clientX,
            lastTime: performance.now(),
        };

        motionState.current.velocity = 0;
        motionState.current.autoScrollEnabled = false;
        rail.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!dragState.current.isDragging) return;

        const now = performance.now();
        const elapsed = Math.max(now - dragState.current.lastTime, 1);
        const distance =
            (event.clientX - dragState.current.startX) * DRAG_MULTIPLIER;
        const deltaX = dragState.current.lastX - event.clientX;

        motionState.current.target = recenterValue(
            dragState.current.startTarget - distance,
        );
        motionState.current.velocity = deltaX / elapsed;

        dragState.current.lastX = event.clientX;
        dragState.current.lastTime = now;
    };

    const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
        const rail = railRef.current;

        if (!rail) return;

        dragState.current.isDragging = false;
        motionState.current.velocity *= 1.8;
        motionState.current.autoScrollEnabled = true;

        if (rail.hasPointerCapture(event.pointerId)) {
            rail.releasePointerCapture(event.pointerId);
        }
    };

    return (
        <section className="overflow-hidden bg-[#F6F6F6]">
            <div
                ref={railRef}
                className="mx-auto flex cursor-grab items-center gap-4 overflow-x-auto px-4 py-4 select-none active:cursor-grabbing [scrollbar-width:none] [touch-action:pan-y] [&::-webkit-scrollbar]:hidden"
                onMouseEnter={() => {
                    motionState.current.hoverPaused = true;
                }}
                onMouseLeave={() => {
                    motionState.current.hoverPaused = false;
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {loopedLogos.map((logo) => (
                    <div
                        key={logo.key}
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
