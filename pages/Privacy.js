import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function Privacy() {
  return (
      <Layout home>
        <Head>
            <title>MyWebClass.org | Privacy</title>
        </Head>
        <section style={{padding: '2rem'}}>
           <h1>Privacy and Cookies Policy</h1>

                    <p>We care for your privacy. This privacy policy explains what personal information this website collects from its users,
                        how that information is used, and who it is shared with.</p>
                    <h2>Information we collect</h2>
                    <p>We may collect personal information from you when you visit our website, such as:</p>
                   <p>Following are the personal information we may collect from you when you visit our website</p>
                    <ul>
                        <li> Name</li>
                        <li>Email address
                        </li>
                        <li>Information about your device, such as your IP address, browser type, and operating
                            system.
                        </li>
                    </ul>
                    <h2>How we use your information</h2>
                    <p>We use the information we collect from you for the following purposes:</p>
                    <ul>
                        <li>To comply with legal requirements </li>
                        <li> To improve user experience
                        </li>
                        <li>To improvise the website and services through analytics
                        </li>
                        <li>To comply with legal obligations</li>
                        <li>To personalize the content and advertising </li>
                    </ul>
                    <h2>Sharing of Information</h2>
                    <p>We do not sell, rent, or trade your personal information to third parties. However, we may share
                        your personal information with third-party service providers who assist us in analytics for providing bettter services and products.</p>
                    <h2>Security Measures</h2>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                        However, we cannot guarantee the security of your information, as no method of transmission over the internet is completely secure.</p>
                    <h2>Accessibility Policy</h2>
                    <p>We are committed to ensuring that our website is accessible to everyone, including individuals with disabilities.
                        We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
                    <h2>Google Analytics</h2>
                    <p>We collect information about your use of our website using Google Analytics. Google Analytics collects information such as how
                        frequently people visit the site, what pages they visit when they do, and what other sites they visited before arriving to our
                         website. We use the data from Google Analytics to improve our website and user experience. Google Analytics collects just the
                         IP address allocated to you on the day you visit our website, not your name or other identifying information. We do not combine
                          information gathered via Google Analytics with personally identifiable information. Google Analytics places a persistent cookie
                          on your web browser to recognize you as a unique user the next time you visit the site.</p>
                    <h2>Data retention and security</h2>
                    <p>We retain the information we collect for as long as necessary to fulfill the purposes for which
                        it was collected, unless a longer retention period is required by law. We take reasonable
                        measures to protect the information we collect from loss, theft, misuse, and unauthorized
                        access, disclosure, alteration, and destruction.</p>
                    <h2>Your rights</h2>
                    <p>Right to access: Users have the right to request access to their personal data that is held by the website. This includes
                          information about what data is being collected, how it's being used, and who it's being shared with.

                        Right to rectification: If the user's personal data is inaccurate or incomplete, they have the right to request that it be corrected or updated.

                        Right to erasure: Users have the right to request that their personal data be deleted from the website's database.
                          However, this right is not absolute and may be limited in certain circumstances.</p>

                    <h2>Changes to This Policy</h2>
                    <p>This Privacy Policy may be updated from time to time. Any changes will be communicated to you by posting the revised Privacy
                        Policy on this page. We urge that you examine our Privacy Policy on a regular basis for changes.</p>
                    <h2>Contact us</h2>
                    <p>Please contact us at ym336@njit.edu, rs336@njit.edu or dv339@njit.edu if you have any queries regarding this Privacy Policy.</p>

                </section>
      </Layout>
  )
}