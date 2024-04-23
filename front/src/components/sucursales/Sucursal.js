import React from 'react'
import Image from "next/image"
import BotonReservarCita from '../BotonReservarCita'

function Sucursal( {titulo, id, img, texto} ) {

    return (
    <div className="w-96 flex flex-col items-stretch p-2">

        <h3 id="sucursal-title" className="text-center mb-10">{titulo}</h3>

        <div className='px-4 w-auto h-72'>
            <img className="self-center w-full h-full" src={img} alt={`sucursal-${titulo}`}/>
        </div>
            
        <p className="text-center my-5 text-white">{texto}</p>

        <BotonReservarCita url={id}/>
    </div>
    )
}

export default Sucursal
