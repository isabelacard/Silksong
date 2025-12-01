import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import LogoWhite from "../../public/Logo/Logo_White_TeamCherry.png";

function FooterFinal() {
    const footerRef = useRef<HTMLDivElement>(null);
    const lineTopRef = useRef<HTMLDivElement>(null);
    const lineBottomRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const linksRef = useRef<HTMLDivElement>(null); 
    const contactRef = useRef<HTMLDivElement>(null); 
    const newsletterRef = useRef<HTMLDivElement>(null); 
    const copyrightRef = useRef<HTMLDivElement>(null);
    const legalLinksRef = useRef<HTMLDivElement>(null); 

    const linksListRef = useRef<HTMLDivElement>(null); 
    const emailTextRef = useRef<HTMLParagraphElement>(null);
    const numberTextRef = useRef<HTMLParagraphElement>(null);
    const subscribeButtonRef = useRef<HTMLButtonElement>(null);

    /**
     * @param elementRef 
     * @param hoverColor
     * @param baseColor 
     */
    const setupHoverInteraction = (
        elementRef: React.RefObject<HTMLElement>, 
        hoverColor: string = "#E00707", 
        baseColor: string = "#FFFFFF"
    ) => {
        const element = elementRef.current;
        if (!element) return () => {};

        const handleMouseEnter = () => {
            gsap.to(element, { 
                scale: 1.05, 
                color: hoverColor, 
                filter: `drop-shadow(0 0 5px ${hoverColor})`, 
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, { 
                scale: 1, 
                color: baseColor, 
                filter: "none", 
                duration: 0.2,
                ease: "power2.out"
            });
        };

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    };
    useEffect(() => {
       
        const elementsToAnimate = [linksRef.current, contactRef.current, newsletterRef.current];

 
        gsap.set(elementsToAnimate, { y: 50, opacity: 0 });
        gsap.set([lineTopRef.current, lineBottomRef.current], { scaleX: 0 });
        gsap.set(logoRef.current, { opacity: 0, scale: 0.5, rotation: -45 });
        gsap.set([copyrightRef.current, legalLinksRef.current], { opacity: 0 });

        const tl = gsap.timeline({
            delay: 0.5, 
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom", 
                toggleActions: "play none none none",
            }
        });

        tl

        .to(lineTopRef.current, {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "right center"
        })
     
        .to(logoRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)" 
        }, "<0.1") 
  
        .to(elementsToAnimate, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2 
        }, "<0.2") 
    
        .to(lineBottomRef.current, {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "left center" 
        }, "<0.2")
 
        .to([copyrightRef.current, legalLinksRef.current], {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "<0.1");
        
        const cleanupFunctions: (() => void)[] = [];
        const navLinks = Array.from(linksListRef.current?.querySelectorAll("p") || []);
        navLinks.forEach(link => {
            const linkRef = { current: link } as React.RefObject<HTMLParagraphElement>;
            cleanupFunctions.push(setupHoverInteraction(linkRef, "#E00707")); 
        });

        cleanupFunctions.push(setupHoverInteraction(emailTextRef, "#FFFFFF", "#FFFFFF")); 
        cleanupFunctions.push(setupHoverInteraction(numberTextRef, "#FFFFFF", "#FFFFFF")); 
        cleanupFunctions.push(setupHoverInteraction(subscribeButtonRef, "#FFFFFF", "#FFFFFF")); 
    
        const legalLinks = Array.from(legalLinksRef.current?.querySelectorAll("p") || []);
        legalLinks.forEach(link => {
            const linkRef = { current: link } as React.RefObject<HTMLParagraphElement>;
            cleanupFunctions.push(setupHoverInteraction(linkRef, "#E00707"));
        });

        return () => {
            tl.kill(); 
            cleanupFunctions.forEach(cleanup => cleanup());
        };

    }, []);


    return (
        <div ref={footerRef} className="bg-black pt-10 relative" >
            
          
            <div ref={lineTopRef} className="h-0.5 bg-white ml-20 mr-20 mb-20"></div>
            
            <div className="flex h-60 ml-20 mr-20 justify-between items-start">
                
              
                <div ref={linksRef} className="flex items-start">
                    <img ref={logoRef} className="w-40" src={LogoWhite} alt="Team Cherry Logo" />

                    <div ref={linksListRef} className="ml-15">
                        <p className="text-white text-[16px] mb-3 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            About Us
                        </p>
                        <p className="text-white text-[16px] mb-3 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            Forum
                        </p>
                        <p className="text-white text-[16px] mb-3 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            News
                        </p>
                        <p className="text-white text-[16px] mb-3 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            Other Games
                        </p>
                        <p className="text-white text-[16px] mb-3 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            Download
                        </p>
                    </div>
                </div>

                {/* BLOQUE 2: CONTACTO */}
                <div ref={contactRef}>
                    <div className="mb-15">
                        {/* El texto "Email" no tiene hover, solo el valor */}
                        <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-red-700 mb-2">
                            Email
                        </p>
                        <p ref={emailTextRef} className="text-white cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            cherryteam@gmail.com
                        </p>
                    </div>

                    <div>
                        {/* El texto "Number" no tiene hover, solo el valor */}
                        <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-red-700 mb-2">
                            Number
                        </p>
                        <p ref={numberTextRef} className="text-white cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                            +1 (201) 895-3801
                        </p>
                    </div>
                </div>

                {/* BLOQUE 3: NEWSLETTER */}
                <div ref={newsletterRef} className="ml-10">
                    <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-red-700 mb-2">
                        NewLetter
                    </p>

                    <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-white w-70 mb-2">
                        Enter your email and receive updates.
                    </p>

                    <form typeof="submit" className="flex flex-col w-70">
                        <input className="rounded-4xl bg-white h-8 pl-3 pr-3 mb-2" placeholder="Enter your Email"></input>
                        {/* El botón tendrá animación de hover */}
                        <button ref={subscribeButtonRef} className="bg-[#960000] rounded-4xl h-8 cursor-pointer text-white" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>Subscribe</button>
                    </form>
                </div>
            </div>

            {/* LÍNEA INFERIOR */}
            <div ref={lineBottomRef} className="h-0.5 bg-white ml-20 mr-20 mb-20"></div>

            {/* COPYRIGHT Y LEGAL */}
            <div className="ml-20 mb-15 mr-20 flex justify-between">
                <div ref={copyrightRef}>
                    <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-white w-70 mb-2">
                        2025 Team Cherry
                    </p>
                </div>
                <div ref={legalLinksRef} className="flex gap-10">
                    <p className="text-white mb-2 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                        Terms of Service
                    </p>
                    <p className="text-white mb-2 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                        Privacy Policy
                    </p>
                    <p className="text-white mb-2 cursor-pointer" style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}>
                        Cookies
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterFinal;