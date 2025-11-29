import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const cards = [
    { id: 1, imgFront: "/imagesfront/front1.png", imgBack: "/imagesback/back1.png", top: "10%", left: "31%", width: "w-56", height: "h-56" },
    { id: 2, imgFront: "/imagesfront/front2.png", imgBack: "/imagesback/back2.png", top: "10%", right: "12%", width: "w-120", height: "h-56" },
    { id: 3, imgFront: "/imagesfront/front6.png", imgBack: "/imagesback/back6.png", top: "45%", left: "12%", width: "w-56", height: "h-56" },
    { id: 4, imgFront: "/imagesfront/front3.png", imgBack: "/imagesback/back3.png", top: "45%", right: "32%", width: "w-56", height: "h-56" },
    { id: 5, imgFront: "/imagesfront/front5.png", imgBack: "/imagesback/back5.png", top: "80%", left: "31%", width: "w-56", height: "h-56" },
    { id: 6, imgFront: "/imagesfront/front4.png", imgBack: "/imagesback/back4.png", top: "80%", right: "13%", width: "w-56", height: "h-56" },
];

const Escena5: React.FC = () => {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const flipEnter = (i: number) => {
        gsap.to(cardRefs.current[i], { rotateY: 180, duration: 0.6, ease: "power3.inOut" });
    };

    const flipLeave = (i: number) => {
        gsap.to(cardRefs.current[i], { rotateY: 0, duration: 0.6, ease: "power3.inOut" });
    };

    useEffect(() => {
        gsap.from(text1Ref.current, {
            x: -100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(text2Ref.current, {
            x: 100,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(text1Ref.current, {
            scale: 1.05,
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1,
        });

        gsap.to(text2Ref.current, {
            scale: 1.05,
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.75,
        });
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen relative flex items-center justify-center mt-400 mb-40 bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('../../public/fondos/Group30.png')"}}>
            <div className="absolute inset-0 bg-black/50"></div>

            <h1 ref={text1Ref} style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="Pro absolute top-2 left-70 text-white text-[90px] font-bold z-10">
                The craziest
            </h1>
            <h1 ref={text2Ref} style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="absolute top-27  left-180 text-white text-[90px] font-bold z-10">
                Maps
            </h1>
            <div className="relative w-full h-screen mt-50 max-w-7xl z-10">
                {cards.map((card, i) => (
                    <div
                        key={card.id}
                        ref={(el) => {
                            if (el) cardRefs.current[i] = el;
                        }}
                        className={`absolute ${card.width} ${card.height} rounded-2xl cursor-pointer`}
                        style={{
                            top: card.top,
                            left: card.left,
                            right: card.right,
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                        }}
                        onMouseEnter={() => flipEnter(i)}
                        onMouseLeave={() => flipLeave(i)}
                    >
                        {/* FRONT */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl" style={{ backfaceVisibility: "hidden" }}>
                            <img src={card.imgFront} className="block w-full h-full object-cover rounded-2xl" alt={`Card ${card.id} front`} />
                        </div>

                        {/* BACK */}
                        <div
                            className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                            }}
                        >
                            <img src={card.imgBack} className="block w-full h-full object-cover rounded-2xl" alt={`Card ${card.id} back`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Escena5;
