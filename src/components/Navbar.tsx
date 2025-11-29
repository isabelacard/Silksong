import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const cherryRef = useRef<HTMLImageElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const links = navRef.current?.querySelectorAll("a");

        gsap.to(logoRef.current, {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.to(cherryRef.current, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });

        const btn = buttonRef.current;

        btn?.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                scale: 1.12,
                boxShadow: "0 0 22px rgba(255,255,255,0.9)",
                duration: 0.3,
                ease: "power3.out",
            });

            const ring = document.createElement("span");
            ring.className = "energy-ring";
            ring.style.position = "absolute";
            ring.style.left = "50%";
            ring.style.top = "50%";
            ring.style.transform = "translate(-50%, -50%)";
            ring.style.width = "0px";
            ring.style.height = "0px";
            ring.style.border = "2px solid white";
            ring.style.borderRadius = "50%";
            ring.style.opacity = "0.8";
            ring.style.pointerEvents = "none";
            btn.appendChild(ring);

            gsap.to(ring, {
                width: "120px",
                height: "120px",
                opacity: 0,
                duration: 0.55,
                ease: "power2.out",
                onComplete: () => ring.remove(),
            });
        });

        btn?.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                scale: 1,
                boxShadow: "0 0 0px rgba(255,255,255,0)",
                duration: 0.6, 
                ease: "power2.out", 
            });
        });

        // LINKS
        links?.forEach((link) => {
            const underline = document.createElement("span");
            underline.className = "block absolute left-0 bottom-[-4px] h-[2px] bg-white w-0 pointer-events-none";
            link.appendChild(underline);

            link.style.position = "relative";

            link.addEventListener("mouseenter", () => {
                gsap.to(link, {
                    rotateX: 8,
                    rotateY: -8,
                    duration: 0.25,
                    ease: "power3.out",
                });

                gsap.to(link, {
                    textShadow: "0px 0px 20px rgba(255,255,255,1)",
                    duration: 0.2,
                });

                gsap.to(underline, {
                    width: "100%",
                    duration: 0.25,
                    ease: "power4.out",
                });

                spawnParticles(link, 35, "white");
            });

            link.addEventListener("mouseleave", () => {
                gsap.to(link, {
                    rotateX: 0,
                    rotateY: 0,
                    textShadow: "0px 0px 0px rgba(255,255,255,0)",
                    duration: 0.25,
                });

                gsap.to(underline, {
                    width: "0%",
                    duration: 0.25,
                    ease: "power2.inOut",
                });
            });
        });
    }, []);

    const spawnParticles = (parent: HTMLElement, amount: number, color: string) => {
        for (let i = 0; i < amount; i++) {
            const p = document.createElement("span");
            p.style.position = "absolute";
            p.style.left = "50%";
            p.style.top = "50%";
            p.style.width = `${3 + Math.random() * 5}px`;
            p.style.height = `${3 + Math.random() * 5}px`;
            p.style.background = color;
            p.style.borderRadius = "50%";
            p.style.opacity = "1";
            p.style.filter = "blur(1.5px)";
            p.style.pointerEvents = "none";

            parent.appendChild(p);

            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 70;

            gsap.to(p, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                scale: 0,
                duration: 0.8 + Math.random() * 0.6,
                ease: "power2.out",
                onComplete: () => p.remove(),
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4">
            <div ref={navRef} className="flex items-center justify-between max-w-[1920px] h-27 mx-auto">
                <div className="flex items-center ml-10">
                    <img ref={cherryRef} src="../../public/navbar/TEAMCHERRY.png" className="h-13 cursor-pointer" />
                </div>

                <div className="flex items-center mr-10 gap-12 text-white font-trajan text-lg">
                    <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-[18px] cursor-pointer" >ABOUT</a>
                    <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-[18px] mr-40 cursor-pointer">CHARACTERS</a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img ref={logoRef} src="../../public/navbar/LOGO.png" className="h-20 cursor-pointer" />
                </div>

                <div className="flex items-center gap-12 mr-10">
                    <div className="flex gap-12 text-white font-trajan text-lg ">
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-[18px] cursor-pointer">HISTORY</a>
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-[18px] cursor-pointer">MAPS</a>
                    </div>

                    <button style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} ref={buttonRef} className="relative border-2 border-white text-white px-8 py-2 font-trajan overflow-hidden">
                        DOWNLOAD
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
