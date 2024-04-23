"use client"

import React,{useState,useEffect} from 'react'
import Image from "next/image"
import trashIcon from "@/img/reservar-cita-icons/trash.png"
import moneyIcon from "@/img/reservar-cita-icons/money.png"
import primerProfesionalDisponible from "@/img/reservar-cita-icons/primerProfesionalDisponible.png"
import {GetBarbers} from "@/actions/Querys"

function SeleccionarProfesional( {cargar,infoReserva} ) {

    const [servicios,setServicios] = useState(infoReserva.servicio)

    const [profesionales,setProfesionales] = useState()

		//Si es el primer profesional deberiamos pasar el objeto profesional con 
		//los props vacios y nombre:"primerProfesional". Despues en la seccion de fijar la 
		//fecha tenemos que elegir a un profesional de los que se encuenten disponibles y completar la info
    const [profesionalSelec,setProfesionalSelec] = useState("primerProfesional")

    const borrarServicio = (servicioElim) => {
        const data = servicios.filter(servicio => servicio.idServicio !== servicioElim.idServicio)
        setServicios(data)
    }

    const getProfesionales = async () => {
        let data = await GetBarbers()
        setProfesionales(data.data.rows);
    }

    useEffect(() => {
        getProfesionales()
    },[])

		useEffect(() => {
			cargar({ name: "profesional", value: profesionalSelec })
		},[profesionalSelec])

		useEffect(() => {
			cargar({ name: "servicio", value: servicios })
		},[servicios])

		servicios

    return (
    <div id="seleccionar-personal">
        
        <section className="flex flex-row w-9/12 h-5/6 m-auto mt-4 mb-2">
            <div className="w-4/6 max-h-96 border-2 p-10 pt-7 mr-5 rounded-xl">
                <h3 className="mb-2">Profesionales</h3>
                <div id="profesional-container" className="max-h-72 overflow-y-scroll">
                    <div className={`flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl
                        ${profesionalSelec === "primerProfesional" ? "seleccionado" : ""}`}
                        onClick={() => setProfesionalSelec("primerProfesional")}
					>
                        <Image 
                            src={primerProfesionalDisponible}
                            alt="loading.."
                            id="primerProfesional" 
                            width={40}
                            height={"auto"}
                            style={{borderRadius:"100%"}}
						/>
                        <p className="self-center text-lg">Primer Profesional Disponible</p>
                    </div>
                    {
                        profesionales && profesionales.map((p,index) => {
                            return(
                            <div key={p.idEmpleado} 
                                className={`flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl
                                ${profesionalSelec.idEmpleado === p.idEmpleado ? "seleccionado" : ""}`}
                                onClick={() => setProfesionalSelec(p)}
							>
                                <Image 
                                    src={p.imagen}
                                    alt="loading.."
                                    id={p.idEmpleado}
                                    width={40}
                                    height={40} 
                                    style={{borderRadius:"100%"}}
                                /> 
                                <p className="self-center text-lg">{p.nombre} {p.apellido}</p>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col w-2/6 max-h-96 overflow-y-scroll servicios-container">
            {
                servicios && servicios.map(s => {
                return(
                <div key={s.idServicio} className="flex flex-row h-fit p-7 mb-3 border-2 rounded-xl">
                    <div className="w-11/12">
                        <div className="flex flex-row gap-3 mb-1">
                            <h4>Servicio:</h4><p>{s.nombre}</p>
                        </div>
                        <div className='flex'>
                            <Image src={moneyIcon} alt="loading.." className="mr-3 self-center" width={26} height={26}/>
                            {s.costo}
                        </div>
                    </div>
                    <div className="self-center">
                        {servicios && servicios.length > 1 &&
                            <Image src={trashIcon} alt="loading.." width={30} height={30} className='hover:cursor-pointer' onClick={() => borrarServicio(s)}/>
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
