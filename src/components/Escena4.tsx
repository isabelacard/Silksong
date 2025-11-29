import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


import Imagen1 from "../../public/images2/Escena3_Imagen1.png"; 
import Imagen2 from "../../public/images2/Escena3_Imagen2.png"; 
import Imagen3 from "../../public/images2/Escena3_Imagen3.png"; 
import Imagen4 from "../../public/images2/Escena3_Imagen4.png"; 
import Imagen5 from "../../public/images2/Escena3_Imagen5.png"; 

const Escena3: React.FC = () => {
    
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const block4Ref = useRef(null);
    const block5Ref = useRef(null);

   
    const blocks = [block1Ref, block2Ref, block3Ref, block4Ref, block5Ref];

    useEffect(() => {
        const setupHoverAnimation = (blockRef) => {
            const block = blockRef.current;
            if (!block) return;
            const title = block.querySelector(".js-title");
            const text = block.querySelector(".js-text");
            const image = block.querySelector(".js-image");
            const handleMouseEnter = () => {
            
                gsap.to(title, { 
                    color: "#E00707", 
                    scale: 1.05, 
                    duration: 0.3, 
                    ease: "power2.out"
                });

                gsap.to([image], {
                    scale: 1.05, 
                    filter: "drop-shadow(0 0 10px #E00707)", 
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to([text], {
                    scale: 1.05,  
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(title, { 
                    backgroundColor: "",
                    color: "#E00707", 
                    scale: 1, 
                    duration: 0.3, 
                    ease: "power2.out"
                });
                gsap.to([text, image], {
                    scale: 1,
                    filter: "drop-shadow(0 0 0px #E00707)", 
                    duration: 0.3,
                    ease: "power2.out"
                });
            };
            block.addEventListener("mouseenter", handleMouseEnter);
            block.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                block.removeEventListener("mouseenter", handleMouseEnter);
                block.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        blocks.forEach(setupHoverAnimation);

    }, []); 

    return (
        <div className=" mt-18">
            <div>
                <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-white text-6xl flex justify-end mr-50">Pharloom</p>
                <p className="text-[#E00707] text-5xl font-bold flex justify-end mr-50">History</p>
            </div>
            
            <div className="bg-black min-h-screen flex flex-col items-center justify-center ">
                
                <div ref={block1Ref} className="flex flex-row gap-7 justify-center items-center absolute cursor-pointer">
                    <div className="flex flex-col text-right">
                        <div className="flex flex-col js-title">
                            <p className="text-white text-5xl font-medium">The Rise of</p>
                            <p className="text-white text-5xl font-medium">the Citadel</p>
                        </div>
                        <div className="js-text">
                            <p className="text-white w-60 text-[13px] mt-5">
                                The creation and flourishing of the Pharloom Citadel. This was the
                                moment of greatest cultural and technological splendor for the
                                Silk Road civilization, with the construction of the Great Needle
                                and the consolidation of its traditions.
                            </p>
                        </div>
                    </div>
                    <img src={Imagen1} alt="Hornet" className="w-100 h-auto js-image" />
                </div>

                <div ref={block2Ref} className="flex flex-row gap-5 justify-center items-center absolute mt-210 cursor-pointer">
                    <img src={Imagen2} alt="Carmelita" className="w-100 h-auto js-image" />
                    <div className="flex flex-col text-left">
                        <div className="flex flex-col js-title">
                            <p className="text-white text-5xl font-medium">Hornet's</p>
                            <p className="text-white text-5xl font-medium">Exile</p>
                        </div>
                        <div className="js-text">
                            <p className="text-white w-60 text-[13px] mt-5">
                                Hornet is captured (or exiled) from her original world and
                                transported to the kingdom of Pharloom. This event serves as the
                                game's starting point and introduces her as an outsider in the new
                                kingdom's history.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={block3Ref} className="flex flex-row justify-center items-center absolute mt-410 z-2 cursor-pointer">
                    <div className="flex flex-col text-right items-end">
                        <div className="flex flex-col js-title">
                            <p className="text-white text-5xl font-medium">The Appearance</p>
                            <p className="text-white text-5xl font-medium">of the Hunters</p>
                        </div>
                        <div className="js-text">
                            <p className="text-white w-60 text-[13px] mt-5">
                                The emergence of a sect or group that pursues Hornet or plays an 
                                antagonistic role in her journey represents the central conflict 
                                and the direct threat within the citadel. Silk Road civilization, 
                                with the construction of the Great Needle and the consolidation
                                of its traditions.
                            </p>
                        </div>
                    </div>
                    <img src={Imagen3} alt="Lace" className="ml-[-15px] w-120 h-auto js-image" />
                </div>

                <div ref={block4Ref} className="flex flex-row gap-7 justify-center items-center absolute mt-610 z-1 cursor-pointer">
                    <img src={Imagen4} alt="seth" className="w-100 h-auto js-image" />
                    <div className="flex flex-col text-left">
                        <div className="flex flex-col js-title">
                            <p className="text-white text-5xl font-medium">Origin of</p>
                            <p className="text-white text-5xl font-medium">Silk</p>
                        </div>
                        <div className="js-text">
                            <p className="text-white w-60 text-[13px] mt-5">
                                A crucial point where the truth about the material that gives 
                                life to the kingdom (silk), its source, and its connection to 
                                Pharloom's darkest history is revealed. It could be linked to 
                                the mystery of the Silk Queen.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={block5Ref} className="flex flex-row gap-7 justify-center items-center absolute mt-810 cursor-pointer">
                    <div className="flex flex-col text-right items-end mb-30">
                        <div className="flex flex-col js-title">
                            <p className="text-white text-5xl font-medium">The Awakening </p>
                        </div>
                        <div className="js-text">
                            <p className="text-white w-60 text-[13px] mt-5">
                                The culmination of Hornet's journey, where she confronts the 
                                kingdom's central threat and decides Pharloom's fate, whether 
                                by awakening a dormant figure, restoring order, or stopping 
                                the source of the plague.
                            </p>
                        </div>
                    </div>
                    <img src={Imagen5} alt="HornetOtra" className="w-100 h-auto js-image" />
                </div>

            </div>
        </div>
    );
};

export default Escena3;