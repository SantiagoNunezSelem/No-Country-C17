import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header>
          <NavBar></NavBar>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
