import React from 'react';
import Servicios from './services';
import { servicios } from '@/lib/data';
import { motion } from 'framer-motion';

function ServicesContainer() {
  return (
    <div className="flex flex-wrap justify-center mb-2">
      {/* Mapear los datos de servicios y renderizar un componente Servicios para cada uno */}
      {servicios.map((servicio, index) => (
        <motion.div 
          key={index} 
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Servicios
            img={servicio.imagePath}
            titulo={servicio.title}
            texto={servicio.description}
            precio={servicio.precio}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesContainer;
