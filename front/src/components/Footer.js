import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
    <div className="w-full" style={{backgroundColor:"#F84646"}}>
        <div className="flex flex-row pt-10">
            <div className="flex justify-center w-1/5 m-auto">
                <Image src={require("../img/logo.png")} width={124} className="m-auto"/>
            </div>
            <div id="footer-links" className="flex justify-center w-3/5 m-auto space-x-16">
                <Link href="#">Inicio</Link>
                <Link href="#">Servicios</Link>
                <Link href="#">Sucursales</Link>
                <Link href="#">Staff</Link>
                <Link href="#">Conctacto</Link>
                <Link href="#">Reservar una cita</Link>
            </div>
            <div className="flex justify-center w-1/5 m-auto space-x-5">
                <Image src={require("../img/contact-icons/linkedin.png")}/>
                <Image src={require("../img/contact-icons/twitter.png")}/>
                <Image src={require("../img/contact-icons/instagram.png")}/>
                <Image src={require("../img/contact-icons/facebook.png")}/>
            </div>
        </div>

        <div className="text-center mt-7 pb-5">
            <p>© 2024 - Todos los derechos reservados</p>
        </div>
        
    </div>
    )
}

export default Footer
