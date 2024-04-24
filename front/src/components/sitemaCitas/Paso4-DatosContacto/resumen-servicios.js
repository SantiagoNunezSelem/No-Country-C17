import React from 'react';
import { iconsCitas } from '../../../lib/data';
import Image from 'next/image';

const IconsComponent = () => {
  // Función para generar una fecha aleatoria
  const generateRandomDate = () => {
    const startDate = new Date(); // Fecha actual
    const randomDays = Math.floor(Math.random() * 7); // Genera un número aleatorio entre 0 y 6 (para días)
    startDate.setDate(startDate.getDate() + randomDays); // Suma días aleatorios a la fecha actual
    return startDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Función para obtener la hora actual
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  return (
    <div className="border border-white p-4 rounded-lg">
      {/* Texto agrupado "SERVICIO: Cabello" */}
      <div className="mb-4 flex items-center">
        <div className="text-white font-bold mr-2">SERVICIO:</div>
        <div className="text-white">CABELLO</div>
      </div>
      <div className="flex items-center justify-items-stretch">
        {/* Icono de dinero y precio para el servicio de Cabello */}
        {iconsCitas.map((icon) => {
          if (icon.alt === 'icon money') {
            return (
              <span key={icon.id} className="mr-2">
                <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
              </span>
            );
          }
          return null;
        })}
        {/* Precio del servicio de Cabello */}
        <p className="text-salmon font-bold">$30.00</p>
      </div>

      {/* Contenedor para el icono y nombre del profesional (posicionado top derecha) */}
      <div className="flex justify-end mb-4">
        {/* Icono del profesional y nombre */}
        <div className="flex items-center">
          {iconsCitas.map((icon) => {
            if (icon.alt === 'icon profesional') {
              return (
                <span key={icon.id} className="mr-2">
                  <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
                </span>
              );
            }
            return null;
          })}
          <p className="text-white">Juan Manuel Perez</p>
        </div>
      </div>
      
      {/* Separador */}
      <hr className='border-white'/>

      {/* Icono del calendario con fecha aleatoria y hora del turno */}
      <div className="flex items-center justify-between mt-4">
        {/* Contenedor para el icono del calendario y la fecha */}
        <div className="flex items-center">
          {/* Icono del calendario */}
          {iconsCitas.map((icon) => {
            if (icon.alt === 'icon calendar') {
              return (
                <span key={icon.id} className="mr-2">
                  <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
                </span>
              );
            }
            return null;
          })}
          {/* Fecha aleatoria */}
          <p className="text-white">{generateRandomDate()}</p>
        </div>

        {/* Contenedor para el icono de la hora y la hora actual */}
        <div className="flex items-center">
          {/* Icono de la hora */}
          {iconsCitas.map((icon) => {
            if (icon.alt === 'icon timer') {
              return (
                <span key={icon.id} className="mr-2">
                  <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
                </span>
              );
            }
            return null;
          })}
          {/* Hora actual */}
          <p className="text-white">{getCurrentTime()}</p>
        </div>
      </div>
    </div>
  );
};

export default IconsComponent;
