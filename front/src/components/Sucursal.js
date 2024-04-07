import React from 'react'
import Image from "next/image"
import BotonReservarCita from './BotonReservarCita'

function Sucursal( {titulo, img, texto} ) {

    return (
    <div className="w-96 flex flex-col items-stretch m-5">

        <h3 id="sucursal-title" className="text-center mb-10">{titulo}</h3>

        <Image className="self-center" src={img}/>

        <p className="text-center my-5 text-white">{texto}</p>

        <BotonReservarCita/>

    </div>
    )
}

export default Sucursal
