import Swicth1Final from "../../public/escena6Images/Switch1Final.png";
import Swicth2Final from "../../public/escena6Images/Switch2Final.png";
import Swicth1Fondo from "../../public/escena6Images/Switch1Fondo.png";
import Swicth2Fondo from "../../public/escena6Images/Switch2Fondo.png";

function Escena6() {
    return (
        <div className="w-100% h-screen bg-black overflow-hidden mr-40 ml-40 mt-70">
            <p style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }} 
            className="text-white text-[4vw] flex justify-end mb-20">
                Game Endings
            </p>

            <div className="relative">
                <img className="w" src={Swicth1Fondo}></img>
                <img className="absolute top-[2vh] left-[1vw] w-[27vw]" src={Swicth1Final}></img>
                <p
                style={{ fontFamily: "Trajan Pro", fontWeight: "bold" }}  
                className="text-white text-[3vw] absolute top-[14vh] left-[47vw]" >Final 1</p>
            </div>
        </div>
    );
}

export default Escena6;
