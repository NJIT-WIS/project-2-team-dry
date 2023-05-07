import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


const Courses = () => {
  const courses = [
    {
      name: "The Complete Web Developer Course",
      description: "In this comprehensive course that covers everything you need to know to build web applications from scratch. The course starts with the basics of HTML, CSS, and JavaScript and then progresses to more advanced topics like responsive design, server-side programming with Node.js, and database integration with MongoDB. Throughout the course, you'll build several real-world projects that will help you apply what you've learned and gain practical experience. By the end of the course, you'll have a solid foundation in web development and be equipped with the skills and knowledge needed to build your own web applications.",
    },
    {
      name: "React Native - The Practical Guide",
      description: "This is a project-based course that teaches you how to build high-quality mobile apps using the popular React Native framework. You'll start with the basics of React Native and learn how to create user interfaces that work on both iOS and Android platforms. The course covers handling data and interacting with native device features such as the camera, GPS, and accelerometer. You'll learn best practices for optimizing performance and using popular libraries and tools like Redux, React Navigation, and Expo. Throughout the course, you'll work on several real-world projects, including a weather app, a social media app, and a news reader app. You'll also learn how to test and debug your apps using tools like Jest and React Native Debugger. By the end of the course, you'll be equipped with the skills and knowledge needed to build your own mobile apps and turn your ideas into reality.",
    },
    {
      name: "Building a Next.js App with Google Analytics Integration",
      description: "In this project-based course, you'll learn how to build a Next.js web application from scratch and integrate Google Analytics for tracking user behavior and website performance. You'll work on a real-world project, building a web application for a fictional e-commerce store, where you'll learn how to track user behavior and analyze data to improve the user experience and optimize the website's performance. You'll start by setting up a basic Next.js project and configuring the necessary dependencies, and then learn how to set up Google Analytics and track pageviews and events in your application. Additionally, you'll explore advanced features such as user segmentation, conversion tracking, and custom reporting. By the end of the course, you'll have a deep understanding of how to build a production-ready Next.js app with Google Analytics integration and how to use data to drive business decisions.",
    }
  ];

  return (
    <Layout home>
        <Head>
            <title>MyWebClass.org | Courses</title>
        </Head>
        <section className={utilStyles.headingMd}>
        <div>
      <h1 className="courses-header">Courses</h1>
      <div className="courses">
        {courses.map((course) => (
          <div key={course.name} className="flex-container">
            <div className="div-container"> 
            <h2>{course.name}</h2>
            <p style={{textAlign: 'justify'}}>{course.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
        </section>
      </Layout>
  );
};

export default Courses;
