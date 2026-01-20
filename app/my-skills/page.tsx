"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-start justify-center bg-cover bg-center md:items-center"
    >
      <div className="flex flex-col w-full h-full md:h-auto gap-24 md:gap-20 max-w-[95%] md:max-w-[80%] text-center items-center pt-36 md:pt-0 pb-10 md:pb-0">

        {/* TEXT SECTION: Stays at the top because of the parent's flex direction */}
        <div className="flex flex-col items-center gap-2 md:gap-4 flex-none">
          <h1 className="font-semibold text-white text-[28px] md:text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[12px] md:text-[20px]">
            Tools and technologies I used and familiar with.
          </p>
        </div>

        <div className="flex flex-col gap-10 justify-center w-full md:flex-none md:gap-20">
          <Swiper
            slidesPerView={3} // Mobile default
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-full md:max-w-[80%]"
            breakpoints={{
              // Original Desktop Settings
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="max-md:w-[40px] max-md:h-[40px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second Swiper */}
          <Swiper
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-full md:max-w-[80%]"
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="max-md:w-[40px] max-md:h-[40px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page;