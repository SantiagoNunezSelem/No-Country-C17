import React from 'react'
import Link from "next/link"
import Image from "next/image";

function NavBar() {
    return (
    <nav className='flex flex-row w-full py-12'>
        <div id="container-logo" className='flex align-center justify-center'>
            <Image src={require("../img/logo.png")}></Image>
        </div>
        <div className='flex justify-end w-full'>
            <ul className='flex flex-row align-center space-x-16 pr-20 pl-2 mt-7'>
                <Link href="#">Inicio</Link>
                <Link href="#">Servicios</Link>
                <Link href="#">Sucursales</Link>
                <Link href="#">Staff</Link>
                <Link href="#">Conctacto</Link>
                <Link href="#">Reservar una cita</Link>
            </ul>
        </div>
        
    </nav>
    )
}

export default NavBar
