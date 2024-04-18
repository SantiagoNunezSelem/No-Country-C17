// import ServiceSelect from "@/components/DatesSistem/ServicesSelect"
import React, { useState } from "react"
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';
import CitaServios from "@/components/sitemaCitas/Servicios";
import SeleccionarProfesional from "@/components/sitemaCitas/seleccionarProfesional-Seccion/SeleccionarProfesional"
// import Servicios from '@/components/servicios/services';
// import { servicios } from '@/lib/data';
// import { motion } from 'framer-motion';
// import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';



const Reservar = ({paramas}) => {

    const [reserva, setReserva] = useState({
        user: "",
        employed: "",
        startDate: "",
        finishDate: "",
        servicios: []
    })

    const [step, setStep] = useState(1)

    const handleNextButton = () => {
        step < 5 && setStep(step+1)
    }

    const setNumPaso = (num) => {
        console.log(num)
        setStep(num)
    }

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
            {step === 1 && <CitaServios/> }
            {step === 2 && <SeleccionarProfesional/>}
            
            <div className="flex justify-end w-11/12">
                <BotonSiguiente next={handleNextButton}/>
            </div>
        </div>
        )

}

export default Reservar