import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import Layout, { siteTitle } from '../components/layout'


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <Layout home>
        <Head>
            <title>MyWebClass.org | Contact</title>
        </Head>
        <main className={styles.container}>
            <h1 className={styles.headingMd}>Contact Us</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form_fields}>
                  <label className={styles.label}>
                    Name:
                    <input
                      type="text"
                      className={styles.label_input}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </label>

                  <label className={styles.label}>
                    Email:
                    <input
                      type="email"
                      className={styles.label_input}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </label>

                  <label className={styles.label}>
                    Message:
                    <textarea
                      className={styles.label_textarea}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </label>
                </div>
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
        </main>
    </Layout>
  )
}

