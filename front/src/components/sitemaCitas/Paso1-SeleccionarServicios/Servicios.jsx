// import { servicios } from '@/lib/data';
import { motion } from 'framer-motion';
import  React, { useEffect, useState } from  "react";
import Servicios from '@/components/servicios/services';
import BotonAgregarServicio from '@/components/sitemaCitas/Paso1-SeleccionarServicios/BotonAgregarServicio';
import { GetServicios } from '@/actions/Querys';

const CitaServios = ({cargar}) => {

    const [service, setService] = useState([])
    const [servicios, setServicios] = useState()

    const getServi = async () => {
        let data = await GetServicios()
        setServicios(data.data.rows);
    }

    const handleButton = (id) => {
        service.includes(id) ?  setService(service.filter((i)=> i !== id)) : setService([...service,id])
    }

    useEffect(() => {
        getServi()
        cargar({ name: "servicio", value: service })
    },[service])

    console.log(service)

    return(
        

        <div className="flex flex-wrap justify-center mt-10 mb-2">
            {
               servicios && servicios.map((servicio, index) => (  // le puse &&, en caso de ser false que no renderice y rompa
                <motion.div 
                    key={index} 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Servicios
                        img={servicio.imagen}
                        titulo={servicio.nombre}
                        precio={servicio.costo} 
                    />
                    <div className="flex justify-center w-full">
                        <BotonAgregarServicio  addService={handleButton} serviId={servicio.idServicio}/> {/*cambiar depues por id*/}
                    </div>
                </motion.div>
                ))
            }
        </div>
    )
}

export default  CitaServios;