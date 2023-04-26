import '../styles/global.css'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
