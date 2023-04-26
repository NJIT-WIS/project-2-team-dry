import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


export default function Contact() {
  return (
  <Layout home>
        <Head>
            <title>MyWebClass.org | Contact</title>
        </Head>
    <div>
      For more information contact ym336,rs366
    </div>
    </Layout>
  )
}

