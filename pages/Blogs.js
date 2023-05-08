import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import Image from 'next/image'
import path from 'path';
import matter from 'gray-matter';
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Author from '../components/_child/author'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css'


export default function Blogs(){

   SwiperCore.use([Autoplay])

  return (
    <div>
    <Head>
         <title>MyWebClass.org | Blogs</title>
    </Head>
    <section className="py-16">
       <div className= "container mx-auto md:px-20">
          <h1 className= "font-bold text-4xl pb-12 text-center">BLOG POST FOR THE WEBSITE FOR TEACHERS</h1>

          <Swiper
            //spaceBetween ={50}
            slidesPerView={1}
            loop={true}
            //onSlideChange={()=>console.log('slide change')}
            //onSwiper={(swiper)=>console.log(swiper)}
            autoplay={{
                delay:2000
            }}
          >

          <SwiperSlide>
             <div className="grid md:grid-cols-2">
               <div className="image">
               <Link legacyBehavior href={"/blogpost1"}>
                   <a><Image src={"/images/blogpost8.jpg"} width={700} height={700} style={{marginLeft:'150px'}}/></a>
               </Link>
               </div>

               <div className="info flex justify-center flex-col" style={{paddingLeft:'1000px', marginTop:'10px'}}>
                  <div className="cat">
                     <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Online Learning</a></Link>
                     <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-May 1, 2023</a></Link>
                  </div>

                  <div className="title">
                      <Link legacyBehavior href={"/"}><a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Online Courses that enhances your knowledge</a></Link>
                  </div>

                  <p className="text-gray-500 py-3">
                     Artificial intelligence (AI) has the potential to revolutionize the field of education through numerous ways. By automating certain tasks and providing personalized learning experiences,
                     Artificial Intelligence can help learn things through more efficient and effective manner
                  </p>

                  <Author></Author>
             </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="grid md:grid-cols-2">
                <div className="image">
                    <Link legacyBehavior href={"/contents/posts/blogpost1.md"}>
                       <a><Image src={"/images/blogpost3.jpg"} width={600} height={600}/></a>
                    </Link>
                </div>

                <div className="info flex justify-center flex-col">

                  <div className="cat">
                     <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Online Learning</a></Link>
                     <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-May 1, 2023</a></Link>
                  </div>

                  <div className="title">
                     <Link legacyBehavior href={"/"}><a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Online Courses that enhances your knowledge</a></Link>
                  </div>

                  <p className="text-gray-500 py-3">
                     Artificial intelligence (AI) has the potential to revolutionize the field of education through numerous ways. By automating certain tasks and providing personalized learning experiences,
                     Artificial Intelligence can help learn things through more efficient and effective manner
                  </p>

                  <Author></Author>
                </div>
             </div>

          </SwiperSlide>

          <SwiperSlide>
             <div className="grid md:grid-cols-2">
                <div className="image">
                    <Link legacyBehavior href={"/contents/posts/blogpost1.md"}>
                       <a><Image src={"/images/blogpost2.jpg"} width={600} height={600}/></a>
                    </Link>
                </div>

                <div className="info flex justify-center flex-col">

                  <div className="cat">
                     <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Online Learning</a></Link>
                     <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-May 1, 2023</a></Link>
                  </div>

                  <div className="title">
                     <Link legacyBehavior href={"/"}><a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Online Courses that enhances your knowledge</a></Link>
                  </div>

                  <p className="text-gray-500 py-3">
                     Artificial intelligence (AI) has the potential to revolutionize the field of education through numerous ways. By automating certain tasks and providing personalized learning experiences,
                     Artificial Intelligence can help learn things through more efficient and effective manner
                  </p>

                   <Author></Author>
                 </div>
             </div>

          </SwiperSlide>

          <SwiperSlide>
             <div className="grid md:grid-cols-2">
                <div className="image">
                    <Link legacyBehavior href={"/contents/posts/blogpost1.md"}>
                       <a><Image src={"/images/blogpost4.jpg"} width={600} height={600}/></a>
                    </Link>
                </div>

                <div className="info flex justify-center flex-col">

                  <div className="cat">
                     <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Online Learning</a></Link>
                     <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-May 1, 2023</a></Link>
                  </div>

                  <div className="title">
                     <Link legacyBehavior href={"/"}><a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Online Courses that enhances your knowledge</a></Link>
                  </div>

                  <p className="text-gray-500 py-3">
                     Artificial intelligence (AI) has the potential to revolutionize the field of education through numerous ways. By automating certain tasks and providing personalized learning experiences,
                     Artificial Intelligence can help learn things through more efficient and effective manner
                  </p>

                  <Author></Author>
                </div>
             </div>

          </SwiperSlide>

          <SwiperSlide>
  <div className="grid md:grid-cols-2">
    <div className="image">
      <Link legacyBehavior href={"/contents/posts/blogpost1.md"}>
        <a><Image src={"/images/blogpost7.jpg"} width={600} height={600}/></a>
      </Link>
    </div>

    <div className="info flex justify-center flex-col">
      <div className="cat">
        <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Online Learning</a></Link>
        <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-May 1, 2023</a></Link>
      </div>

      <div className="title">
        <Link legacyBehavior href={"/"}><a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Online Courses that enhances your knowledge</a></Link>
      </div>

      <p className="text-gray-500 py-3">
        Artificial intelligence (AI) has the potential to revolutionize the field of education through numerous ways. By automating certain tasks and providing personalized learning experiences,
        Artificial Intelligence can help learn things through more efficient and effective manner
      </p>

      <Author></Author>
    </div>
  </div>
</SwiperSlide>


          ...
          </Swiper>

       </div>
    </section>
    </div>
  )
}

