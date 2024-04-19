'use Client'
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import { config } from "dotenv";
import { GetSucursal, GetBarbers } from "@/actions/Querys";

const StaffBarber = () => {

    const [barbers, setBarbers] = useState([]);
    const [show, setShow] = useState([])
    const [sucursal,  setSucursal] = useState([]);
    
    
    let getBarb = async () => {
        let list = await GetBarbers()
        setBarbers(list.data.rows)
        setShow(list.data.rows)
    }

    let getSuc = async () => {
        let list = await GetSucursal()
        setSucursal(list.data.rows)
    }

    let filtBarber = (id) => {
        id === "all" ? setShow(barbers) :setShow(barbers.filter((item)=> item.sucursalIdSucursal === id))
    }


    useEffect(() => {
        getBarb()
        getSuc()
    },[])
    
      
    return(
        <div className="block w-full" id="staff"> 
            <div id='staff-text' className="p-4 text-center w-3/4 m-auto">
                <p className="text-white text-5xl font-medium p-4">STAFF</p>
                <p className={`text-white p-4 text-white  text-opacity-70`}>En "Estilo Clásico", no solo ofrecemos servicios de barbería, sino una experiencia excepcional que refleja nuestra pasión por el arte del cuidado capilar masculino. Nos complace presentar a nuestro talentoso equipo de barberos, quienes combinan habilidad, experiencia y dedicación para brindar un servicio excepcional a nuestros clientes.</p>
            </div>
            <div className="flex p-2">
                <select className="select-staff" onChange={() => filtBarber(event.target.value)} >
                    <option value="all">SELECCIONE SUCURSAL</option>
                    {sucursal && sucursal.map(e => {
                        return <option key={e.idSucursal} value={e.idSucursal}>{e.nombre}</option>
                    })}
                </select>
            </div>
            <Carousel data={show}/>
        </div>
    )    
}





const  sucursals = []
export default StaffBarber;