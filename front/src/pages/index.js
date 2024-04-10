import StaffBarber from "@/components/StaffBarber";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <main className="w-full">
      
        <div id="home-img">
        </div>
        

        <section className="flex justify-center w-full">
          {/* <div>Otra seccion</div> */}
          <StaffBarber/>
        </section>

      </main>
    );
}
