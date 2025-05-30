"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/Mountains.jpg)" }}
        className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
      >
        <div className="grid grid-cols-2 gap-5">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
