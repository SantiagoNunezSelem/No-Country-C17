import { servicios } from '@/lib/data';
import { motion } from 'framer-motion';
import  React, { useEffect, useState } from  "react";
import Servicios from '@/components/servicios/services';
import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';

const CitaServios = ({cargar}) => {

    const [service, setService] = useState([]) ///DAMIAN SOLA AGREGO ESTO
    ////MEDIANTE USECONTEX T PASAMOS LA INFORMACIÓN A TODAS LAS VISTAS QUE LO NECESITEN

    const handleButton = (id) => {
        service.includes(id) ?  setService(service.filter((i)=> i !== id)) : setService([...service,id])
    }
    useEffect(() => {
        cargar({ name: "servicio", value: service })
    },[service])

    return(
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
                            <BotonAgregarServicio  addService={handleButton} serviId={servicio.title}/> {/*cambiar depues por id*/}
                        </div>
                    </motion.div>
                    ))
                }
            </div>
    )
}

export default  CitaServios;