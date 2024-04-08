import { Inter } from "next/font/google";
import Sucursales from "@/components/SucursalesContainer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">
      
        <div id="home-img">
          <h1 id="home-h1">TU BARBERIA<br/>PROFESIONAL</h1>
        </div>

        <section className="flex flex-col justify-center w-full" style={{backgroundColor:"#292929"}}>
          <h1 className="section-title">SUCURSALES</h1>
          <Sucursales/>
        </section>
      </main>
    );
}
