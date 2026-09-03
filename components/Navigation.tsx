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
        className="fixed z-[50] bottom-4 sm:bottom-6
        rounded-2xl flex justify-center items-center gap-0.5 sm:gap-1
        bg-black/40 backdrop-blur-xl border border-white/15
        px-2 sm:px-3 py-2 sm:py-3
        w-auto
        left-1/2 -translate-x-1/2
        shadow-glass"
      >
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="relative group flex flex-col items-center"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300
                ${
                  path === nav.name
                    ? "bg-white/15 shadow-glow"
                    : "hover:bg-white/10"
                }`}
            >
              <nav.icon
                className={`w-[20px] h-[20px] transition-all duration-300
                  ${
                    path === nav.name
                      ? "text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
                      : "text-white/70 group-hover:text-white group-hover:scale-110"
                  }`}
              />
            </div>
            {/* Active indicator dot */}
            {path === nav.name && (
              <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
            )}
            {/* Tooltip label */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium text-white bg-black/80 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {nav.label}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;