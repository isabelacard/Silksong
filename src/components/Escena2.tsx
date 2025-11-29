import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "../../public/Escena_2_Json.json";
import Fondo from "../../public/images/img_7.png";

type DivRef = HTMLDivElement | null;
export default function LottieBackgroundControlScrollableTailwind() {
    const containerRef = useRef<DivRef>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData,
        });

        const anim = animationRef.current;
        anim.goToAndStop(0, true);

        const handleMouseMove = (event: MouseEvent) => {
            const containerElement = containerRef.current;
            if (!containerElement) return;
            const rect = containerElement.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const totalWidth = rect.width;
            const progress = Math.min(1, Math.max(0, mouseX / totalWidth));
            const totalFrames = anim.totalFrames;
            const currentFrame = progress * totalFrames;
            anim.goToAndStop(currentFrame, true);
        };
        containerRef.current.addEventListener("mousemove", handleMouseMove);
        return () => {
            containerRef.current?.removeEventListener("mousemove", handleMouseMove);
            anim.destroy();
        };
    }, []);

    return (
        <>
            <div className="w-full h-screen relative z-10">
                <img src={Fondo} alt="Fondo de la animación" className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none" />
                <div ref={containerRef} className="absolute inset-0 w-full h-full flex z-[2] bg-transparent pointer-events-auto"></div>
            </div>
        </>
    );
}
