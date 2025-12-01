import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Final1 from "../../public/escena6Images/Final1.png";
import Final2 from "../../public/escena6Images/Final2.png";
import Final3 from "../../public/escena6Images/Final3.png";
import Final4 from "../../public/escena6Images/Final4.png";
import Final5 from "../../public/escena6Images/Final5.png";
import Lace from "../../public/escena6Images/LaceFinal.png";

function CardFinal({ src, className, text }) {
    const textRef = useRef(null);
    const imgRef = useRef(null); // referencia a la imagen

    const handleEnter = () => {
        // Mostrar texto
        gsap.to(textRef.current, {
            opacity: 1,
            y: -20,
            duration: 0.4,
            ease: "power3.out",
        });

        // Animación del cuadro (imagen)
        gsap.to(imgRef.current, {
            scale: 1.08,
            filter: "brightness(1.35)",
            duration: 0.4,
            ease: "power3.out",
        });
    };

    const handleLeave = () => {
        // Ocultar texto
        gsap.to(textRef.current, {
            opacity: 0,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
        });

        // Volver a normal el cuadro
        gsap.to(imgRef.current, {
            scale: 1,
            filter: "brightness(1)",
            duration: 0.4,
            ease: "power3.out",
        });
    };

    return (
        <div className={className + " absolute flex flex-col items-center"}>
            <p
                ref={textRef}
                className="text-white text-[1.2vw] font-bold mb-2 opacity-0 pointer-events-none"
                style={{
                    fontFamily: "Trajan Pro",
                    textShadow: "0 0 10px red",
                }}
            >
                {text}
            </p>

            <img
                ref={imgRef}
                src={src}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="cursor-pointer"
                style={{ transition: "transform 0.2s ease" }}
            />
        </div>
    );
}


function Escena6() {
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const text3Ref = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.from(text1Ref.current, {
                    duration: 1,
                    ease: "power3.out",
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

        gsap.from(text2Ref.current, {
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
    
        gsap.to(text2Ref.current, {
                    scale: 1.05,
                    duration: 1.3,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: 1,
                });

                 gsap.from(text3Ref.current, {
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
    
        gsap.to(text3Ref.current, {
                    scale: 1.05,
                    duration: 1.3,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: 1,
                });
    }, [])


    return (
        <div className="w-100% h-[150vh] bg-black overflow-hidden mr-40 ml-40 mt-70 mb-20">
            <div className="flex justify-end gap-6">
            <p  
                ref={text1Ref}
                style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                className="text-white text-[4vw] flex justify-end"
            >
                Game 
            </p>

            <p
                ref={text2Ref}
                style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                className="text-red-800 text-[4vw] flex justify-end mb-50"
            >
                Endings
            </p>
            </div>

            <div className="relative flex justify-center top-20">

                <p
                ref={text3Ref}
                style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                className="text-white absolute text-8xl top-110 z-10 brightness-100">
                    Lace</p>
                    <p
                style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                className="text-amber-400 absolute text-8xl top-110 z-9 brightness-100 blur-sm opacity-80">
                    Lace</p>
                
                <img
                    className="w-[20vw] absolute z-5 pointer-events-none top-[-7vh]"
                    src={Lace}
                />

                {/* Cards CON TEXTO + ANIMACIÓN */}
                <CardFinal
                    src={Final1}
                    text="Ending 1 — Weaver Queen"
                    className="w-[12vw] h-[71vh] absolute right-[59vw]"
                />

                <CardFinal
                    src={Final2}
                    text="Ending 2 — Twisted Girl"
                    className="w-[12vw] h-[71vh] absolute right-[46vw] top-[-15vh]"
                />

                <CardFinal
                    src={Final3}
                    text="Ending 3 — Silk Tie"
                    className="w-[12vw] h-[71vh] absolute top-[-30vh]"
                />

                <CardFinal
                    src={Final4}
                    text="Ending 4 — Sister of the void"
                    className="w-[12vw] h-[71vh] absolute left-[46vw] top-[-17vh]"
                />

                <CardFinal
                    src={Final5}
                    text="Ending 5 — Changing eras"
                    className="w-[12vw] h-[71vh] absolute left-[59vw]"
                />

            </div>
        </div>
    );
}

export default Escena6;
