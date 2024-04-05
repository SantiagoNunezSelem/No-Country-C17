import { Inter } from "next/font/google";
import Sucursales from "@/components/SucursalesContainer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">
      
        <div id="home-img">
          <h1 id="home-h1">TU BARBERIA<br/>PROFESIONAL</h1>
        </div>

        {/* Borrar esta seccion despues */}
        <section id="prueba" className="flex justify-center w-full bg-slate-700">
          <div>Otra seccion</div>
        </section>
        {/*  */}

        <section className="flex flex-col justify-center w-full" style={{backgroundColor:"#292929"}}>
          <h1 className="section-title">SUCURSALES</h1>
          <Sucursales/>
        </section>

        {/* Borrar esta seccion despues */}
        <section id="prueba" className="flex justify-center w-full bg-slate-700">
          <div>Otra seccion</div>
        </section>
        {/*  */}

      </main>
    );
}
