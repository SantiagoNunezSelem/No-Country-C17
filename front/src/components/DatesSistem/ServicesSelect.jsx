import React, { useState } from "react";
import {servicios} from "@/lib/data"
import Servicios from "../servicios/services";
import ServiceCard from "./ServiceCard";

////ESTE CODIGO ES DE DAMIAN SOLA

const ServiceSelect = () =>{
    // info hardcodeada.....
    const [service, setService] = useState([])

    const handleButton = (id) => {
        service.includes(id) ?  setService(service.filter((i)=> i !== id)) : setService([...service,id])
    }

    return(
        <div className="block sm:flex p-8 justify-evenly"> 
            {servicios && servicios.map(servicio => {
                return <div>
                     <ServiceCard 
                     key={servicio.title}
                    img={servicio.imagePath}
                    titulo={servicio.title}
                    texto={null}
                    precio={servicio.precio}
                    addService={handleButton}
                />
                </div>
            })}

        </div>
    )
}

export default ServiceSelect;