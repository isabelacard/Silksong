"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Landing_page = () => {

    const cardsRef = useRef([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, 4);
        imageRefs.current = imageRefs.current.slice(0, 4);
    }, []);

    const handleMouseEnter = (index) => {
        gsap.to(cardsRef.current[index], {
            scale: 1.1,
            rotation: 0,
            marginLeft: "50px",
            marginRight: "50px",
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(imageRefs.current[index], {
            filter: "grayscale(0%)",
            duration: 0.3
        });
    };


    const handleMouseLeave = (index) => {
        const ranrot = Math.floor(Math.random() * 21) - 10;

        gsap.to(cardsRef.current[index], {
            scale: 1,
            rotate: ranrot,
            marginLeft: "0px",
            marginRight: "0px",
            duration: 0.4,
            ease: "power2.out"
        });

        gsap.to(imageRefs.current[index], {
            filter: "grayscale(100%)",
            duration: 0.3
        });
    };

    return (
        <div>
            <div className='min-h-screen[100vh] w-full bg-[#faf4ec]'>
                <div>
                    <div className='cards'>
                        <div className='card_conatiner flex items-center mt-45 p-[2vw]'>

                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    ref={(el) => (cardsRef.current[i] = el)}
                                    className={`h-[60vh] w-[25vw] rounded-4xl z-[${20 + i}] cursor-pointer relative overflow-hidden`}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={() => handleMouseLeave(i)}
                                    onTouchStart={() => handleMouseEnter(i)}
                                    onTouchEnd={() => handleMouseLeave(i)}
                                >

                                    {/* GIF con grayscale → color */}
                                    <img
                                        ref={(el) => (imageRefs.current[i] = el)}
                                        src={`/gifs/card${i}.gif`}
                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl filter grayscale"
                                    />

                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing_page
