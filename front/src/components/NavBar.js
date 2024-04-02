import React from 'react'
import Link from "next/link"

function NavBar() {
    return (
    <nav className='flex flex-row w-full py-5'>
        <div className='flex items-center ml-5'>LOGO</div>
        <div className='flex justify-end w-full'>
            <ul className='flex flex-row space-x-4 pr-5 pl-2 py-2 border-b-2'>
                <Link href="#">SERVICIOS</Link>
                <Link href="#">UBICACIÓN</Link>
                <Link href="#">NOSOTROS</Link>
                <Link href="#">ASESORÍA</Link>
            </ul>
        </div>
        
    </nav>
    )
}

export default NavBar
