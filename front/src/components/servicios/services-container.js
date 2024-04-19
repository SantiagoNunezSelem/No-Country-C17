import React,{useState, useEffect} from 'react';
import Servicios from './services';
import { servicios as hardCodeService} from '@/lib/data';
import { motion } from 'framer-motion';
import Loading from '@/loading.png';
import Image from 'next/image';
import {GetServicios} from "@/actions/Querys"

function ServicesContainer() {

  const [serviApi, setServiApi] = useState([])
  const [loading, setLoading] = useState(true)



  const getServ = async () => {
    let servicios = await GetServicios()
    setLoading(false)
    servicios === "AxiosError" ?  setServiApi(hardCodeService) : setServiApi(servicios.data.rows)
}

  useEffect(() => {
    getServ()
  },[])

  return (
    <div className="flex flex-wrap justify-center mb-2">
      {/* Mapear los datos de servicios y renderizar un componente Servicios para cada uno */}
      {serviApi && serviApi.map((servicio, index) => (
        <motion.div 
          key={index} 
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Servicios
            img={servicio.imagen}
            titulo={servicio.nombre}
            texto={servicio.descripcion}
            precio={servicio.costo}
          />
        </motion.div>
      ))}
      {loading &&  <div>
                <Image src={Loading} alt="loading..."  className="w-24 h-full animate-spin"/>
                <p className='text-white'>cargando...</p>
            </div>}
    </div>
  );
}

export default ServicesContainer;
