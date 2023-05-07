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



  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{display: 'flex', margin: '3rem', justifyContent: 'space-between'}}>
        <div style={{width: '1000px', display: 'flex', flexDirection: 'column'}}>
            <h1> Transform your teaching </h1>
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>MyWebClass offers an opportunity to equip your students with state-of-the-art software engineering skills,
            enabling them to embark on a transformative learning journey. Discover advanced technologies and innovative teaching methods that will revolutionize your classroom experience. 
            Our platform is designed to bring together educators from around the world who are passionate about innovation and learning. Whether you're interested in website development, AI-driven tech, agile methodologies, or lean approaches, our community provides a wealth of knowledge and resources to help you transform your teaching and student learning outcomes</p>
            <button onClick={() => router.push('/Courses')} className={indexStyles.buttonStyle}>
                Courses
            </button>
        </div>
        <div style={{}}>
            <img style={{ height: '500px', width: '500px'}} src="images/classroom.png" alt="a teacher with students" width="720px"/>
        </div>
      </div>
      <section style={{textAlign: 'center'}}>
        <a className='fa-icon-wrapper'> <h2>Sign up for our newsletter</h2> <FontAwesomeIcon icon={faNewspaper} size="xs"/></a>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={indexStyles.inputStyle}
        />
        <button onClick={handleSignup} className={indexStyles.buttonStyle}>
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
