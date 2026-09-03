"use client";
import React from "react";
import { SkillData } from "@/constants";
import Image from "next/image";

const Page = () => {
  // Group skills by category
  const categories = SkillData.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, typeof SkillData>);

  const categoryOrder = ["Frontend", "Backend", "Tools"];
  const sortedCategories = Object.entries(categories).sort(([a], [b]) => {
    const ia = categoryOrder.indexOf(a);
    const ib = categoryOrder.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  let globalIndex = 0;

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-full flex flex-col items-center bg-cover bg-center overflow-y-auto overflow-x-hidden"
    >
      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14 w-full px-4 sm:px-5 pt-24 md:pt-32 lg:pt-36 pb-28">

        {/* TEXT SECTION */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <h1 className="font-bold text-white text-[26px] sm:text-[32px] md:text-[50px] leading-tight tracking-tight">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-[320px] sm:max-w-[400px] md:max-w-none mx-auto font-light">
            Tools and technologies I use and am familiar with.
          </p>
        </div>

        {/* BENTO GRID BY CATEGORY */}
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {sortedCategories.map(([category, skills]) => (
            <div key={category} className="space-y-4">

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {skills.map((skill) => {
                  const idx = globalIndex++;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card flex flex-col items-center justify-center gap-2 py-4 px-2 md:py-5 md:px-3 cursor-default animate-fade-in-up group"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="relative h-9 w-9 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={skill.Image}
                          alt={skill.name}
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                      <span className="text-[10px] md:text-xs text-gray-300 font-medium text-center leading-tight group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;