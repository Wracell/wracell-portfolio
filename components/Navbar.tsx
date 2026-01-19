import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[65px] md:h-[100px] bg-transparent flex justify-between items-center px-5 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
        </div>
        <h1 className="text-white text-[20px] md:text-[25px] font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            wracell{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-3 md:gap-5 mb-0 md:mb-2">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;