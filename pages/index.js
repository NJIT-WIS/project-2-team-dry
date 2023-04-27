import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React, {useState} from 'react'

export default function Home({ allPostsData }) {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSignup = () => {
    console.log('Email submitted:', email)
    // Add your logic to collect the email address here
  }

  const inputStyle = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '8px',
    width: '250px',
  }

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{display: 'flex', margin: '5rem', justifyContent: 'flex-end', gap: '2rem'}}>
        <div style={{width: '700px', display: 'flex', flexDirection: 'column'}}>
            <h1> Transform your teaching </h1>
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>MyWebClass offers an opportunity to equip your students with state-of-the-art software engineering skills,
            enabling them to embark on a transformative learning journey. Discover advanced technologies and innovative teaching methods that will revolutionize your classroom experience</p>
            <button style={{width: '100px', height: '40px', backgroundColor: '#3d5a80', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Courses
            </button>
        </div>
        <div style={{}}>
            <img style={{ height: '400px', width: '400px'}} src="images/classroom.png" alt="a teacher with students" width="720px"/>
        </div>
      </div>
      <section style={{textAlign: 'center'}}>
        <h2>Sign up for our newsletter</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />
        <button onClick={handleSignup} style={buttonStyle}>
          Sign up
        </button>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
