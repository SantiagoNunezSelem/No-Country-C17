import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

import img from "../img/carrusel-1.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">

        <div className="background-decoration-grey"></div>

        <section id="home-section">
          <NavBar></NavBar>
          <div className="flex justify-center items-center  w-full h-full">
            <Image id="img1" src={img}></Image>
          </div>
        </section>

        

        <section className="flex justify-center w-full h-screen">
          Otra seccion
        </section>


      </main>
    );
}
