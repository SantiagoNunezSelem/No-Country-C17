import React from 'react'
import Link from "next/link"

function NavBar() {
    return (
    <nav className='flex flex-row w-full py-5'>
        <div className='flex items-center ml-5'>LOGO</div>
        <div className='flex justify-end w-full'>
            <ul className='flex flex-row space-x-10 pr-20 pl-2 py-10'>
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
