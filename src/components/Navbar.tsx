import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const teamCherryRef = useRef<HTMLImageElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const downloadRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animaciones de entrada
        tl.from(teamCherryRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(
                logoRef.current,
                {
                    opacity: 0,
                    y: -50,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            )
            .from(
                linksRef.current?.children || [],
                {
                    opacity: 0,
                    y: -30,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.5"
            )
            .from(
                downloadRef.current,
                {
                    opacity: 0,
                    x: 50,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );

        // Animación hover para el logo
        const logo = logoRef.current;
        if (logo) {
            logo.addEventListener("mouseenter", () => {
                gsap.to(logo, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            logo.addEventListener("mouseleave", () => {
                gsap.to(logo, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4">
            <div className="flex items-center justify-between max-w-[1920px] mx-auto">
                <div className="flex items-center">
                    <img ref={teamCherryRef} src="../../public/navbar/TEAMCHERRY.png" alt="Team Cherry" className="h-16 cursor-pointer" />
                </div>

                <div ref={linksRef} className="flex items-center gap-612 text-white font-trajan text-lg">
                    <a href="#about" className="hover:text-gray-300 transition-colors cursor-pointer">
                        ABOUT US
                    </a>
                    <a href="#forum" className="hover:text-gray-300 transition-colors cursor-pointer">
                        FORUM
                    </a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img ref={logoRef} src="../../public/navbar/LOGO.png" alt="Hollow Knight Silksong" className="h-20 cursor-pointer" />
                </div>

                <div className="flex items-center gap-12">
                    <div className="flex gap-12 text-white font-trajan text-lg">
                        <a href="#news" className="hover:text-gray-300 transition-colors cursor-pointer">
                            NEWS
                        </a>
                        <a href="#games" className="hover:text-gray-300 transition-colors cursor-pointer">
                            OTHER GAMES
                        </a>
                    </div>

                    <button ref={downloadRef} className="border-2 border-white text-white font-trajan px-8 py-2 hover:bg-white hover:text-[#2a2a2a] transition-all duration-300">
                        DOWNLOAD
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
