import React, { Suspense } from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
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

const About = () => {
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: 'Keith Williams',
      designation: t('about.instructor'),
      imageSrc: 'images/KW.jpg',
    },
    {
      name: 'Yatindra Mahadik',
      designation: t('about.developer'),
      imageSrc: 'images/ym.jpg',
    },
    {
      name: 'Roopali Sarode',
      designation: t('about.developer'),
      imageSrc: 'images/rrs.jpg',
    },
    {
      name: 'Devika Vengurlekar',
      designation: t('about.developer'),
      imageSrc: 'images/dv.jpeg',
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{t('titleAbout')}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <h1 className="about-header">{t('about.teamMembers')}</h1>
          <div className="language-toggle">
            {/* <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('es')}>Español</button> */}
            <select name = "language" onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex-container">
                <div className="div-container">
                  <img src={member.imageSrc} alt={member.name} />
                </div>
                <div className="div-container">
                  <h2>{member.name}</h2>
                  <p>{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
