
import React, { useState } from "react"
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';
import CitaServios from "@/components/sitemaCitas/Servicios";
import DatosConfirmar from "@/components/sitemaCitas/formulario-paso-4/index"
import SeleccionarProfesional from "@/components/sitemaCitas/seleccionarProfesional-Seccion/SeleccionarProfesional"
import SeleccionFechaContainer from "@/components/sitemaCitas/seleccionarFecha-Seccion/SeleccionFechaContainer";
import BotonRegresar from "@/components/sitemaCitas/BotonRegresar";
import ResumenServicio from "@/components/sitemaCitas/ResumenServicio";
// import Servicios from '@/components/servicios/services';
// import { servicios } from '@/lib/data';
// import { motion } from 'framer-motion';
// import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';



const Reservar = ({ paramas }) => {

    const [reserva, setReserva] = useState({})

    const [step, setStep] = useState(1)

    const handleNextButton = () => {
        step < 5 && setStep(step + 1)
    }
    const handlePrevButton = () => {
        step > 1 && setStep(step - 1); // Implemento la lógica para retroceder al paso anterior
    };
    const setNumPaso = (num) => {
        console.log(num)
        setStep(num)
    }

    const handleInputChange = (e) => {
        const { name, value } = e;
        setReserva({ ...reserva, [name]: value })
    }

    useState(() => {

    }, [reserva])


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
            {/* Render different components based on the current step */}
            {step === 1 && <CitaServios />}
            {step === 2 && <SeleccionarProfesional />}
            {step === 3 && <SeleccionFechaContainer cargar={handleInputChange} />}
            {step === 4 && <DatosConfirmar />}
            {step === 5 && <ResumenServicio/> }
            
            <div className='flex justify-end w-11/12 object-position: right bottom 	position: absolute'>

                {step > 1 && (
                    <BotonRegresar
                        onClick={handlePrevButton}
                        className="mr-auto"
                    />
                )}


                <BotonSiguiente next={handleNextButton} />

            </div>
        </div>
        )
}

export default Reservar