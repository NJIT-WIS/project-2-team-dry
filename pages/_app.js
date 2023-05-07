import '../styles/global.css'
import Footer from '../components/Footer'
import { useRouter } from "next/router"
import { useEffect } from "react"

// const dotenv = require('dotenv');
// dotenv.config();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.GOOGLE_ANALYTICS_GTAG, {
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
    
    
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
