import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Aquí agregamos el enlace a la fuente de Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
      </Head>
        
      
      <body>
        <header>
          <NavBar></NavBar>
        </header>
        <Main />
        <NextScript />
        <footer><Footer></Footer></footer>
      </body>
    </Html>
  );
}
