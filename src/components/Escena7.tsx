"use client";

import React from "react";
import { StickyCard002 } from "./skiper17";
import { FaArrowRight } from "react-icons/fa";

interface CardItem {
    id: number;
    content: React.ReactNode;
}

const Escena7: React.FC = () => {
    const cards: CardItem[] = [
        {
            id: 1,
            content: (
                <div className="h-full w-full bg-[#000000] rounded-2xl p-[6vh] flex flex-col justify-center text-[#f3d7c6] relative overflow-hidden">
                    <h1 style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-8xl font-black tracking-tight text-[#E00707] drop-shadow-[0_0_25px_rgba(196,43,50,0.7)]">Silksong</h1>

                    <p style={{ fontFamily: "Poppins", fontWeight: "400"}} className="text-[20px] mt-6 max-w-[70%] leading-snug">The highly anticipated sequel to the legendary Hollow Knight. A frantic ascent filled with silk, song, precision, and creatures both beautiful… and terrifying.</p>

                    <div className="mt-[10vh]">
                        <button style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="relative border-2 border-white group px-10 py-4 text-white font-bold text-2xl flex items-center justify-center gap-3 shadow-[0_0_20px_#c42b32aa] transition-all duration-300 hover:shadow-[0_0_35px_#ff3b3baa] hover:brightness-125">
                            More information
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            ),
        },

        {
            id: 2,
            content: (
                <div className="h-full w-full bg-[#12080b] rounded-2xl p-[6vh] flex flex-col justify-center text-[#f5e9dd] overflow-y-auto">
                    <h1 style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-6xl font-bold tracking-tight mb-8 text-[#E00707]">Frequently Asked Questions</h1>

                    <div className="space-y-7 text-xl opacity-90 pr-4">
                        <div>
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "800"}} className="text-[18px] font-semibold">Does it have a release date?</h3>
                            <p style={{ fontFamily: "Poppins", fontWeight: "400"}} className="text-[17px]" >Yes, September 4th, 2025.</p>
                        </div>

                        <div>
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "800"}} className="text-[18px] font-semibold">Will it be harder than Hollow Knight?</h3>
                            <p style={{ fontFamily: "Poppins", fontWeight: "400"}}  className="text-[17px]">The studio has said Hornet is more agile, so combat will be faster and more challenging.</p>
                        </div>

                        <div>
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "800"}} className="text-[18px] font-semibold">Is it an expansion of the first game?</h3>
                            <p style={{ fontFamily: "Poppins", fontWeight: "400"}}  className="text-[17px]">No. It is a completely new game with more content than the original.</p>
                        </div>

                        <div>
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "800"}}className="text-[18px] font-semibold">Does it keep the metroidvania exploration style?</h3>
                            <p style={{ fontFamily: "Poppins", fontWeight: "400"}}  className="text-[17px]">Absolutely. New vertical zones, more complex biomes, and dynamic shortcuts.</p>
                        </div>

                        <div>
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "800"}} className="text-[18px] font-semibold">Will Hornet have new abilities?</h3>
                            <p style={{ fontFamily: "Poppins", fontWeight: "400"}}  className="text-[17px]">Yes — mobility-focused skills, tools, traps, and crafting systems.</p>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            id: 3,
            content: (
                <div className="h-full w-full bg-[#2b1316] rounded-2xl p-[6vh] flex flex-col justify-center text-[#ffe9d6]">
                    <h1 style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-6xl font-extrabold tracking-tight text-[#E00707] drop-shadow-[0_0_15px_#ff696155]">Platforms</h1>

                    <p className="text-xl mt-6 opacity-90">Silksong will be available day one on multiple platforms:</p>

                    <ul className="mt-[6vh] text-3xl space-y-4 opacity-95">
                        <li>• Nintendo Switch</li>
                        <li>• PC (Steam & GOG)</li>
                        <li>• Xbox Series (Day 1 on Game Pass)</li>
                        <li>• PlayStation 4 / 5</li>
                    </ul>

                    <button className="relative border-2 border-white mt-[10vh] group w-[20vw] py-[1.3vh] text-white font-semibold text-center flex items-center justify-center gap-3 shadow-[0_0_20px_#c42b32aa] transition-all duration-300 hover:shadow-[0_0_45px_#ff3b3baa] hover:brightness-125">
                        Follow on Steam
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            ),
        },

        {
            id: 4,
            content: (
                <div className="h-full w-full bg-black rounded-2xl p-[6vh] flex flex-col justify-center text-[#e8d0c3] relative">
                    <h1 style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="text-7xl font-extrabold tracking-tight text-[#E00707] drop-shadow-[0_0_35px_#ff3b3baa]">Thank You for Waiting</h1>

                    <p className="text-2xl mt-8 opacity-85 max-w-[70%]">
                        Silksong is one of the most anticipated games in the world. When it arrives, it will be polished, intense, vertical, fast — crafted with love for the fans who never stopped believing.
                    </p>

                    <button style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} className="relative border-2 border-white mt-[10vh] group w-[22vw] py-[1.3vh] text-white font-bold text-center flex items-center justify-center gap-3 shadow-[0_0_30px_#c42b32aa] transition-all duration-300 hover:shadow-[0_0_55px_#ff3b3baa] hover:brightness-125">
                        Notify me on release
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[400vh] w-full bg-[#faf4ec]">
            <div className="h-screen w-full">
                <StickyCard002 cards={cards} />
            </div>
        </div>
    );
};

export default Escena7;
