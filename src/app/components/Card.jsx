import React from 'react'
import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
 const cards = [
  {
    id: 1,
    content: <div className="h-full w-full bg-[#ffffff] rounded-2xl py-[6vh] flex justify-between" >
        <div className='right'>
            <div className='bg-[#eae4d8] w-[7vw] p-[1vh] rounded-sm mx-[3vw] font-semibold text-center'>
            Expertise
        </div>
        <h1 className='text-8xl font-semibold tracking-tighter mx-[3vw] my-[1vh]'>Social strategy</h1>
        <div className='px-[3vw] py-[25vh]'>
            <h3 className='text-2xl font-semibold tracking-tighter'>Slimme strategie. Sterke start.</h3>
            <p  className='text-xl font-semibold tracking-tighter'>We duiken diep in jouw merk, doelgroep en<br/> doelen. En vertalen data naar een duidelijk<br/> plan met formats die écht impact maken.<br/> Zo weet je precies waarom het werkt.</p>
            <div className='mt-[2vh] bg-[#fa5424] w-[16vw] py-[1vh] rounded-lg text-white flex justify-evenly items-center'>Meer over social strategie 
                    <div className='bg-[#ffff] text-black p-[1.3vh] rounded-lg font-extralight'><FaArrowRight/></div>
            </div>
        </div>
        </div>
        <div className='left px-[]'>
            <h2 className='text-[#eae4d8] text-8xl font-semibold ml-[19vw]'>01</h2>
            <div className='w-[21vw] h-[55vh] rotate-5 mx-[3vw] border-8 rounded-2xl border-[#fa5424] bg-[#fa5424]'>
                <video src='https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4' autoPlay loop muted className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
        
    </div>,
  },
  {
    id: 2,
     content: <div className="h-full w-full bg-[#fcb8fa] rounded-2xl py-[6vh] flex justify-between" >
        <div className='right'>
            <div className='bg-[#ffff] w-[7vw] p-[1vh] rounded-sm mx-[3vw] font-semibold text-center'>
            Expertise
        </div>
        <h1 className='text-8xl font-semibold tracking-tighter mx-[3vw] my-[1vh]'>Content creation</h1>
        <div className='px-[3vw] py-[25vh]'>
            <h3 className='text-2xl font-semibold tracking-tighter'>Content die opvalt en raakt.</h3>
            <p  className='text-xl font-semibold tracking-tighter'>We maken content die opvalt. Blijft hangen.<br/>En jouw doelgroep raakt. Creatief, snel en<br/>energiek. Altijd met het doel voor ogen.</p>
            <div className='mt-[2vh] bg-[#ffff] w-[16vw] py-[1vh] rounded-lg text-black flex justify-evenly items-center'>Meer over content creatie
                    <div className='bg-[#010101] text-white p-[1.3vh] rounded-lg font-extralight'><FaArrowRight/></div>
            </div>
        </div>  
        </div>
        <div className='left px-[]'>
            <h2 className='text-[#fdd0fe] text-8xl font-semibold ml-[19vw]'>02</h2>
            <div className='w-[21vw] h-[55vh] rotate-5 mx-[3vw] border-8 rounded-2xl border-[#ffff] bg-[#ffff]'>
                <video src='https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4' autoPlay loop muted className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
        
    </div>,
  },
  {
    id: 3,
     content: <div className="h-full w-full bg-[#33c791] rounded-2xl py-[6vh] flex justify-between" >
        <div className='right'>
            <div className='bg-[#ffff] w-[7vw] p-[1vh] rounded-sm mx-[3vw] font-semibold text-center'>
            Expertise
        </div>
        <h1 className='text-8xl font-semibold tracking-tighter mx-[3vw] my-[1vh]'>Activation</h1>
        <div className='px-[3vw] py-[25vh]'>
            <h3 className='text-2xl font-semibold tracking-tighter'>Zichtbaar waar en wanneer het telt.</h3>
            <p  className='text-xl font-semibold tracking-tighter'>De juiste content verdient het om gezien te<br/>worden. We verspreiden de content waar jouw<br/>doelgroep is. Zo raakt jouw merk de juiste<br/>mensen, precies waar en wanneer het telt.</p>
            <div className='mt-[2vh] bg-[#ffff] w-[16vw] py-[1vh] rounded-lg text-black flex justify-evenly items-center'>Meer over activatie
                    <div className='bg-[#010101] text-white p-[1.3vh] rounded-lg font-extralight'><FaArrowRight/></div>
            </div>
        </div>
        </div>
        <div className='left px-[]'>
            <h2 className='text-[#73e2b6] text-8xl font-semibold ml-[19vw]'>03</h2>
            <div className='w-[21vw] h-[55vh] rotate-5 mx-[3vw] border-8 rounded-2xl border-[#ffff] bg-[#ffff]'>
                <video src='https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4' autoPlay loop muted className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
        
    </div>,
  },
   {
    id: 4,
     content: <div className="h-full w-full bg-[#0d8dff] rounded-2xl py-[6vh] flex justify-between" >
        <div className='right'>
            <div className='bg-[#ffff] w-[7vw] p-[1vh] rounded-sm mx-[3vw] font-semibold text-center'>
            Expertise
        </div>
        <h1 className='text-8xl font-semibold tracking-tighter mx-[3vw] my-[1vh]'>Data</h1>
        <div className='px-[3vw] py-[25vh]'>
            <h3 className='text-2xl font-semibold tracking-tighter'>Inzichten die impact maken.</h3>
            <p  className='text-xl font-semibold tracking-tighter'>We duiken in de cijfers om te snappen wat<br/>écht werkt. En sturen jouw content scherp bij.</p>
            <div className='mt-[2vh] bg-[#ffff] w-[16vw] py-[1vh] rounded-lg text-black flex justify-evenly items-center'>Meer over data
                    <div className='bg-[#010101] text-white p-[1.3vh] rounded-lg font-extralight'><FaArrowRight/></div>
            </div>
        </div>
        </div>
        <div className='left px-[]'>
            <h2 className='text-[#28aaff] text-8xl font-semibold ml-[19vw]'>04</h2>
            <div className='w-[21vw] h-[55vh] rotate-5 mx-[3vw] border-8 rounded-2xl border-[#ffff] bg-[#ffff]'>
                <video src='https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4' autoPlay loop muted className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
        
    </div>,
  },
];

  return (
    <div>
        <div className='h-[400vh] w-full bg-[#faf4ec]' >
             <div className="h-screen w-full">
                <StickyCard002 cards={cards} />
            </div>
        </div>
    </div>
  )
}

export default Card