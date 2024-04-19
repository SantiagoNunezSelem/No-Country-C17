
import React, { useState } from "react"
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';
import CitaServicios from "@/components/sitemaCitas/Paso1-SeleccionarServicios/Servicios";
import DatosConfirmar from "@/components/sitemaCitas/Paso4-DatosContacto/index"
import SeleccionarProfesional from "@/components/sitemaCitas/Paso2-SeleccionarProfesional/SeleccionarProfesional"
import SeleccionFechaContainer from "@/components/sitemaCitas/Paso3-SeleccionarFecha/SeleccionFechaContainer";
import BotonRegresar from "@/components/sitemaCitas/BotonRegresar";



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

    return (
        <div className="w-full">

            <div id="separador-nav"></div>

            <NavBarCitas numPaso={step} setNumPaso={setNumPaso} />
            {/* Render different components based on the current step */}
            {step === 1 && <CitaServicios cargar={handleInputChange}/>}
            {step === 2 && <SeleccionarProfesional/>}
            {step === 3 && <SeleccionFechaContainer cargar={handleInputChange}/>}
            {step === 4 && <DatosConfirmar />}
            <div className='flex justify-between items-end w-11/12'>


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