import StaffBarber from "@/components/StaffBarber";
import { Inter } from "next/font/google";
import Sucursales from "@/components/SucursalesContainer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">
      
        <div id="home-img">
          <h1 id="home-h1">TU BARBERIA<br/>PROFESIONAL</h1>
        </div>
        

        {/* <section className="flex justify-center w-full">

        </section> */}
          <Sucursales/>
          <StaffBarber/>
      </main>
    );
}
