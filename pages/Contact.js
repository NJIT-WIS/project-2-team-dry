import React from 'react'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import Layout, { siteTitle } from '../components/layout'
import SubscribeContainer from '../components/Subscribe'

export default function Contact() {
  return (
    <Layout home>
        <Head>
            <title>MyWebClass.org | Contact</title>
        </Head>
        <main className={styles.container}>
          <SubscribeContainer>
          </SubscribeContainer>
        </main>
    </Layout>
  )
}