import ServiceSelect from "@/components/DatesSistem/ServicesSelect"
import React, { useState } from "react"



const Reservar = ({paramas}) => {

    const [reserva, setReserva] = useState({
        user: "",
        employed: "",
        startDate: "",
        finishDate: ""
    })

    return(
        <div className="text-white h-full">
           <p>SISTEMA DE CITAS</p>
           <ServiceSelect/>
        </div>
    )
}

export default Reservar