import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaCode,
  FaJava,
  FaJsSquare,
  FaPython,
  FaSnowflake,
} from "react-icons/fa"
import { PiArrowSquareOut } from "react-icons/pi"
import {
  SiApachespark,
  SiCplusplus,
  SiJupyter,
  SiScala,
  SiTypescript,
} from "react-icons/si"

import { prefersReducedMotion, titleCase } from "@utils"

gsap.registerPlugin(ScrollTrigger)

export interface Project {
  id: number
  name: string
  description: string
  language: string
  html_url: string
  homepage?: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description:
      "Personal portfolio website built with Gatsby, React, TypeScript, and Tailwind CSS. Showcases projects, blog, and contact info.",
    language: "TypeScript",
    html_url: "https://github.com/Abhinow1997/Abhinow1997.github.io",
    homepage: "https://abhinow1997.github.io",
  },
  {
    id: 2,
    name: "Venture Scope",
    description:
      "AI business intelligence platform for data-driven decisions on markets and competitors.",
    language: "Python",
    html_url: "https://github.com/BigDataIA-Spring2025-4/Venture-Scope",
  },
  {
    id: 3,
    name: "Federal Reserve Economic Data- Snowflake Pipelines",
    description:
      "Build a pipeline to create a dashboard that displays the inverse treasury yield curve, derived from FRED's U.S. Treasury yield data for 10-Year and 2-Year bonds.",
    language: "Snowflake",
    html_url:
      "https://github.com/BigDataIA-Spring2025-4/DAMG7245_Assignment03_Part02",
  },
  {
    id: 4,
    name: "AI-Powered Financial Report Retrieval System",
    description:
      "Developed a Naïve RAG-based system automating the extraction, processing, and analysis of NVIDIA’s quarterly financial reports.",
    language: "Python",
    html_url:
      "https://github.com/BigDataIA-Spring2025-4/DAMG7245_Assignment04_Part02",
  },
  {
    id: 5,
    name: "Research : IoT Garbage Management System",
    description:
      "Research project on automated IoT-based smart garbage monitoring using ultrasonic sensors and microcontrollers. Published research paper.",
    language: "C++",
    html_url: "https://ijsart.com/automated-garbage-management-system-30177",
  },
  {
    id: 6,
    name: "PDF Chatbot",
    description:
      "Chatbot that answers questions from PDF documents using NLP techniques like text extraction, embedding, and LLMs.",
    language: "Python",
    html_url:
      "https://github.com/BigDataIA-Spring2025-4/Web-and-PDF-Data-Extraction-Tool",
    homepage:
      "https://enchanting-roundworm-f3c.notion.site/Web-PDF-Data-Extraction-Tool-19f576459f01800f9fa8c06a6ddec009",
  },
]

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    if (!projectsRef.current || prefersReducedMotion()) return

    gsap.from(projectsRef.current.children, {
      opacity: 0,
      y: 16,
      duration: 0.45,
      // grid: "auto" lets GSAP read the CSS grid so the cards arrive as a wave
      // across rows rather than one long queue.
      stagger: { each: 0.06, from: "start", grid: "auto" },
      ease: "power2.out",
      clearProps: "opacity,transform",
      scrollTrigger: { trigger: projectsRef.current, start: "top 85%" },
    })
  }, [])

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8">
        <h2 className="mb-2 font-mono text-lg font-bold text-emerald-400">
          $ ls ~/projects
        </h2>
        <p className="font-mono text-sm text-gray-400">
          Some of my work in data engineering, ML, and software development
        </p>
      </header>

      <section ref={projectsRef} className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <div className="mt-12">
        <OutboundLink
          href="https://github.com/Abhinow1997?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block rounded-lg no-underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {/* Same chip as the resume CTA: the anchor is left free for GSAP, the
              inner span owns every CSS transition. */}
          <span className="relative flex items-center gap-3 overflow-hidden whitespace-nowrap rounded-lg border border-emerald-400/25 bg-emerald-400/[0.06] px-5 py-3 font-mono text-sm tracking-wide text-gray-200 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-emerald-400/60 group-hover:bg-emerald-400/10 group-hover:text-white group-hover:shadow-[0_10px_30px_-14px_rgba(52,211,153,0.6)] group-active:translate-y-0 group-active:bg-emerald-400/20 motion-reduce:transform-none motion-reduce:transition-none">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
            />
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="shrink-0 font-medium">More on GitHub</span>
            <PiArrowSquareOut
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-gray-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300 motion-reduce:transform-none motion-reduce:transition-none"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </OutboundLink>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
}

const iconMap: { [key: string]: React.ComponentType } = {
  C: FaCode,
  Cpp: SiCplusplus,
  Javascript: FaJsSquare,
  Jupyter: SiJupyter,
  Python: FaPython,
  Typescript: SiTypescript,
  Scala: SiScala,
  Spark: SiApachespark,
  Java: FaJava,
  Snowflake: FaSnowflake,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const updatedLabel = titleCase(project.language?.replace(/\+/g, "p") || "")
  const Icon = iconMap[updatedLabel]

  return (
    <div className="group flex flex-col justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-gray-900/70">
      <div>
        <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
          {project.name}
        </h3>
        <p className="mb-4 text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between text-sm">
        {project.language && Icon && (
          <span className="flex items-center gap-2 text-gray-400">
            <Icon className="text-lg" />
            <span>{project.language}</span>
          </span>
        )}
        <div className="flex gap-4">
          <OutboundLink
            href={project.html_url}
            aria-label="Source Code"
            className="relative inline font-sans text-emerald-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-emerald-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full"
            title="Source Code"
            rel="noopener noreferrer"
            target="_blank"
          >
            Code
          </OutboundLink>
          {project.homepage && (
            <OutboundLink
              href={project.homepage}
              className="relative inline font-sans text-blue-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-blue-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full"
              aria-label="Docs"
              title="Docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Docs
            </OutboundLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
