"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[65px] md:h-[80px] bg-black/30 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-5 md:px-20 transition-all duration-300">
      <Link href="/" className="flex flex-row gap-3 items-center group">
        <h1 className="text-white text-[20px] md:text-[25px] font-semibold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            wracell
          </span>
        </h1>
      </Link>

      <div className="flex flex-row gap-4 md:gap-5 items-center">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/icon"
            aria-label={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            />
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium text-white bg-black/80 backdrop-blur-sm rounded-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;