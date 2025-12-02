import { useRef, useEffect } from "react";
import gsap from "gsap";
import Rectangle2 from "../assets/banner/Rectangle 2.png";
import Cloud5 from "../assets/banner/9 5.png";
import Cloud4 from "../assets/banner/9 4.png";
import HornetBanner from "../assets/banner/Hornet_banner_wide-1-Photoroom 1.png";

const EscenaHornet = () => {
    const hornetRef = useRef<HTMLImageElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);
    const rightTextRef = useRef<HTMLDivElement>(null);
    const cloud1Ref = useRef<HTMLImageElement>(null);
    const cloud2Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // 🌫️ ANIMACIÓN SUTIL DE LAS NUBES (loop infinito)
        gsap.to(cloud1Ref.current, {
            x: 80,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.to(cloud2Ref.current, {
            x: -100,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // 🕷️ INTERACCIÓN PRINCIPAL
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const middle = window.innerWidth / 2;
            const distance = (x - middle) / middle;

            // HORNET PARALLAX
            gsap.to(hornetRef.current, {
                x: distance * 40,
                duration: 0.4,
                ease: "power2.out",
            });

            // TEXTO IZQUIERDA (aparece moviendo a DERECHA)
            gsap.to(leftTextRef.current, {
                opacity: distance > 0 ? Math.min(distance * 2, 1) : 0,
                x: distance > 0 ? 0 : -50,
                filter: distance > 0 ? "blur(0px)" : "blur(10px)",
                duration: 0.3,
                ease: "power2.out",
            });

            // TEXTO DERECHA (aparece moviendo a IZQUIERDA)
            gsap.to(rightTextRef.current, {
                opacity: distance < 0 ? Math.min(-distance * 2, 1) : 0,
                x: distance < 0 ? 0 : 50,
                filter: distance < 0 ? "blur(0px)" : "blur(10px)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="relative w-full h-210 overflow-hidden flex justify-center items-center"
            style={{
                backgroundImage: `url(${Rectangle2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* 🌫️ NUBES BACKGROUND */}
            <img ref={cloud1Ref} src={Cloud5} className="absolute top-[8%] left-[5%] w-[350px] opacity-20 pointer-events-none" style={{ zIndex: 2 }} />

            <img ref={cloud2Ref} src={Cloud4} className="absolute top-[55%] right-[10%] w-[400px] opacity-20 pointer-events-none" style={{ zIndex: 2 }} />

            {/* TEXTO IZQUIERDA */}
            <div ref={leftTextRef} className="absolute left-16 top-1/3.4 -translate-y-1/2 text-white text-6xl font-bold opacity-0 drop-shadow-lg" style={{ zIndex: 5 }}>
                <p  style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-3xl mb-10">The lost kingdom</p>
                <p style={{ fontFamily: "poppins", fontWeight: "200", textAlign: "justify"}} className="text-[20px] w-100"> Explore towering citadels, forgotten caverns, shimmering forests, and cities built upon threads of legend.</p>
            </div>

            {/* TEXTO DERECHA */}
            <div ref={rightTextRef} className="absolute right-10 top-1/3.4 -translate-y-1/2 text-white text-6xl font-bold opacity-0 drop-shadow-lg" style={{ zIndex: 5 }}>
                <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold", textAlign:"right" }} className="text-3xl mb-10">Meet Hornet</p>
                <p style={{ fontFamily: "poppins", fontWeight: "200", textAlign: "justify"}} className="text-[20px] w-100"> Discover her story, her power, and the challenges that await her in the vast kingdom of Pharloom.</p>
            </div>

            {/* 🕷️ HORNET GIGANTE */}
            <img 
                ref={hornetRef}
                src={HornetBanner}
                className="w-[700px] pointer-events-none"
                style={{
                    zIndex: 10,
                    width: 900,
                    filter: "drop-shadow(0 0 20px rgba(255,0,70,0.4))",
                }}
            />
        </div>
    );
};

export default EscenaHornet;
