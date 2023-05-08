import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import indexStyles from '../styles/index.module.css'
import { useRouter } from 'next/router';
import i18n from 'i18next'
import translaionEs from "../locales/es.json"
import translaionFr from "../locales/fr.json"
import translaionEn from "../locales/en.json"
import {initReactI18next, useTranslation} from "react-i18next"


i18n
.use(initReactI18next)
.init({
  resources : {
    es : {translation: translaionEs},
    fr : {translation : translaionFr},
    en : {translation : translaionEn}
  },
  lng: "en",
  fallbackLng : "en",
  interpolation : {escapeValue : false}
})


library.add(faNewspaper);

export default function Home({ allPostsData }) {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const router = useRouter();
    
  const handleSignup = () => {
    console.log('Email submitted:', email)
    // Add your logic to collect the email address here
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  
  const { t } = useTranslation();


  return (
    
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{ display: 'flex', margin: '3rem', justifyContent: 'space-between' }}>
        <div style={{ width: '900px', display: 'flex', flexDirection: 'column' }}>
          <h1>{t('transformYourTeaching')}</h1>
          <p style={{ fontSize: '20px', textAlign: 'justify' }}>{t('myWebClassOffers')}</p>
          <button1 onClick={() => router.push('/Courses')} className={indexStyles.buttonStyle}>
            {t('courses')}
          </button1>
        </div>
        <div style={{}}>
          <img style={{ height: '450px', width: '450px' }} src="images/classroom.png" alt="a teacher with students" width="720px" />
        </div>
      </div>
      <section style={{ textAlign: 'center' }}>
        <a className='fa-icon-wrapper'> <h2>{t('signUpForOurNewsletter')}</h2> <FontAwesomeIcon icon={faNewspaper} size="xs" /></a>
        <input
          type="email"
          placeholder={t('enterYourEmail')}
          value={email}
          onChange={handleEmailChange}
          className={indexStyles.inputStyle}
        />
        <button onClick={handleSignup} className={indexStyles.buttonStyle}>
          {t('signUp')}
        </button>
      </section>
      <div className="language-toggle">
            <select name = "language" onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
