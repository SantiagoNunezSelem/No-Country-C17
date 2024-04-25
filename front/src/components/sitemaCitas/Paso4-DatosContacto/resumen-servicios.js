import React from 'react';
import { iconsCitas } from '../../../lib/data';
import Image from 'next/image';
import dayjs from 'dayjs';

const IconsComponent = ({data}) => {
  const {servicio, profesional, dia, hora} = data
  const formattedDate = dayjs(dia).format('DD/MM/YYYY'); 

  return (
    <div className="border border-white p-4 rounded-lg">
      {/* Texto agrupado "SERVICIO: Cabello" */}
      <div className="mb-4 flex items-center">
        <div className="text-white font-bold mr-2">SERVICIO:</div>
        {servicio && servicio.map(s => {
          return <div className="text-white"><p className='p-1'>{` ${s.nombre.toUpperCase()},`}</p></div>
        })}
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
          <p className="text-white">{profesional.nombre +" "+ profesional.apellido}</p>
        </div>
      </div>
      
      {/* Separador */}
      <hr className='border-white'/>

      {/* Icono del calendario con fecha aleatoria y hora del turno */}
      <div className="flex items-center justify-between mt-4">
        {/* Contenedor para el icono del calendario y la fecha */}
        <div className="flex items-center">
          {/* Icono del calendario */}
          <span className="mr-2">
                  <Image src={require("../../../img/Calendar.png")} />
                </span>
          {/* Fecha aleatoria */}
          <p className="text-white">{formattedDate}</p>
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
          <p className="text-white">{hora}</p>
        </div>
      </div>
    </div>
  );
};

export default IconsComponent;
