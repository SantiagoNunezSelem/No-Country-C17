"use client"

import React,{useState,useEffect} from 'react'
import Image from "next/image"
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import trashIcon from "@/img/reservar-cita-icons/trash.png"
import moneyIcon from "@/img/reservar-cita-icons/money.png"
import primerProfesionalDisponible from "@/img/reservar-cita-icons/primerProfesionalDisponible.png"
import {GetBarbers} from "@/actions/Querys"
import {servicios as dataServicios} from "@/lib/data"

function SeleccionarProfesional( {cargar,infoReserva} ) {
    const reserva = infoReserva.servicio

    const [servicios,setServicios] = useState(dataServicios)
    const [profesionales,setProfesionales] = useState()

    const [idSeleccionado,setIdSeleccionado] = useState("primerProfesional")

    const borrarServicio = (nombre) => {
        const data = servicios.filter(servicio => servicio.title !== nombre)
        setServicios(data)
    }

    const handleClick = (id,p) => {
        const prevSeleccionado = document.getElementById(idSeleccionado)
        prevSeleccionado.classList.remove("seleccionado")

        const newSeleccionado = document.getElementById(id)
        newSeleccionado.classList.add("seleccionado")

        setIdSeleccionado(p)
    }

    const getProfesionales = async () => {
        let data = await GetBarbers()
        setProfesionales(data.data.rows);
    }

    useEffect(() => {
        getProfesionales()
        cargar({ name: "profesional", value: idSeleccionado });
    },[idSeleccionado])

    return (
    <div id="seleccionar-personal">
        
        <section className="flex flex-row w-9/12 h-5/6 m-auto mt-4 mb-2">
            <div className="w-4/6 max-h-96 border-2 p-10 pt-7 mr-5 rounded-xl">
                <h3 className="mb-2">Profesionales</h3>
                <div id="profesional-container" className="max-h-72 overflow-y-scroll">

                    <div id="primerProfesional" className="flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl seleccionado" onClick={() => handleClick("primerProfesional")}>
                        <Image src={primerProfesionalDisponible} width={40} height={40} style={{borderRadius:"100%"}}/>
                        <p className="self-center text-lg">Primer Profesional Disponible</p>
                    </div>
                    {
                        profesionales && profesionales.map((p,index) => {
                            return(
                            <div id={index} className="flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl" onClick={() => handleClick(index,p)}>
                                <Image src={p.imagen} width={40} height={40} 
                                layout="fixed" 
                                objectFit="contain"
                                style={{borderRadius:"100%"}}/>
                                <p className="self-center text-lg">{p.nombre} {p.apellido}</p>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col w-2/6 max-h-96 overflow-y-scroll servicios-container">
            {
                reserva && reserva.map(p => {
                return(
                <div className="flex flex-row h-fit p-7 mb-3 border-2 rounded-xl">
                    <div className="w-11/12">
                        <div className="flex flex-row gap-3 mb-1">
                            <h4>Servicio:</h4><p>Corte</p>
                        </div>
                        <div className='flex'>
                            <Image src={moneyIcon} className="mr-3 self-center" width={26}/>
                            $40
                        </div>
                    </div>
                    <div className="self-center">
                        {reserva && reserva.length > 1 &&
                            <Image src={trashIcon} width={30} height={30} className='hover:cursor-pointer' onClick={() => borrarServicio(p.title)}/>
                        }
                    </div>
                </div>
                )
                })
            }
            </div>
        </section>
    </div>
    )
}

export default SeleccionarProfesional
