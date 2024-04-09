"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image";

function NavBar() {
    return (
        <nav 
         
            className='flex flex-row w-full py-12'
        >
            <div id="container-logo" className='flex align-center justify-center'>
                <Image src={require("../img/logo.png")} alt="Barbershop" />
            </div>
            <div className='flex justify-end w-full'>
                <ul className='flex flex-row align-center space-x-16 pr-20 pl-2 mt-7'>
                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="#">Servicios</Link></li>
                    <li><Link href="#">Sucursales</Link></li>
                    <li><Link href="#">Staff</Link></li>
                    <li><Link href="#">Conctacto</Link></li>
                    <li><Link href="#">Reservar una cita</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
