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
        <div className="flex flex-col items-center gap-8 max-w-[90%] max-h-[90%]">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-white text-[50px]">
              Apps{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                &{" "}
              </span>
              Websites
            </h1>
            <p className="text-gray-400 text-[20px]">
              These are the projects I have made so far.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
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
    </div>
  )
}

export default Page
