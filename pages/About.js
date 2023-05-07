import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

const About = () => {
  const teamMembers = [
    {
      name: 'Keith Williams',
      designation: 'Instructor',
      imageSrc: 'images/KW.jpg',
    },
    {
      name: 'Yatindra Mahadik',
      designation: 'Developer',
      imageSrc: 'images/ym.jpg',
    },
    {
      name: 'Roopali Sarode',
      designation: 'Developer',
      imageSrc: 'images/rrs.jpg',
    },
    {
      name: 'Devika Vengurlekar',
      designation: 'Developer',
      imageSrc: 'images/dv.jpeg',
    },
  ];

  return (
    <Layout home>
        <Head>
            <title>MyWebClass.org | About</title>
        </Head>
        <section className={utilStyles.headingMd}>
        <div>
      <h1 className="about-header">Team Members</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex-container">
            <div className="div-container"><img src={member.imageSrc} alt={member.name} /></div>
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
