import React from 'react'
import Image from 'next/image'
import calendarIcon from "@/img/calendar-icon.png"

function BotonReservarCita( {url} ) {

    let newUrl = url.includes('#')  ? url : `reservar/${url}` 

    return (
    // <a href={`reservar/${url}`} className="w-64 mb-5 flex align-center justify-center self-center text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{backgroundColor:"#F84646"}}>
    <a href={newUrl} className="w-64 mb-5 flex align-center justify-center self-center text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" style={{backgroundColor:"#F84646"}}>
        
        <Image src={calendarIcon} width={30} height={"auto"} alt="Icono Del Calendario"/>
        
        <p className="my-auto ml-5 text-lg">Reservar cita</p>

    </a>
    )
}

export default BotonReservarCita
