import nubes from "../../public/banner/holip.png";

export default function Nubes() {
    return (
        <div className="pointer-events-none">
            <img
                src={nubes}
                className="absolute lg:top-[610px] 2xl:top-[490px] left-0 w-full h-auto z-[12] opacity-80"
                alt="nubes"
            />
        </div>
    );
}
