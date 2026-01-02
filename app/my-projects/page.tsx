"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      {/* 1. Added 'grid-cols-1 md:grid-cols-2': 1 column on mobile, 2 on desktop 
         2. Added 'max-w' and 'max-h': Prevents cards from going off-screen 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Page