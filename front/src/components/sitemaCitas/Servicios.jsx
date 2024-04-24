import { servicios } from '@/lib/data';
import { motion } from 'framer-motion';
import  React, { useEffect, useState } from  "react";
import Servicios from '@/components/servicios/services';
import BotonAgregarServicio from '@/components/sitemaCitas/seleccionarServicios-Seccion/BotonAgregarServicio';
import axios from 'axios';
const apiKey = "http://localhost:48925/"


const getServicios = async () => {
    try {
        const  barberLista = await axios.get(`${apiKey}services`)
        if (!barberLista) return servicios; 
        return barberLista
    }catch(e){
        console.log(e)
        return servicios
    }
}

const CitaServios = ({cargar}) => {

    const [service, setService] = useState([])
    const [serviApi, setServiApi] = useState([])
    
    ///DAMIAN SOLA AGREGO ESTO
    ////MEDIANTE USECONTEX T PASAMOS LA INFORMACIÓN A TODAS LAS VISTAS QUE LO NECESITEN

    const handleButton = (id) => {
        service.includes(id) ?  setService(service.filter((i)=> i !== id)) : setService([...service,id])
    }

    const getServ = async () => {
        let servicios = await  getServicios()
        setServiApi(servicios.data.rows);
    }
  /*   useEffect(() => {
        cargar({ name: "servicio", value: service })
    },[service])
 */

    useEffect(() => {
        getServ()
    },[])

    return(
            <div className="flex flex-wrap justify-center mt-10 mb-2">
                {
                    serviApi && serviApi.map((servicio, index) => (
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