"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { cn } from "../lib/utils";

interface StickyCardProps {
    cards: {
        id: number;
        image?: string;
        alt?: string;
        content?: React.ReactNode;
    }[];
    className?: string;
    containerClassName?: string;
    imageClassName?: string;
}

const StickyCard002: React.FC<StickyCardProps> = ({
    cards,
    className,
    containerClassName,
    imageClassName,
}) => {
    const container = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<HTMLDivElement[]>([]);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            const imageElements = imageRefs.current;
            const totalCards = imageElements.length;

            if (!imageElements[0]) return;

            gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

            for (let i = 1; i < totalCards; i++) {
                gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
            }

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sticky-cards",
                    start: "top top",
                    end: `+=${window.innerHeight * (totalCards - 1)}`,
                    pin: true,
                    scrub: 0.5,
                    pinSpacing: true,
                },
            });

            for (let i = 0; i < totalCards - 1; i++) {
                const currentImage = imageElements[i];
                const nextImage = imageElements[i + 1];

                scrollTimeline.to(currentImage, {
                    scale: 0.7,
                    rotation: 5,
                    duration: 1,
                    ease: "none",
                });

                scrollTimeline.to(
                    nextImage,
                    {
                        y: "0%",
                        duration: 1,
                        ease: "none",
                    },
                    i
                );
            }

            const resizeObserver = new ResizeObserver(() => {
                ScrollTrigger.refresh();
            });

            if (container.current) {
                resizeObserver.observe(container.current);
            }

            return () => {
                resizeObserver.disconnect();
                scrollTimeline.kill();
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        },
        { scope: container }
    );

    return (
        <div className={cn("relative h-full w-full", className)} ref={container}>
            <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 bg-black lg:p-8">
                <div className={cn("relative h-[95%] w-[95%] mx-auto overflow-hidden rounded-3xl", containerClassName)}>
                    {cards.map((card, i) => (
                        <div
                            key={card.id}
                            className={cn("absolute h-full w-full rounded-2xl overflow-hidden", imageClassName)}
                            ref={(el) => {
                                if (el) imageRefs.current[i] = el;
                            }}
                        >
                            {card.image ? (
                                <img
                                    src={card.image}
                                    alt={card.alt || ""}
                                    className={cn("rounded-4xl absolute h-full w-full object-cover", imageClassName)}
                                />
                            ) : (
                                card.content
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { StickyCard002 };
