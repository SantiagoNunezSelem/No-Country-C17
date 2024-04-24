import React from 'react';
import Image from 'next/image';
import arrowLeft from "@/img/arrow-left.png";

function BotonRegresar({ onClick }) {
    return (
        <button
            className="w-40 mb-5 flex items-center justify-center self-center text-center rounded-md cursor-pointer py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            style={{ backgroundColor: "F84646" }}
            onClick={onClick} 
        >
            <Image src={arrowLeft} width={20} alt="Icono regresar" />
            <p className="my-auto ml-5 text-lg">Regresar</p>
        </button>
    );
}

export function BotonHome({ onClick }) {
    return (
        <button
            className="w-40 mb-5 flex items-center justify-center self-center text-center rounded-md cursor-pointer py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            style={{ backgroundColor: "F84646" }}
            onClick={onClick} 
        >
            <Image src={arrowLeft} width={20} alt="Icono regresar" />
            <p className="my-auto ml-5 text-lg">Inicio</p>
        </button>
    );
}

export default BotonRegresar;