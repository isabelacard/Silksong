import FondoEscena2 from "../../public/imagesEscena2/Fondo_Escena_2.png"
import Hornet from "../../public/imagesEscena2/Hornet.png"
import Shakra from "../../public/imagesEscena2/Shakra.png"
import Cuadro1Img from "../../public/imagesEscena2/Cuadro 1.png"
import Cuadro2Img from "../../public/imagesEscena2/Cuadro 2.png"
import Cuadro3Img from "../../public/imagesEscena2/Cuadro 3.png"
import Btn from "../../public/imagesEscena2/Boton.png"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { CSSPlugin } from 'gsap/CSSPlugin';

// Registrar CSSPlugin para asegurar que funcione con filtros y colores
gsap.registerPlugin(CSSPlugin);

function Escena2 (){

    // REFERENCIAS DE INTERACCIÓN (existentes)
    const textRef1 = useRef<HTMLParagraphElement | null>(null); 
    const textRef2 = useRef<HTMLParagraphElement | null>(null); 
    const btnRef = useRef<HTMLDivElement | null>(null);
    const titleRefs = useRef<(HTMLDivElement | null)[]>([]);

    const hornetRef = useRef<HTMLImageElement | null>(null);
    const shakraRef = useRef<HTMLImageElement | null>(null);
    const cuadro1ImgRef = useRef<HTMLImageElement | null>(null);
    const cuadro2ImgRef = useRef<HTMLImageElement | null>(null);
    const cuadro3ImgRef = useRef<HTMLImageElement | null>(null);

    const [cuadro1MainText, setCuadro1MainText] = useState("500k Players");
    const [cuadro1SubText, setCuadro1SubText] = useState("500.000 simultaneous players in Steam");

    const [cuadro2MainText, setCuadro2MainText] = useState("3 Million");
    const [cuadro2SubText, setCuadro2SubText] = useState("Commercial success");

    const [cuadro3MainText, setCuadro3MainText] = useState("Number 1");
    const [cuadro3SubText, setCuadro3SubText] = useState("The game dominated all the scene");


    useEffect(() => {
        const elementsToAnimate = [textRef1.current, textRef2.current];
        const btnElement = btnRef.current;
        const titleElements = titleRefs.current.filter(el => el !== null) as HTMLDivElement[];

        const H = hornetRef.current;
        const S = shakraRef.current;

        const cuadro1Div = document.getElementById("cuadro1-container");
        const cuadro2Div = document.getElementById("cuadro2-container");
        const cuadro3Div = document.getElementById("cuadro3-container");

        const c1Img = cuadro1ImgRef.current;
        const c2Img = cuadro2ImgRef.current;
        const c3Img = cuadro3ImgRef.current;

        const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

        if (H) { tl.fromTo(H, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 0); }
        if (S) { tl.fromTo(S, { x: 100, opacity: 0, scale: 0.8 }, { x: 0, opacity: 1, scale: 1 }, "<0.2"); }

        const cuadrosDivs = [cuadro1Div, cuadro2Div, cuadro3Div];
        const initialX = -100;
        
        cuadrosDivs.forEach((cuadro, index) => {
            if (cuadro) {
                gsap.set(cuadro, { x: initialX, opacity: 0 });
                tl.to(cuadro, { x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, index === 0 ? "<0.1" : "-=0.2");
            }
        });

        const setupTextHoverAnimation = (textElement: HTMLParagraphElement) => {
            const handleMouseEnter = () => { gsap.to(textElement, { scale: 1.1, filter: "drop-shadow(0 0 2px #ffffff)", duration: 0.3, ease: "power2.out" }); };
            const handleMouseLeave = () => { gsap.to(textElement, { scale: 1, filter: "drop-shadow(0 0 0px #000000)", duration: 0.3, ease: "power2.out" }); };
            textElement.addEventListener("mouseenter", handleMouseEnter);
            textElement.addEventListener("mouseleave", handleMouseLeave);
            return () => { textElement.removeEventListener("mouseenter", handleMouseEnter); textElement.removeEventListener("mouseleave", handleMouseLeave); };
        };

        const setupBtnHoverAnimation = (btnElement: HTMLDivElement) => {
            const handleBtnMouseEnter = () => { gsap.to(btnElement, { scale: 1.01, filter: "drop-shadow(0 0 10px #E00707)", duration: 0.3, ease: "power2.out" }); };
            const handleBtnMouseLeave = () => { gsap.to(btnElement, { scale: 1, filter: "drop-shadow(0 0 0px #E00707)", duration: 0.3, ease: "power2.out" }); };
            btnElement.addEventListener("mouseenter", handleBtnMouseEnter);
            btnElement.addEventListener("mouseleave", handleBtnMouseLeave);
            return () => { btnElement.removeEventListener("mouseenter", handleBtnMouseEnter); btnElement.removeEventListener("mouseleave", handleBtnMouseLeave); };
        };

        const setupTitleHoverAnimation = (titleContainer: HTMLDivElement) => {
            const word = titleContainer.querySelector(".js-typing-word");
            if (!word) return () => {};
            gsap.set(word, { width: 0, overflow: 'hidden' });
            let finalWidth = 0; 
            gsap.to(word, {
                width: 'auto', duration: 0, onComplete: () => {
                    finalWidth = word.clientWidth;
                    gsap.set(word, { width: 0 });
                }
            });
            const handleTitleMouseEnter = () => { gsap.to(word, { width: finalWidth, duration: 0.5, ease: "power2.out" }); };
            const handleTitleMouseLeave = () => { gsap.to(word, { width: 0, duration: 0.3, ease: "power2.out" }); };
            titleContainer.addEventListener("mouseenter", handleTitleMouseEnter);
            titleContainer.addEventListener("mouseleave", handleTitleMouseLeave);
            return () => { titleContainer.removeEventListener("mouseenter", handleTitleMouseEnter); titleContainer.removeEventListener("mouseleave", handleTitleMouseLeave); };
        };

        const setupCuadroInteraction = (
            cuadroDiv: HTMLDivElement, 
            cuadroImg: HTMLImageElement,
            setMainText: React.Dispatch<React.SetStateAction<string>>,
            setSubText: React.Dispatch<React.SetStateAction<string>>,
            initialMainText: string,
            initialSubText: string,
            hoverColor: string = "#E00707", 
            clickColor: string = "#FFFFFF", 
            clickFilter: string = "drop-shadow(0 0 5px #dc1212)" 
        ) => {
            let isClicked = false; 
            const clickedScale = 1.01;
            const clickedDuration = 0.3;

            const handleCuadroMouseEnter = () => {
                if (!isClicked) {
                    gsap.to(cuadroDiv, { scale: 1.01, filter: `drop-shadow(0 0 12px ${hoverColor})`, duration: 0.3 });
                } else {
                    // Mantiene el brillo blanco si está cliqueado y se le hace hover
                    gsap.to(cuadroDiv, { scale: clickedScale, filter: clickFilter, duration: clickedDuration });
                }
            };

            const handleCuadroMouseLeave = () => {
                if (!isClicked) {
                    gsap.to(cuadroDiv, { scale: 1, filter: "drop-shadow(0 0 0px transparent)", duration: 0.3 });
                } else {
                    // Vuelve al estado de "clic sin hover" (escala y brillo blanco)
                    gsap.to(cuadroDiv, { scale: clickedScale, filter: clickFilter, duration: clickedDuration });
                }
            };

            const handleCuadroClick = () => {
                isClicked = !isClicked; 
                if (isClicked) {
                    // Estado "Click": Escala y Brillo Blanco
                    gsap.to(cuadroDiv, { scale: clickedScale, filter: clickFilter, duration: clickedDuration });
                    
                    // Imagen del Cuadro: Cambia el color a Blanco
                    gsap.to(cuadroImg, { 
                        // Aplicamos un filtro de saturación y brillo para que se vea blanco puro (si la imagen original lo permite)
                        filter: `saturate(60%) brightness(150%) ${clickFilter}`, // <-- Brillo y desaturación a blanco
                        duration: 0.5 
                    });
                    
                    setMainText("Enjoy"); 
                    setSubText("The Master Piece of Team Cherry"); 
                } else {
                    // Estado "No Click"
                    gsap.to(cuadroDiv, { scale: 1, filter: "drop-shadow(0 0 0px transparent)", duration: 0.3 });
                    gsap.to(cuadroImg, { 
                        filter: "none", // Vuelve al color original
                        duration: 0.5 
                    });
                    setMainText(initialMainText); 
                    setSubText(initialSubText);
                }
            };

            // ... (event listeners) ...
            cuadroDiv.addEventListener("mouseenter", handleCuadroMouseEnter);
            cuadroDiv.addEventListener("mouseleave", handleCuadroMouseLeave);
            cuadroDiv.addEventListener("click", handleCuadroClick);

            return () => {
                cuadroDiv.removeEventListener("mouseenter", handleCuadroMouseEnter);
                cuadroDiv.removeEventListener("mouseleave", handleCuadroMouseLeave);
                cuadroDiv.removeEventListener("click", handleCuadroClick);
            };
        };


        // --- INICIALIZACIÓN DE LISTENERS (HOVER/CLICK) ---
        const cleanups: (() => void)[] = [];

        // Párrafos (hover)
        const existingTextElements = elementsToAnimate.filter((el): el is HTMLParagraphElement => el !== null);
        existingTextElements.forEach(element => cleanups.push(setupTextHoverAnimation(element)));

        // Botón (hover)
        if (btnElement) cleanups.push(setupBtnHoverAnimation(btnElement));
        
        // Títulos (typing effect)
        titleElements.forEach(element => cleanups.push(setupTitleHoverAnimation(element)));

        // Cuadros de Datos (hover y click)
        if (cuadro1Div && c1Img) {
            cleanups.push(setupCuadroInteraction(
                cuadro1Div, c1Img, 
                setCuadro1MainText, setCuadro1SubText, 
                "500k Players", "500.000 simultaneous players in Steam",
                "#e83146", "#ffffff" // Hover rojo, Click verde
            ));
        }
        // Repite para Cuadro 2 y Cuadro 3 con sus propios refs y estados
        if (cuadro2Div && c2Img) {
            cleanups.push(setupCuadroInteraction(
                cuadro2Div, c2Img, 
                setCuadro2MainText, setCuadro2SubText, 
                "3 Million", "Commercial success",
                "#e83146", "#FFD700" // Hover azul, Click dorado
            ));
        }
        if (cuadro3Div && c3Img) {
            cleanups.push(setupCuadroInteraction(
                cuadro3Div, c3Img, 
                setCuadro3MainText, setCuadro3SubText, 
                "Number 1", "The game dominated all the scene",
                "#e83146", "#8A2BE2" // Hover naranja, Click púrpura
            ));
        }


        // Limpieza: Ejecutamos todas las funciones de cleanup
        return () => {
            cleanups.forEach(cleanup => cleanup());
        };

    }, []); // Dependencias vacías para ejecutar una vez al montar

    
    return(
        <div className="overflow-hidden w-full h-screen relative">
            <div className="w-full h-full absolute inset-0">
                <img
                    className="flex relative right-2 w-full scale-102" 
                    src={FondoEscena2}
                    alt="Fondo"
                />
                
                {/* Contenedor principal relativo al viewport */}
                <div className="absolute inset-0 w-full h-full">
                    
                    <img
                        ref={hornetRef}
                        className="absolute bottom-[8vh] left-[15vw] w-[55vw] z-10 pointer-events-none" 
                        src={Hornet}
                        alt="Hornet"
                    />

                    <img
                        ref={shakraRef}
                        className="absolute bottom-[41vh] z-1 left-[38vw] w-[23vw]" 
                        src={Shakra}
                        alt="Shakra"
                    />

                    {/* --- CUADRO 1: 500k Players --- */}
                    <div id="cuadro1-container" className="cursor-pointer absolute bottom-[60vh] left-[8.3vw] w-[27vw] h-[15vh]">
                        <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-[18vh] text-[2vw] z-2 left-[9vw] text-white whitespace-nowrap"
                        >
                            {cuadro1MainText}
                        </p>
                        <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-[17vh] text-[0.7vw] z-2 left-[9vw] text-white whitespace-nowrap"
                        >
                            {cuadro1SubText}
                        </p>
                        <img 
                            ref={cuadro1ImgRef} 
                            className="absolute bottom-20 left-15 w-full"
                            src={Cuadro1Img}
                            alt="Cuadro 1"
                        /> 
                    </div>

                    {/* --- CUADRO 2: 3 Million --- */}
                    <div id="cuadro2-container" className="cursor-pointer absolute bottom-[45vh] left-[12.5vw] w-[20vw] h-[13vh]">
                        <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-[12vh] text-[2vw] z-2 left-[8vw] text-white whitespace-nowrap"
                        >
                            {cuadro2MainText}
                        </p>
                        <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-[11vh] text-[0.7vw] z-2 left-[8vw] text-white whitespace-nowrap"
                        >
                            {cuadro2SubText}
                        </p>
                        <img 
                            ref={cuadro2ImgRef}
                            className="absolute bottom-10 left-21 w-full"
                            src={Cuadro2Img}
                            alt="Cuadro 2"
                        />
                    </div>

                    {/* --- CUADRO 3: Number 1 --- */}
                    <div id="cuadro3-container" className="cursor-pointer absolute bottom-[31.5vh] left-[8.3vw] w-[35vw] h-[15vh]">
                        <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-[4vh] text-[1.5vw] z-2 left-[6vw] text-white whitespace-nowrap"
                        >
                            {cuadro3MainText}
                        </p>
                        <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-[1vh] text-[0.5vw] z-2 left-[6vw] text-white whitespace-nowrap"
                        >
                            {cuadro3SubText}
                        </p>
                        <img 
                            ref={cuadro3ImgRef}
                            className="absolute bottom-0 left-19 w-full"
                            src={Cuadro3Img}
                            alt="Cuadro 3"
                        />
                    </div>


                    {/* === TÍTULO ANIMADO (Typing Effect) === */}
                    <div id="TituloAnimado">
                        <div className="js-typing-container">
                            <p style={{ fontFamily: "Trajan Pro", fontWeight:"bold" }} 
                            className="absolute bottom-[51vh] text-[5vw] z-2 left-[50vw] text-white js-typing-word
                            hover:text-red-500 transition-all cursor-pointer">
                            GAME</p>
                        </div>

                        <div className="js-typing-container">
                            <p style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                            className="absolute bottom-[47.4vh] text-[2.5vw] z-2 left-[55vw] text-white js-typing-word
                            hover:text-red-600 transition-all cursor-pointer">
                            OF THE</p>
                        </div>

                        <div className="js-typing-container">
                            <p style={{ fontFamily: "Trajan Pro", fontWeight:"bold" }} 
                            className="absolute bottom-[40vh] text-[3.5vw] z-2 left-[54vw] text-white js-typing-word
                            hover:text-red-500 transition-all cursor-pointer">
                            YEAR</p>
                        </div>

                        <div className="js-typing-container">
                            <p style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                            className="absolute bottom-[36.3vh] text-[1.5vw] z-2 left-[52.7vw] text-white js-typing-word
                            hover:drop-shadow-lg hover:drop-shadow-amber-200 transition-all 
                            hover:text-amber-300 cursor-pointer">
                            NOMINEE</p>
                        </div>
                    </div>

                    <div id="Boton" ref={btnRef} className="absolute bottom-[29.6vh] left-[56vw] w-[7.3vw] h-auto cursor-pointer">    
                        <img 
                            src={Btn}
                            className="w-full"
                            alt="Button"
                        />

                        <p
                            style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[0.8vw] whitespace-nowrap"
                        >
                            View More
                        </p>
                    </div>

                    {/* Párrafo 1 con hover */}
                    <p
                        ref={textRef1}
                        style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                        className="absolute bottom-[62vh] z-11 text-[0.6vw] left-[49vw] w-[15vw] text-white cursor-pointer"
                    >
                        Hollow Knight: Silksong has secured a major Game of the Year "GOTY" 
                        nomination at The Game Awards 2025. This recognition highlights the 
                        enormous anticipation and quality of the game.
                    </p>

                    {/* Párrafo 2 con hover */}
                    <p
                        ref={textRef2}
                        style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                        className="absolute bottom-[26vh] z-11 text-[0.6vw] left-[9vw] w-[15vw] text-white cursor-pointer"
                    >
                        The launch of Hollow Knight: Silksong was a resounding success, 
                        exceeding expectations with impressive sales figures and exceptional 
                        critical acclaim.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Escena2