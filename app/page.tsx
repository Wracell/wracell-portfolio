"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}>

      <div className="relative z-20 flex flex-col justify-center h-full w-full max-w-[900px] px-5 md:px-20 pb-10">

        {/* TEXT SECTION */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[36px] md:text-[50px] text-white font-semibold leading-tight">
            Welcome, I am
            <span className="text-transparent block md:inline md:pl-4 bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Rhazel Jay Gumacal
            </span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mx-auto md:mx-0 max-w-md md:max-w-2xl">
            I am a 22-year-old BSCS student from Pavia, Iloilo with a passion
            for technology development. Outside of tech, I enjoy beatboxing,
            watching anime/kdrama, and reading mangas/books. I am currently
            focused on building impactful digital experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center md:items-start w-full">
          <Link
            href="/my-skills"
            className="w-[160px] md:w-[200px] rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-center text-white transition-all shadow-lg"
          >
            Learn more
          </Link>

          <Link
            href="/my-projects"
            className="w-[160px] md:w-[200px] rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-center text-white transition-all hover:bg-white/10"
          >
            My projects
          </Link>

          <Link
            href="/contact-me"
            className="w-[160px] md:w-[200px] rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-center text-white transition-all hover:bg-white/10"
          >
            Contact me
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10] hidden md:block pointer-events-none">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-[150px] top-10 lg:right-[220px] lg:top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
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
        className="absolute top-0 left-0 z-[10] opacity-50 md:opacity-100"
      />
    </main>
  );
}