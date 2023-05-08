import '../styles/global.css'
import Footer from '../components/Footer'
import { useRouter } from "next/router"
import { useEffect } from "react"
import Head from "next/head";
import CookieConsent from 'react-cookie-consent';


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
        <link rel="shortcut icon" type ="image/x-icon" href="/images/logodry.ico?" />
    </Head>
    

    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Agree"
      declineButtonText="Decline"
      cookieName="dry-cookie"
      style={{ background: 'black' }}
      buttonStyle={{
        color: 'white',
        fontSize: '15px',
        background: '#0070f3',
        borderRadius: '5px',
        width: '100px',
        height: '40px',
      }}
      declineButtonStyle={{
        color: 'white',
        fontSize: '15px',
        background: 'grey',
        borderRadius: '5px',
        width: '100px',
        height: '40px',
      }}
      expires={450}
    >
      This website uses cookies to enhance the user experience.
  </CookieConsent>
    
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
