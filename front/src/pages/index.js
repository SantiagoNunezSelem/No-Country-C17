"use client"
import { Inter } from "next/font/google";
import Sucursales from "@/components/SucursalesContainer"
import ServicesContainer from "@/components/servicios/services-container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">

      <div id="home-img" className="text-center py-12">
        <h1 className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 font-koulen text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          Tu Barberia  <br className="hidden sm:inline" />Profesional
        </h1>
       
      


      </div>

      <section className="flex flex-col justify-center w-full bg-gray-800 bg-opacity-20 py-12">
        <h1 className="section-title text-white">Nuestros Servicios</h1>
        <ServicesContainer />
      </section>

      <section className="flex flex-col justify-center w-full bg-custom-gray py-12">
        <h1 className="section-title text-white">SUCURSALES</h1>
        <Sucursales />
      </section>

    </main>

  );
}