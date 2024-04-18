"use client";
import { Inter } from "next/font/google";
import Sucursales from "@/components/sucursales/SucursalesContainer"
import ServicesContainer from "@/components/servicios/services-container";
import StaffBarber from "@/components/StaffBarber";
import BotonReservarCita from "@/components/BotonReservarCita";
import Contacto from "@/components/contacto";
import Footer from "@/components/Footer";
import ResumenServicio from "@/components/sitemaCitas/ResumenServicio"; //usado como entorno de prueba

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">
      <div id="home-img" className="text-center py-12">
        <div className="absolute top-1/2 left-2/4 sm:left-3/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
          <h1 className="font-koulen text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-7">
            Tu Barberia  <br className="hidden sm:inline" />Profesional
          </h1>
          <BotonReservarCita url="#sucursales-section"/>
        </div>
      </div>
      
      <section
        id="service-section"
        className="flex flex-col justify-center w-full bg-gray-800 bg-opacity-20 py-12"
      >
        <h1 className="section-title text-white">Nuestros Servicios</h1>
        <ServicesContainer />
      </section>
      <section
        id="sucursales-section"
        className="flex flex-col justify-center w-full bg-custom-gray py-12"
      >
        <h1 className="section-title text-white">SUCURSALES</h1>
        <Sucursales />
      </section>
      
      <StaffBarber />

      <section id='contacto-section'>
        <Contacto/>
      </section>

      <footer>
        <Footer/>
      </footer>
    </main>
  );
}
