import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap, { SteppedEase } from "gsap"
import TextPlugin from "gsap/TextPlugin"

import { SEO } from "@components"

gsap.registerPlugin(TextPlugin)

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
      "+ Intergrated Ultrasonic sensor and Microcontroller"
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

const TimelinePage: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null)
  const cursorRef = useRef<HTMLSpanElement | null>(null)
  const subHeaderRef = useRef<HTMLParagraphElement | null>(null)
  const commitsRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(headerRef.current, {
      text: {
        value: "$ git log --oneline --graph",
      },
      duration: 1,
      ease: "none",
    })
      .fromTo(
        cursorRef.current,
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, duration: 1, repeat: -1, ease: SteppedEase.config(1) }
      )
      .from(
        subHeaderRef.current,
        {
          y: -10,
          opacity: 0,
          ease: "power1.out",
        },
        "<0.1"
      )

    if (commitsRef.current) {
      tl.from(commitsRef.current.children, {
        y: -12,
        opacity: 0,
        stagger: 0.04,
        ease: "power3.out",
        duration: 0.2,
      })
    }
  }, [])

  return (
    <>
      <SEO title="About" />

      {/* Black Background - Matching Homepage */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="text-gray-300 min-h-[calc(100vh-216px)] p-4 font-mono sm:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <header>
              <h2
                ref={headerRef}
                className="text-lg h-7 inline-block font-bold text-emerald-400 mb-2"
              />
              <span ref={cursorRef} className="text-emerald-400">█</span>
              <p ref={subHeaderRef} className="text-gray-500 text-sm">
                My journey in commits
              </p>
            </header>
          </div>

          <div ref={commitsRef} className="grid gap-2">
            {commits.map((commit) => (
              <AnimatedDetails key={commit.hash} commit={commit} />
            ))}
          </div>
        </div>
      </div>
    </>
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

  return (
    <details ref={detailsRef}>
      <summary
        onClick={handleToggle}
        className={clsx(
          "grid focus:outline-none focus-visible:ring-1 md:grid-cols-[80px,10px,1fr,100px] grid-cols-[80px,10px,1fr] rounded cursor-pointer items-center gap-x-2 py-2 px-3 transition-colors hover:bg-white/5",
          {
            "focus-visible:ring-emerald-400": commit.scope === "career",
            "focus-visible:ring-yellow-400": commit.scope === "education",
            "focus-visible:ring-orange-400": commit.scope === "research",
            "focus-visible:ring-blue-400": commit.scope === "fix",
            "focus-visible:ring-purple-400": commit.scope === "root",
          }
        )}
      >
        <span className="text-gray-500 w-14 shrink-0 text-xs sm:w-20 self-start md:self-auto md:mt-0 mt-1 sm:text-sm">
          {commit.hash}
        </span>
        <span
          className={clsx("relative text-lg shrink-0 leading-none self-start", {
            "text-emerald-400": commit.scope === "career",
            "text-yellow-400": commit.scope === "education",
            "text-orange-400": commit.scope === "research",
            "text-blue-400": commit.scope === "fix",
            "text-purple-400": commit.scope === "root",
          })}
        >
          ∗
        </span>
        <span className="flex items-start md:flex-row flex-col md:gap-2">
          <span
            className={clsx("shrink-0 font-semibold", {
              "text-emerald-400": commit.scope === "career",
              "text-yellow-400": commit.scope === "education",
              "text-orange-400": commit.scope === "research",
              "text-blue-400": commit.scope === "fix",
              "text-purple-400": commit.scope === "root",
            })}
          >
            {commit.type} ({commit.scope}):
          </span>
          <span className="text-gray-300">{commit.message}</span>
        </span>
        <span className="text-gray-500 shrink-0 text-xs col-start-3 md:mt-0 mt-1 md:col-start-4 md:text-right">
          {commit.date}
        </span>
      </summary>

      <div
        ref={contentRef}
        className="grid gap-2 pt-1 pb-2 grid-cols-[80px,10px,1fr] md:grid-cols-[80px,10px,1fr,100px] overflow-hidden"
      >
        <div className="col-start-3 relative">
          {commit.details.map((detail) => (
            <p
              key={detail}
              className={clsx("text-sm", {
                "text-emerald-400": detail.startsWith("+"),
                "text-red-400": detail.startsWith("-"),
                "text-gray-400": !detail.startsWith("+") && !detail.startsWith("-"),
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

export default TimelinePage