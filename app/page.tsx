"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="flex items-start md:items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        {/* Adjusted padding */}
        <div className="px-5 pt-24 md:pt-0 md:pl-40 pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          {/* Smaller text on mobile */}
          <h1 className="text-[28px] md:text-[50px] text-white font-semibold leading-tight">
            Welcome, I am
            {/* Blocks on mobile (new line), inline on desktop */}
            <span className="text-transparent block md:inline pl-0 md:pl-40 bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Rhazel Jay Gumacal
            </span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base text-justify md:text-left max-w-md md:max-w-none">
            I am a 22-year-old BSCS student from Pavia, Iloilo with a passion
            for technology development. Outside of tech, I enjoy beatboxing,
            watching anime/kdrama, and reading mangas/books. I am currently
            focused on building impactful digital experiences and enhancing my
            skills in software and website development.
          </p>

          {/* Desktop Buttons */}
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-52 right-5 z-[20] flex-col md:hidden gap-3 items-end">
        <Link
          href="/my-skills"
          className="rounded-[20px] text-center bg-blue-500 px-5 py-2 text-sm text-white w-[140px] shadow-lg"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] text-center bg-transparent border border-white px-5 py-2 text-sm text-white w-[140px] shadow-lg backdrop-blur-sm"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] text-center bg-transparent border border-white px-5 py-2 text-sm text-white w-[140px] shadow-lg backdrop-blur-sm"
        >
          Contact me
        </Link>
      </div>

      {/* Cliff & Horse: HIDDEN on mobile (hidden md:block) to prevent overlap */}
      <div className="absolute bottom-0 right-0 z-[10] hidden md:block">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-[220px] top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      {/* Trees: Visible everywhere, formatted to cover bottom properly */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}