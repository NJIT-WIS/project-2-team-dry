import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
  return (
      <Layout home>
        <Head>
            <title>MyWebClass.org | About</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>About Team DRY</p>
        </section>
      </Layout>
  )
}