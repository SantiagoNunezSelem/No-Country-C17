import "../styles/globals.css";
import ActiveSectionContextProvider from '@/context/active-section-context';


export default function App({ Component, pageProps }) {
  return (
    <ActiveSectionContextProvider>
      <Component {...pageProps} />
    </ActiveSectionContextProvider>
  );
}
