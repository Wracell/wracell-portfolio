"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  title: string;
  text: string;
  image: string;
  link?: string;
  tags?: string[];
  index: number;
}

const ProjectCard = ({ title, text, image, link, tags, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full h-[280px] sm:h-[320px] md:h-[420px] md:w-[800px] rounded-2xl overflow-hidden cursor-pointer relative group border border-white/10 hover:border-purple-500/30 shadow-xl transition-all duration-500 hover:shadow-glow-strong hover:scale-[1.02]"
    >
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-105"
      />

      {/* Permanent gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

      {/* Content always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 md:p-7">
        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-1.5 tracking-tight">
          {title}
        </h2>

        <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 font-light leading-relaxed line-clamp-2 mb-2 sm:mb-3">
          {text}
        </p>

        {/* Tech Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[9px] md:text-[10px] font-medium tracking-wide uppercase rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-purple-300 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-purple-400 transition-colors duration-300 group/link"
          >
            View project
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard