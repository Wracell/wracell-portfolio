"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      {/* Transition OUTSIDE the nav div */}
      {isRouting && <Transition />}

      <div
        className="absolute z-[50] -bottom-20 rounded-full flex justify-between items-center border bg-black border-white px-4 py-7
        w-[95%] md:w-[20%] 
        left-0 right-0 mx-auto
        md:left-[20%] md:right-auto md:mx-0
        max-h-[150px]"
      >
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className="mb-16 pl-5 min-w-[20%]">
            <nav.icon
              className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"
                }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;