import React from 'react'
import Image from 'next/image'
import arrowRight from "@/img/reservar-cita-icons/arrow-right.png"

function BotonSiguiente( {url, next}) {
    return (
        <a href={url} onClick={next} className="w-40 mb-5 flex align-center 
        justify-center rounded-md px-3.5 cursor-pointer
        py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600" style={{backgroundColor:"#F84646"}}>
        
        <p className="my-auto mr-5 text-lg">Siguiente</p>
        
        <Image src={arrowRight} width={20} alt="Icono agregar"/>

        </a>
    )
}

export default BotonSiguiente
