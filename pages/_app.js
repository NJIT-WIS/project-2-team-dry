import '../styles/global.css'
import Footer from '../components/Footer'
import { useRouter } from "next/router"
import { useEffect } from "react"
import Head from "next/head";


// const dotenv = require('dotenv');
// dotenv.config();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-EBW4CPCF5C', {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/logodry.ico" />
    </Head>
    
    
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
