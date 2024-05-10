"use client"

import React,{useState,useEffect} from 'react'
import Image from "next/image"
import trashIcon from "@/img/reservar-cita-icons/trash.png"
import moneyIcon from "@/img/reservar-cita-icons/money.png"
import imgPrimerProfesionalDisponible from "@/img/reservar-cita-icons/primerProfesionalDisponible.png"
// import {GetBarbers,getSucursalById} from "@/actions/Querys"
import { useParams } from 'next/navigation'
import { profesionales as profesionalesData} from '@/lib/data.js'

function SeleccionarProfesional( {cargar,infoReserva} ) {
    const  {name}  = useParams();

    const [servicios,setServicios] = useState(infoReserva.servicio)

    const [profesionales,setProfesionales] = useState(profesionalesData)

    const [primerProfesionalDisponible,setPrimerProfesionalDisponible] = useState()

    //Si selecciona el primer profesional disponible deberiamos pasar el objeto profesional con 
    //los atributos vacios y nombre:"primerProfesional". Despues en la seccion de fijar la 
    //fecha tenemos que elegir a un profesional de los que se encuenten disponibles y completar la info
    const [profesionalSelec,setProfesionalSelec] = useState()

    const borrarServicio = (servicioElim) => {
        const data = servicios.filter(servicio => servicio.idServicio !== servicioElim.idServicio)
        setServicios(data)
    }

    const getProfesionales = async () => {
        // let data = await GetBarbers()
        // let data = await getSucursalById(name)

        // setProfesionales(data.empleados);

        // Obtén la URL actual de la página
        const url = window.location.href;

        // Divide la URL en partes utilizando '/' como separador y toma el último elemento
        const partesURL = url.split('/');
        const idSucursal = partesURL[partesURL.length - 1];
        
        const profesionalesSucursal = profesionales.filter(p => p.sucursalIdSucursal == idSucursal)
        setProfesionales(profesionalesSucursal)
        //Setear objeto primer profesional disponible (permite pasar un objeto profesional con toda su estructura)
        const primerProfeDis = {...profesionales[0]}
        for (let key in primerProfeDis) {
            // Establecer el valor de cada atributo en null
            primerProfeDis[key] = null;
        }
        primerProfeDis.nombre = "primerProfesional"
        primerProfeDis.sucursalIdSucursal = idSucursal

        setPrimerProfesionalDisponible(primerProfeDis)
        setProfesionalSelec(primerProfeDis)
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

    return (
    <div id="seleccionar-personal">
        
        <section className="sm:flex h-5/6 m-auto mt-4 mb-2 block justify-center align-center">
            <div className=" max-h-dvh border-2 p-4 pt-7 mx-2 md:w-7/12 rounded-xl">
                <h3 className="mb-2">Profesionales</h3>
                <div id="profesional-container" className="w-full max-h-dvh mb-2">
                    {profesionalSelec &&
                        <div className={`flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl
                        ${profesionalSelec.nombre === "primerProfesional" ? "seleccionado" : ""}`}
                        onClick={() => setProfesionalSelec(primerProfesionalDisponible)}
					>
                        <Image className="h-full w-auto object-cover rounded-full my-auto"
                            src={imgPrimerProfesionalDisponible}
                            alt="loading.."
                            id="primerProfesional" 
                            width={40}
                            height={40}
                            style={{borderRadius:"100%"}}
						/>
                        <p className="self-center text-sm md:text-lg">Primer Profesional Disponible</p>
                    </div>
                    }
                    {
                        profesionales && primerProfesionalDisponible && profesionales.map(p => {
                            return(
                            <div key={p.idEmpleado} 
                                className={`flex flex-row gap-5 border-2 mb-2 p-2 rounded-xl
                                ${profesionalSelec.idEmpleado === p.idEmpleado ? "seleccionado" : ""}`}
                                onClick={() => setProfesionalSelec(p)}
							>
                                <div className="w-10 h-10">
                                <img
                                    src={p.imagen}
                                    alt="loading.."
                                    id={p.idEmpleado}
                                    className="h-full w-auto object-cover rounded-full"
                                />
                                </div>
                                <p className="self-center text-lg">{p.nombre} {p.apellido}</p>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col md:w-3/12 max-h-96 mx-2 mt-2 md:mt-0 servicios-container">{/*tarjeta de reserva*/}
            {
                servicios && servicios.map(s => {
                return(
                <div key={s.idServicio} className="flex flex-row w-full mx-1 p-7 mb-3 border-2 rounded-xl">
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
