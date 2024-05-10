import React from "react";
import { iconsCitas } from "../../../lib/data";
import Image from "next/image";
import dayjs from "dayjs";

const IconsComponent = ({ data }) => {
  const { servicio, profesional, dia, hora } = data;
  const formattedDate = dayjs(dia).format("DD/MM/YYYY");

  function stringANumero(costoStr) {
    return parseFloat(costoStr.replace("$",""))
  }

  const totalMontoServicios = servicio.reduce((acumulador, serv) => acumulador + stringANumero(serv.costo), 0);

  return (
    <>
      <div className="border border-white p-4 rounded-lg">
        {/* Texto agrupado "SERVICIO: Cabello" */}
        <div className="mb-4 flex items-top">
          <div className="text-white font-bold mt-1 mr-2 text-[#F84646]">
            SERVICIO:
          </div>
          <div className="max-width-100">
            {servicio &&
              servicio.map((s, index) => {
                return (
                  <div key={index} className="inline-block w-auto text-white">
                    <p className="p-1">{` ${s.nombre.toUpperCase()}`}</p>
                  </div>
                );
              })}
          </div>
        </div>
        {/*<div className="flex items-center justify-items-stretch">
        
          if (icon.alt === 'icon money') {
            return (
              <span key={icon.id} className="mr-2">
                <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height} />
              </span>
            );
          }
          return null;
        })}
        <p className="text-salmon font-bold">$30.00</p>
      </div>*/}

        {/* Contenedor para el icono y nombre del profesional (posicionado top derecha) */}
        <div className="flex mb-4">
          {/* Icono del profesional y nombre */}
          <div className="flex items-center">
            {iconsCitas.map((icon,index) => {
              if (icon.alt === "icon profesional") {
                return (
                  <span key={index} className="mr-2">
                    <Image
                      src={icon.icon}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                    />
                  </span>
                );
              }
              return null;
            })}
            <p className="text-white">
              {profesional.nombre + " " + profesional.apellido}
            </p>
          </div>
        </div>

        {/* Separador */}
        <hr className="border-white" />

        {/* Icono del calendario con fecha aleatoria y hora del turno */}
        <div className="flex items-center justify-between mt-4">
          {/* Contenedor para el icono del calendario y la fecha */}
          <div className="flex items-center">
            {/* Icono del calendario */}
            <span className="mr-2">
              <Image src={require("../../../img/Calendar.png")} />
            </span>
            <p className="text-white">{formattedDate}</p>
          </div>

          {/* Contenedor para el icono de la hora y la hora actual */}
          <div className="flex items-center">
            {/* Icono de la hora */}
            {iconsCitas.map((icon) => {
              if (icon.alt === "icon timer") {
                return (
                  <span key={icon.id} className="mr-2">
                    <Image
                      src={icon.icon}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                    />
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
      <div className="border border-white m-4 p-4 rounded-lg flex items-center">
        <p className="text-[#F84646] font-bold">TOTAL A PAGAR: </p>
        <div className="flex">
          {/* Icono de dinero y precio para el servicio de Cabello */}
          {iconsCitas.map((icon) => {
            if (icon.alt === "icon money") {
              return (
                <span key={icon.id} className="ml-5 mr-2">
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                  />
                </span>
              );
            }
            return null;
          })}

          <p className="text-white">${totalMontoServicios}.00</p>
          
        </div>
      </div>
    </>
  );
};

export default IconsComponent;
