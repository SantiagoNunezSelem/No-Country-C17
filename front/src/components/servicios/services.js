import React from 'react';
import Image from "next/image";

//puse img por IMAGE porque rompiea por la url de la foto , y no me dejaba poner el src.

function Servicios({ titulo, img, texto, precio }) {
    return (
        <div className="flex flex-col items-center mb-4">
        <div className="flex items-center justify-center rounded-full overflow-hidden mb-4" style={{ width: "230px", height: "230px" }}>
            <img id="prueba" src={img} alt={`servicios-${titulo}`} className="h-full w-auto transition-transform duration-300 transform-gpu hover:scale-110 object-cover"/>
        </div>
        <h3 className="text-center mb-2 font-manrope font-bold text-2xl">{titulo}</h3>
        <div className="text-center">
            <p className="my-4 text-white font-manrope text-base font-bold leading-[25px]">{texto}</p>
            <p className="text-white mb-4">Precio: <span className="font-koulen text-red-500 text-xl font-normal leading-[25px]">{precio}</span></p>
        </div>
    </div>
    
    )
}

export default Servicios;
