"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  image: string;
  title: string;
  text: string;
  link?: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='w-[450px] h-[280px] rounded-md cursor-pointer'>
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* FRONT OF CARD */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
        </div>

        {/* BACK OF CARD */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>

          <div className='absolute inset-0 w-full h-full rounded-md bg-black/70 backdrop-blur-[2px] z-[-1]' />

          {/* 1. Added 'h-full' to make this flex container fill the card height */}
          <div className='flex flex-col gap-4 z-[30] drop-shadow-lg h-full'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-200 text-[16px]'>
              {text}
            </p>

            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                // 2. Added 'mt-auto' (push to bottom) and 'self-end' (push to right)
                className='mt-auto self-end inline-block px-4 py-2 text-white font-semibold rounded hover:bg-blue-500 hover:text-white transition-colors w-max'
              >
                View Project
              </Link>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard