import React from 'react';
import Servicios from './services';
import { servicios as hardCodeService} from '@/lib/data';
import { motion } from 'framer-motion';
import axios from 'axios';
const apiKey = "http://localhost:48925/"


const getServicios = async () => {
    try {
        const  barberLista = await axios.get(`${apiKey}services`)
        if (!barberLista) return hardCodeService; 
        return barberLista
    }catch(e){
        console.log(e)
        return hardCodeService
    }
}

function ServicesContainer() {

  const [serviApi, setServiApi] = React.useState([])


  const getServ = async () => {
    let servicios = await  getServicios()
    setServiApi(servicios.data.rows);
}

React.useEffect(() => {
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
    </div>
  );
}

export default ServicesContainer;
