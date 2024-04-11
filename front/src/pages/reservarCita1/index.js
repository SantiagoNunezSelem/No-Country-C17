import React from 'react'
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
import Servicios from '@/components/servicios/services';
import { servicios } from '@/lib/data';
import { motion } from 'framer-motion';
import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';
import BotonSiguiente from '@/components/sitemaCitas/BotonSiguiente';

function reservarCita_1() {
    return (
    <div className="w-full">
        <div id="separador-nav"></div> {/* genera el espacio de la navbar (no responsive por ahoora) */}

        <NavBarCitas numPaso={1}/>

        <div className="flex flex-wrap justify-center mt-10 mb-2">
            {
                servicios.map((servicio, index) => (
                <motion.div 
                    key={index} 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Servicios
                        img={servicio.imagePath}
                        titulo={servicio.title}
                        precio={servicio.precio}
                    />
                    <div className="flex justify-center w-full">
                        <BotonAgregarServicio/>
                    </div>
                </motion.div>
                ))
            }
        </div>

        <div className='flex justify-end w-11/12'>
            <BotonSiguiente/>
        </div>
        
    </div>
    )
}

export default reservarCita_1

