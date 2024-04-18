// import ServiceSelect from "@/components/DatesSistem/ServicesSelect"
import React, { useState } from "react"
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';
import CitaServios from "@/components/sitemaCitas/Servicios";
// import Servicios from '@/components/servicios/services';
// import { servicios } from '@/lib/data';
// import { motion } from 'framer-motion';
// import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';



const Reservar = ({paramas}) => {

    const [reserva, setReserva] = useState({})

    const [step, setStep] = useState(1)

    const handleNextButton = () => {
        step < 5 && setStep(step+1)
    }

    const setNumPaso = (num) => {
        console.log(num)
        setStep(num)
    }

    const handleInputChange  = (e) => {
        const  { name, value } = e;
        setReserva({...reserva ,[name]:value})
    }

    useState(() => {

    },[reserva])

    // return(
    //     <div className="text-white h-full">
    //        <p>SISTEMA DE CITAS</p>
    //        <ServiceSelect/>
    //     </div>
    // )
    //  CODIGO DAMIAN SOLA

    return (
        <div className="w-full">

            <div id="separador-nav"></div>

            <NavBarCitas numPaso={step} setNumPaso={setNumPaso} />
            <p>{step}</p>
            {step === 1 && <CitaServios cargar={handleInputChange}/> } {/* CODIGO CREADO POR SANTIAGO */}

            <div className='flex justify-end w-11/12'>
                <BotonSiguiente next={handleNextButton} />
            </div>
        </div>
        )

}

export default Reservar