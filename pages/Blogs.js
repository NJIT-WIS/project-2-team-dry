import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function Blogs() {
  return (
      <Layout home>
        <Head>
            <title>MyWebClass.org | Blogs</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Blogs Page</p>
        </section>
      </Layout>
  )
}