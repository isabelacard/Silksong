import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const cherryRef = useRef<HTMLImageElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const links = navRef.current?.querySelectorAll("a");

        // LOGO FLOAT ANIMATION
        gsap.to(logoRef.current, {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // CHERRY BREATHING ANIMATION
        gsap.to(cherryRef.current, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });

        // BUTTON HOVER
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
            Object.assign(ring.style, {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "0px",
                height: "0px",
                border: "2px solid white",
                borderRadius: "50%",
                opacity: "0.8",
                pointerEvents: "none",
            });
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
                boxShadow: "0 0 0 rgba(255,255,255,0)",
                duration: 0.6,
                ease: "power2.out",
            });
        });

        // LINKS EFFECT
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

        const onScroll = () => {
            if (window.scrollY > 20) {
                navRef.current?.classList.add("scrolled");
            } else {
                navRef.current?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const spawnParticles = (parent: HTMLElement, amount: number, color: string) => {
        for (let i = 0; i < amount; i++) {
            const p = document.createElement("span");
            Object.assign(p.style, {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                background: color,
                borderRadius: "50%",
                opacity: "1",
                filter: "blur(1.5px)",
                pointerEvents: "none",
            });

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
        <nav className="nav-fade fixed top-0 left-0 w-full z-50 px-4 py-4">
            <div ref={navRef} className="flex items-center justify-between max-w-[1920px] w-full mx-auto">
                {/* IZQUIERDA */}
                <div className="flex items-center gap-6 md:gap-20">
                    <img ref={cherryRef} src="/navbar/TEAMCHERRY.png" className="h-14 md:h-15 cursor-pointer" />
                    <div className="hidden md:flex gap-6 text-white font-trajan text-lg">
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="cursor-pointer pr-8">
                            ABOUT
                        </a>
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="cursor-pointer">
                            CHARACTERS
                        </a>
                    </div>
                </div>

                {/* LOGO CENTRADO */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img ref={logoRef} src="/navbar/LOGO.png" className="h-20 md:h-20 cursor-pointer" />
                </div>

                {/* DERECHA */}
                <div className="flex items-center gap-12 md:gap-20">
                    <div className="hidden md:flex gap-6 text-white font-trajan text-lg">
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="cursor-pointer pr-8">
                            HISTORY
                        </a>
                        <a style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="cursor-pointer">
                            MAPS
                        </a>
                    </div>
                    <button
                        ref={buttonRef}
                        className="relative border-2 border-white text-white px-6 py-2 font-trajan overflow-hidden hover:bg-white hover:text-black transition-colors duration-300"
                        style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}
                    >
                        DOWNLOAD
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
