"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-start justify-center bg-center bg-cover overflow-hidden md:items-center"
    >
      <div className="flex flex-col items-center justify-start md:justify-center w-full max-w-6xl px-4 h-full pt-24 md:pt-0 pb-10">

        <div className="flex flex-col items-center gap-3 mb-8 relative z-20">
          <h1 className="font-semibold text-white text-[28px] md:text-[50px] text-center">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg text-center max-w-[90%] md:max-w-full">
            These are the projects I have participated in building.
          </p>
        </div>

        <div className="w-[350px] h-auto md:h-[420px] md:w-[800px] flex items-center justify-center">
          <Swiper
            style={{
              // @ts-ignore
              '--swiper-pagination-color': '#a855f7', // Active dot 
              '--swiper-pagination-bullet-inactive-color': '#ffffff', // Inactive dot (White)
              '--swiper-pagination-bullet-inactive-opacity': '0.5', // 50% opacity
              '--swiper-pagination-bullet-size': '5px', // Optional: Change size
              '--swiper-pagination-bullet-horizontal-gap': '6px' // Optional: Change spacing
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="swiper_container w-full py-10"
          >
            {Projects.map((project, index) => (
              <SwiperSlide key={index} className="w-[280px] md:w-[300px]">
                <ProjectCard
                  index={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  link={project.link}
                />
              </SwiperSlide>
            ))}

            <div className="slider-controler mt-8 flex justify-center gap-4 relative z-50">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Page