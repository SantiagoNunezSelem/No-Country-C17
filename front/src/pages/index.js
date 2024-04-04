import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">
      
        <div id="home-img">
          <h1 id="home-h1">TU BARBERIA<br/>PROFESIONAL</h1>
        </div>
        

        <section className="flex justify-center w-full">
          <div>Otra seccion</div>
        </section>

      </main>
    );
}
