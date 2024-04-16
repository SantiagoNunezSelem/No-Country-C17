import React, { useState } from "react";
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas';
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';
import CitaServicios from "@/components/sitemaCitas/Servicios";
import DatosConfirmar from "@/components/sitemaCitas/formulario-paso-4/index";
import BotonRegresar from "@/components/sitemaCitas/BotonRegresar";

const Reservar = ({ params }) => {
    const [reserva, setReserva] = useState({
        user: "",
        employed: "",
        startDate: "",
        finishDate: "",
        servicios: []
    });

    const [step, setStep] = useState(1);

    const handleNextButton = () => {
        step < 5 && setStep(step + 1);
    };
    const handlePrevButton = () => {
        step > 1 && setStep(step - 1); // Implemento la lógica para retroceder al paso anterior
    };
    const setNumPaso = (num) => {
        console.log(num);
        setStep(num);
    };

    return (
        <div className="w-full">
            <div id="separador-nav"></div>

            <NavBarCitas numPaso={step} setNumPaso={setNumPaso} />
            
            {/* Render different components based on the current step */}
            {step === 1 && <CitaServicios />} 
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
    
        
    );
};

export default Reservar;
