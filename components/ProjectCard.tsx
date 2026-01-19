"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string;
  text: string;
  image: string;
  link?: string;
  index: number;
}

const ProjectCard = ({ title, text, image, link, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}

      className="w-[350px] h-[300px] md:h-[420px] md:w-[800px] rounded-2xl overflow-hidden cursor-pointer relative group border border-white/10 shadow-xl"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-full bg-cover bg-center absolute inset-0"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center">

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h1>

        <p className="text-sm md:text-base text-gray-200">
          {text}
        </p>

        {link && (
          <div className="mt-5 text-white font-semibold underline hover:text-blue-400 text-lg">
            Learn more &gt;
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard