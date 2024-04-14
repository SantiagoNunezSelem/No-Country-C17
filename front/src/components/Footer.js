import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
    <div className="w-full bg-red-500">
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 md:space-x-16">
            <div className="flex justify-center md:w-1/5 m-auto">
                <Image src={require("../img/logo.png")} width={124} className="m-auto" alt=""/>
            </div>
            <div id="footer-links" className="hidden md:flex justify-center w-full md:w-3/5 m-auto mt-5 md:mt-0 space-x-5 md:space-x-16">
                <Link href="/#">Inicio</Link>
                <Link href="/#service-section">Servicios</Link>
                <Link href="/#sucursales-section">Sucursales</Link>
                <Link href="/#staff">Staff</Link>
                <Link href="/#">Contacto</Link>
            </div>
            <div className="flex justify-center w-full md:w-1/5 m-auto space-x-5 mt-5 md:mt-0">
                <Image src={require("../img/contact-icons/linkedin.png")} alt=""/>
                <Image src={require("../img/contact-icons/twitter.png")} alt=""/>
                <Image src={require("../img/contact-icons/instagram.png")} alt=""/>
                <Image src={require("../img/contact-icons/facebook.png")} alt=""/>
            </div>
        </div>

        <div className="text-center mt-7 pb-5">
            <p>© 2024 - Todos los derechos reservados</p>
        </div>
    </div>
    )
}

export default Footer
