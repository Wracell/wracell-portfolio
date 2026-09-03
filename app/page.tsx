"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen min-h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}>

      <div className="relative z-20 flex flex-col justify-center h-full w-full max-w-[900px] px-4 sm:px-5 md:px-20 pb-20 md:pb-10 pt-20 md:pt-0">

        {/* GLASS PANEL WRAPPER */}
        <div className="glass-panel rounded-2xl p-5 sm:p-6 md:p-10 max-w-[700px]">

          {/* ROLE TAGLINE */}
          <div className="animate-fade-in-up mb-4">
            <span className="inline-block px-3 py-1 text-[11px] md:text-xs font-medium tracking-widest uppercase text-purple-300 bg-purple-500/15 border border-purple-500/25 rounded-full">
              BSCS Graduate
            </span>
          </div>

          {/* TEXT SECTION */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="animate-fade-in-up delay-100 text-[24px] xs:text-[28px] sm:text-[36px] md:text-[50px] text-white font-bold leading-[1.1] tracking-tight">
              Welcome!
              <span className="text-transparent block mt-1 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                I am Rhazel Jay Gumacal
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mx-auto md:mx-0 max-w-[280px] sm:max-w-md md:max-w-2xl leading-relaxed font-light">
              I am a 22-year-old BSCS Graduate from Pavia, Iloilo with a passion
              for technology development. Outside of tech, I enjoy beatboxing,
              watching anime/kdrama, and reading mangas/books. I am currently
              focused on building impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 items-center sm:items-start w-full animate-fade-in-up delay-300">
            <Link
              href="/my-skills"
              className="w-full sm:w-[160px] md:w-[180px] rounded-xl btn-gradient px-5 py-2.5 sm:py-3 text-center text-sm font-semibold tracking-wide"
            >
              <span>Learn more</span>
            </Link>

            <Link
              href="/my-projects"
              className="w-full sm:w-[160px] md:w-[180px] rounded-xl btn-glass px-5 py-2.5 sm:py-3 text-center text-sm font-medium tracking-wide"
            >
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="w-full sm:w-[160px] md:w-[180px] rounded-xl btn-glass px-5 py-2.5 sm:py-3 text-center text-sm font-medium tracking-wide"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10] hidden md:block pointer-events-none">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-[100px] top-10 md:right-[120px] lg:right-[220px] lg:top-40 animate-subtle-float"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} className="w-[360px] lg:w-[480px] h-auto" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[5]">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover opacity-80 md:opacity-100"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10] opacity-50 md:opacity-100 animate-float"
      />
    </main>
  );
}