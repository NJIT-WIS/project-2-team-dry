import React from 'react'
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

export default function Privacy() {
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        }
        
        const { t } = useTranslation();
  return (
    <Layout home>
        <Head>
            <title>{t('title')}</title>
        </Head>
        <section style={{padding: '2rem'}}>
            <h1>{t('heading')}</h1>

                    <p>{t('intro')}</p>
                    <h2>{t('infoHeading')}</h2>
                    <p>{t('infoList.0')}</p>
                    <p>{t('infoList.1')}</p>
                    <p>{t('infoList.2')}</p>
                    <h2>{t('useHeading')}</h2>
                    <ul>
                        <li>{t('useList.0')}</li>
                        <li>{t('useList.1')}</li>
                        <li>{t('useList.2')}</li>
                        <li>{t('useList.3')}</li>
                        <li>{t('useList.4')}</li>
                    </ul>
                    <h2>{t('shareHeading')}</h2>
                    <p>{t('shareInfo')}</p>
                    <h2>{t('securityHeading')}</h2>
                    <p>{t('securityInfo')}</p>
                    <h2>{t('accessibilityHeading')}</h2>
                    <p>{t('accessibilityInfo')}</p>
                    <h2>{t('analyticsHeading')}</h2>
                    <p>{t('analyticsInfo')}</p>
                    <h2>{t('dataRetentionHeading')}</h2>
                    <p>{t('dataRetentionInfo')}</p>
                    <h2>{t('rightsHeading')}</h2>
                    <p>{t('rightsInfo')}</p>
                    <h2>{t('changesHeading')}</h2>
                    <p>{t('changesInfo')}</p>
                    <h2>{t('contactHeading')}</h2>
                    <p>{t('contactInfo')}</p>
                    <div className="language-toggle">
                        <select name = "language" onChange={changeLanguage}>
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                            <option value="es">Español</option>
                        </select>
                     </div>
                </section>
               
    </Layout>
  )
}