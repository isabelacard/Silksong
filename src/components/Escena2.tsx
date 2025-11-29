import FondoEscena2 from "../../public/imagesEscena2/Fondo_Escena_2.png"
import Hornet from "../../public/imagesEscena2/Hornet.png"
import Shakra from "../../public/imagesEscena2/Shakra.png"
import Cuadro1Img from "../../public/imagesEscena2/Cuadro 1.png" // Renombrado para evitar conflicto
import Cuadro2Img from "../../public/imagesEscena2/Cuadro 2.png" // Renombrado
import Cuadro3Img from "../../public/imagesEscena2/Cuadro 3.png" // Renombrado
import Btn from "../../public/imagesEscena2/Boton.png"
import { useEffect, useRef, useState } from "react" // ¡Importa useState!
import { gsap } from "gsap" 
import { CSSPlugin } from 'gsap/CSSPlugin'; // Necesario para animar filtros/colores en algunos entornos

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
            clickColor: string = "#FFFFFF", // <-- Ahora blanco por defecto para click
            clickFilter: string = "drop-shadow(0 0 5px #dc1212)" // <-- Filtro blanco
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
        <div className="overflow-hidden">
            <div>
                <div id="fondo">
                    <img
                    className="flex relative right-2 w-full scale-102" 
                    src={FondoEscena2}>
                    </img>
                    <div className="relative z-10 w-full h-full">
                        
                        <img
                        ref={hornetRef}
                        className="absolute bottom-30 left-45 w-230 z-10 pointer-events-none" 
                        src={Hornet}></img>

                        <img
                        ref={shakraRef}
                        className="absolute bottom-95 z-1 left-140 w-95" 
                        src={Shakra}></img>

                        {/* --- CUADRO 1: 500k Players --- */}
                        {/* El div padre tiene la animación de hover/click */}
                        <div id="cuadro1-container">
                            <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-172 text-3xl z-2 left-65 text-white">{cuadro1MainText}</p>
                            <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-169 text-[9px] z-2 left-65 text-white">
                            {cuadro1SubText}</p>
                            <img 
                            ref={cuadro1ImgRef} // Ref para la imagen para cambiar el color
                            className="absolute bottom-160 w-100 left-40"
                            src={Cuadro1Img}></img> {/* Usar Cuadro1Img renombrado */}
                        </div>

                        {/* --- CUADRO 2: 3 Million --- */}
                        <div id="cuadro2-container">
                            <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-135 text-3xl z-2 left-75 text-white">{cuadro2MainText}</p>
                            <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-133 text-[9px] z-2 left-75 text-white">
                            {cuadro2SubText}</p>
                            <img 
                            ref={cuadro2ImgRef}
                            className="absolute bottom-122 w-80 left-60"
                            src={Cuadro2Img}></img>
                        </div>

                        {/* --- CUADRO 3: Number 1 --- */}
                        <div id="cuadro3-container">
                            <p
                            style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
                            className="absolute bottom-96 text-3xl z-2 left-70 text-white">{cuadro3MainText}</p>
                            <p
                            style={{ fontFamily: "Poppins" }} 
                            className="absolute bottom-94 text-[9px] z-2 left-70 text-white">
                            {cuadro3SubText}</p>
                            <img 
                            ref={cuadro3ImgRef}
                            className="absolute bottom-85 w-130 left-40"
                            src={Cuadro3Img}></img>
                        </div>


                        {/* === TÍTULO ANIMADO (Typing Effect) === */}
                        <div id="TituloAnimado">
                            <div className="js-typing-container">
                                <p style={{ fontFamily: "Trajan Pro", fontWeight:"bold" }} 
                                className="absolute bottom-140 text-8xl z-2 left-240 text-white js-typing-word
                                hover:text-red-500 transition-all ">
                                GAME</p>
                            </div>

                            <div className="js-typing-container">
                                <p style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                                className="absolute bottom-128 text-5xl z-2 left-265 text-white js-typing-word
                                hover:text-red-600 transition-all ">
                                OF THE</p>
                            </div>

                            <div className="js-typing-container">
                                <p style={{ fontFamily: "Trajan Pro", fontWeight:"bold" }} 
                                className="absolute bottom-108 text-7xl z-2 left-260 text-white js-typing-word
                                hover:text-red-500 transition-all ">
                                YEAR</p>
                            </div>

                            <div className="js-typing-container">
                                <p style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                                className="absolute bottom-98 text-3xl z-2 left-253 text-white js-typing-word
                                hover:drop-shadow-lg hover:drop-shadow-amber-200 transition-all 
                                hover:text-amber-300">
                                NOMINEE</p>
                            </div>
                        </div>

                        <div id="Boton" ref={btnRef} >    
                            <img 
                            src={Btn}
                            className="absolute bottom-80 left-270 w-35"></img>

                            <p
                            style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                            className="absolute bottom-81 z-2 left-277 text-white">
                            View More</p>
                        </div>

                        {/* Párrafo 1 con hover */}
                        <p
                        ref={textRef1}
                        style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                        className="absolute bottom-167 z-11 text-[10px] left-235 w-70 text-white">
                        Hollow Knight: Silksong has secured a major Game of the Year "GOTY" 
                        nomination at The Game Awards 2025. This recognition highlights the 
                        enormous anticipation and quality of the game.
                        </p>

                        {/* Párrafo 2 con hover */}
                        <p
                        ref={textRef2}
                        style={{ fontFamily: "Poppins", fontWeight:"Thin" }} 
                        className="absolute bottom-70 z-11 text-[10px] left-45 w-70 text-white">
                        The launch of Hollow Knight: Silksong was a resounding success, 
                        exceeding expectations with impressive sales figures and exceptional 
                        critical acclaim.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Escena2