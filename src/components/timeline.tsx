import React, { useRef, useState } from "react"

import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap, { SteppedEase } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const HEADER_COMMAND = "$ git log --oneline --graph"

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const commits = [
  {
    hash: "4g7c93",
    type: "feat",
    scope: "career",
    message: "co-op at staples",
    details: [
      "+ Role: Data Engineer Intern",
      "+ Location: Framingham, MA for 6 months",
      "+ Technologies: DBT, Snowflake, Databricks",
    ],
    date: "2025",
  },
  {
    hash: "9f4a82",
    type: "feat",
    scope: "education",
    message: "master's at northeastern university",
    details: [
      "+ Focus: Data Engineering & AI",
      "+ Location: Boston, MA",
      "+ Major: Information Systems",
    ],
    date: "2024",
  },
  {
    hash: "8c3b71",
    type: "feat",
    scope: "career",
    message: "data engineer",
    details: [
      "+ Python, SQL, Spark, Scala",
      "+ ETL Technologies (Azure,Airflow,Hadoop)",
      "+ Senior member of the reliance-jio Data Engineering team",
    ],
    date: "2021-2024",
  },
  {
    hash: "6e1b54",
    type: "feat",
    scope: "career",
    message: "joined reliance-jio",
    details: [
      "+ Joined Jio Platforms Limited as Graduate Engineer Trainee",
      "+ Database Optimization",
      "+ Driving process improvements",
    ],
    date: "2019-2020",
  },
  {
    hash: "5a9c43",
    type: "ship",
    scope: "research",
    message: "automated IoT garbage management systems",
    details: [
      "+ Published research paper on IoT-based smart garbage monitoring systems",
      "+ Sensor Data Collection",
      "+ Intergrated Ultrasonic sensor and Microcontroller",
    ],
    date: "2019",
  },
  {
    hash: "4b8d32",
    type: "feat",
    scope: "education",
    message: "bachelor's from university of mumbai",
    details: [
      "+ Major : Computer Engineering",
      "+ Graduated with First Class Honors",
      "+ Coursework: Data Structures, Algorithms, Database Management",
    ],
    date: "2015-2019",
  },
  {
    hash: "3c7e21",
    type: "init",
    scope: "root",
    message: "initial commit - journey begins",
    details: [
      "+ Location: Mumbai, India",
      "+ Education: Started Bachelor's in Computer Science",
    ],
    date: "Start",
  },
] as const

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLHeadingElement | null>(null)
  const cursorRef = useRef<HTMLSpanElement | null>(null)
  const subHeaderRef = useRef<HTMLParagraphElement | null>(null)
  const commitsRef = useRef<HTMLDivElement | null>(null)

  // The timeline sits below the fold, so hold the intro back until it is
  // scrolled into view.
  const [isVisible, setIsVisible] = useState(false)

  useGSAP(() => {
    const container = containerRef.current

    if (!container) return

    if (prefersReducedMotion()) {
      setIsVisible(true)
      return
    }

    ScrollTrigger.create({
      trigger: container,
      // Fire while the section is still rising into view so the type-out has
      // already started by the time it settles.
      start: "top 85%",
      once: true,
      onEnter: () => setIsVisible(true),
    })
  }, [])

  useGSAP(() => {
    if (prefersReducedMotion()) {
      if (headerRef.current) headerRef.current.textContent = HEADER_COMMAND
      gsap.set([cursorRef.current, subHeaderRef.current], { autoAlpha: 1 })
      if (commitsRef.current) {
        gsap.set(commitsRef.current.children, { y: 0, opacity: 1 })
      }
      return
    }

    if (commitsRef.current) {
      gsap.set(commitsRef.current.children, { y: 16, opacity: 0 })
    }
    gsap.set([cursorRef.current, subHeaderRef.current], { autoAlpha: 0 })

    if (!isVisible) return

    const tl = gsap.timeline()

    tl.to(headerRef.current, {
      text: {
        value: HEADER_COMMAND,
      },
      duration: 0.9,
      ease: "none",
    }).fromTo(
      subHeaderRef.current,
      {
        y: -10,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: "power1.out",
      },
      "+=0.1"
    )

    // The blink runs forever, so keep it off the main timeline — an infinitely
    // repeating child would sit between the tweens appended after it.
    gsap.fromTo(
      cursorRef.current,
      { autoAlpha: 0, x: -20 },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        repeat: -1,
        ease: SteppedEase.config(1),
      }
    )

    if (commitsRef.current) {
      // Rise with the scroll direction, slow enough to read as a fade rather
      // than a flicker, and overlapping the sub-header so it stays one gesture.
      tl.to(
        commitsRef.current.children,
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          ease: "power2.out",
          duration: 0.5,
        },
        "-=0.15"
      )
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="mx-auto max-w-6xl">
      <div className="mb-8">
        <header>
          <h2
            ref={headerRef}
            className="mb-2 inline-block h-7 text-lg font-bold text-emerald-400"
          />
          <span ref={cursorRef} className="text-emerald-400">
            █
          </span>
          <p ref={subHeaderRef} className="text-sm text-gray-500">
            My commits
          </p>
        </header>
      </div>

      <div ref={commitsRef} className="grid gap-2">
        {commits.map((commit) => (
          <AnimatedDetails key={commit.hash} commit={commit} />
        ))}
      </div>
    </div>
  )
}

interface AnimatedDetailsProps {
  commit: (typeof commits)[number]
}

const AnimatedDetails: React.FC<AnimatedDetailsProps> = ({ commit }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef<boolean>(false)

  const handleToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const details = detailsRef.current
    const content = contentRef.current

    if (!details || !content) return

    e.preventDefault()

    if (isAnimating.current) return
    isAnimating.current = true

    const isOpen = details.open

    if (!isOpen) {
      details.open = true
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            isAnimating.current = false
          },
        }
      )
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          details.open = false
          isAnimating.current = false
        },
      })
    }
  }

  const scope = commit.scope

  return (
    <details ref={detailsRef}>
      <summary
        onClick={handleToggle}
        className={clsx(
          "grid cursor-pointer items-center gap-x-2 rounded px-3 py-2 transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-1 md:grid-cols-[80px,10px,1fr,100px]",
          {
            "focus-visible:ring-emerald-400": scope === "career",
            "focus-visible:ring-yellow-400": scope === "education",
            "focus-visible:ring-orange-400": scope === "research",
            "focus-visible:ring-purple-400": scope === "root",
            "focus-visible:ring-blue-400":
              scope !== "career" &&
              scope !== "education" &&
              scope !== "research" &&
              scope !== "root",
          },
          "grid-cols-[80px,10px,1fr]"
        )}
      >
        <span className="mt-1 w-14 shrink-0 self-start text-xs text-gray-500 sm:w-20 sm:text-sm md:mt-0 md:self-auto">
          {commit.hash}
        </span>
        <span
          className={clsx("relative shrink-0 self-start text-lg leading-none", {
            "text-emerald-400": scope === "career",
            "text-yellow-400": scope === "education",
            "text-orange-400": scope === "research",
            "text-purple-400": scope === "root",
            "text-blue-400":
              scope !== "career" &&
              scope !== "education" &&
              scope !== "research" &&
              scope !== "root",
          })}
        >
          ∗
        </span>
        <span className="flex flex-col items-start md:flex-row md:gap-2">
          <span
            className={clsx("shrink-0 font-semibold", {
              "text-emerald-400": scope === "career",
              "text-yellow-400": scope === "education",
              "text-orange-400": scope === "research",
              "text-purple-400": scope === "root",
              "text-blue-400":
                scope !== "career" &&
                scope !== "education" &&
                scope !== "research" &&
                scope !== "root",
            })}
          >
            {commit.type} ({commit.scope}):
          </span>
          <span className="text-gray-300">{commit.message}</span>
        </span>
        <span className="col-start-3 mt-1 shrink-0 text-xs text-gray-500 md:col-start-4 md:mt-0 md:text-right">
          {commit.date}
        </span>
      </summary>

      <div
        ref={contentRef}
        className="grid gap-2 overflow-hidden pb-2 pt-1 md:grid-cols-[80px,10px,1fr,100px]"
        style={{ gridTemplateColumns: "80px 10px 1fr" }}
      >
        <div className="col-start-3">
          {commit.details.map((detail) => (
            <p
              key={detail}
              className={clsx("text-sm", {
                "text-emerald-400": detail.startsWith("+"),
                "text-red-400": detail.startsWith("-"),
                "text-gray-400":
                  !detail.startsWith("+") && !detail.startsWith("-"),
              })}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </details>
  )
}

export default Timeline
