'use Client'
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel"


const StaffBarber = () => {
    
    
    let barbers = [
        {name: "Juan", img:"https://i.pinimg.com/474x/b8/91/fb/b891fb0046f2a92b99754d061710c1dc.jpg", id:"0"},
        {name: "Pedro", img:"https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-600nw-1956224953.jpg",  id:"1"},
        {name: "Diego", img:"https://i.pinimg.com/474x/b8/91/fb/b891fb0046f2a92b99754d061710c1dc.jpg",  id:"2"},
        {name: "Simon", img:"https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-600nw-1956224953.jpg",  id:"3"},
        {name: "federico", img:"https://i.pinimg.com/474x/b8/91/fb/b891fb0046f2a92b99754d061710c1dc.jpg", id:"4"},
        {name: "Ricardo", img:"https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-600nw-1956224953.jpg",  id:"5"},
        {name: "santiago", img:"https://i.pinimg.com/474x/b8/91/fb/b891fb0046f2a92b99754d061710c1dc.jpg",  id:"6"},
        {name: "hernan", img:"https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-600nw-1956224953.jpg",  id:"7"},
        {name: "santiago", img:"https://i.pinimg.com/474x/b8/91/fb/b891fb0046f2a92b99754d061710c1dc.jpg",  id:"8"},
        {name: "hernan", img:"https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-600nw-1956224953.jpg",  id:"9"}
    ]
      
    return(
        <div className="block w-full"> 
            <div className="p-8 text-center w-3/4 m-auto">
                <p className="text-white text-5xl font-medium p-4">SATFF</p>
                <p className={`text-white p-4 text-white  text-opacity-70`}>En "Estilo Clásico", no solo ofrecemos servicios de barbería, sino una experiencia excepcional que refleja nuestra pasión por el arte del cuidado capilar masculino. Nos complace presentar a nuestro talentoso equipo de barberos, quienes combinan habilidad, experiencia y dedicación para brindar un servicio excepcional a nuestros clientes.</p>
            </div>
            <div className="flex p-2">
                <select className="select-staff" >
                    <option>SELECCIONE SUCURSAL</option>
                    {sucursals && sucursals.map(e => {
                        <option key={e.id} value={e.id}>{e.name}</option>
                    })}
                </select>
            </div>
            <Carousel  data={barbers}/>
        </div>
    )    
}





const  sucursals = []
export default StaffBarber;