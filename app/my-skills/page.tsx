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
      className="min-h-screen w-full flex flex-col items-center bg-cover bg-center overflow-hidden"
    >
      <div className="flex flex-col items-center gap-10 md:gap-20 w-full px-5 pt-24 md:pt-32 lg:pt-40 pb-10">

        {/* TEXT SECTION */}
        <div className="text-center space-y-4">
          <h1 className="font-semibold text-white text-[32px] md:text-[50px] leading-tight">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-sm md:text-xl max-w-[300px] md:max-w-none mx-auto">
            Tools and technologies I use and am familiar with.
          </p>
        </div>

        {/* SWIPER CONTAINER */}
        <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col gap-8">

          {/* Swiper 1: Left to Right */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3} // Shows 3 icons on smallest mobile
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 4 }, // Tablet (Portrait)
              768: { slidesPerView: 5 }, // Tablet (Landscape)
              1024: { slidesPerView: 6 }, // Desktop
            }}
            className="w-full"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="relative h-12 w-12 md:h-20 md:w-20 mx-auto">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    fill // Uses parent div size
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper 2: Right to Left (Reverse) */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true, // Moves opposite way
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            className="w-full"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="relative h-12 w-12 md:h-20 md:w-20 mx-auto">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page;