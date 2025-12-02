import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Card0 from "../../public/gifs/card0.gif";
import Card1 from "../../public/gifs/card1.gif";
import Card2 from "../../public/gifs/card2.gif";
import Card3 from "../../public/gifs/card3.gif";
import Card4 from "../../public/gifs/card4.gif";

const cards = [Card0, Card1, Card2, Card3, Card4];

const Escena3: React.FC = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, 5);
        imageRefs.current = imageRefs.current.slice(0, 5);
    }, []);

    const handleMouseEnter = (index: number) => {
        gsap.to(cardsRef.current[index], {
            scale: 1.1,
            rotation: 0,
            marginLeft: "50px",
            marginRight: "50px",
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(imageRefs.current[index], {
            filter: "grayscale(0%)",
            duration: 0.3,
        });
    };

    const handleMouseLeave = (index: number) => {
        const ranrot = Math.floor(Math.random() * 21) - 10;

        gsap.to(cardsRef.current[index], {
            scale: 1,
            rotate: ranrot,
            marginLeft: "0px",
            marginRight: "0px",
            duration: 0.4,
            ease: "power2.out",
        });

        gsap.to(imageRefs.current[index], {
            filter: "grayscale(100%)",
            duration: 0.3,
        });
    };

    return (
        <div className="min-h-screen w-full bg-black mt-20">
            <div>
                <h1
                    style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                    className="
            text-white text-6xl flex justify-center items-center text-center
            transition-all duration-300
            hover:text-red-600
            hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]
        "
                >
                    Our world,
                </h1>

                <h1
                    style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                    className="
            text-white text-6xl flex justify-center items-center text-center
            transition-all duration-300
            hover:text-red-600
            hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]
        "
                >
                    Our characters
                </h1>
            </div>

            <div className="flex items-center justify-center p-[2vw] mt-10 gap-[2vw] cursor-pointer">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el;
                        }}
                        className="h-[60vh] w-[25vw] rounded-3xl relative overflow-hidden"
                        style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave(i)}
                        onTouchStart={() => handleMouseEnter(i)}
                        onTouchEnd={() => handleMouseLeave(i)}
                    >
                        <img
                            ref={(el) => {
                                if (el) imageRefs.current[i] = el;
                            }}
                            src={cards[i]}
                            className="absolute top-0 left-0 w-full h-full object-contain rounded-3xl filter grayscale"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Escena3;
