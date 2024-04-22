
"use client"
import React,{useState} from 'react'
import Image from "next/image"
import pulsIcon from "@/img/reservar-cita-icons/plus.png"
import trashIcon from "@/img/reservar-cita-icons/trash.png"

function BotonAgregarServicio({addService, serviId}) {

    const [state,setState] = useState(true)

    const handleClick = () => {
        setState(!state)
        addService(serviId)
    }

    const data = {}
    if(state === true){
        data.text = "Reservar cita"
        data.icon = pulsIcon
        data.backgroundColor = "#F84646"
        data.border = "0px"
    }
    else{
        data.text="Eliminar servicio"
        data.icon = trashIcon
        data.backgroundColor = ""
        data.border = "1px solid"
    }

    return (
    <a  onClick={handleClick} 
        className="w-56 mb-5 flex align-center justify-center self-center border border-white
        text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white cursor-pointer
        shadow-sm focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{backgroundColor:data.backgroundColor,border:data.border}}>
        
        <Image src={data.icon} width={25} height={"auto"} alt="Icono agregar"/>
        
        <p className="my-auto ml-5 text-lg">{data.text}</p>

    </a>
    )
}

export default BotonAgregarServicio
