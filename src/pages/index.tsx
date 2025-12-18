import React, { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { useMediaQuery } from "usehooks-ts"
import { SEO } from "@components"
import { mediumHaptic } from "@utils"

const IndexPage: React.FC = () => {
  const imgWrapperRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const waveRef = useRef<HTMLSpanElement | null>(null)
  const roleRef = useRef<HTMLSpanElement | null>(null)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const roles = [
    { title: "Data Engineer", emoji: "📊", color: "text-emerald-400" },
    { title: "AI Engineer", emoji: "🤖", color: "text-purple-400" },
    { title: "Software Engineer", emoji: "💻", color: "text-blue-400" },
    { title: "Master's Student", emoji: "🎓", color: "text-amber-400" },
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000) 

    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(imgWrapperRef.current, {
      scale: 1.1,
      x: isDesktop ? 24 : 0,
      y: isDesktop ? 0 : -24,
      opacity: 0,
      ease: "power2.out",
      duration: 0.7,
    }).from(
      headingRef.current,
      {
        y: 20,
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
      },
      "<0.1"
    )

    if (aboutRef.current) {
      tl.from(aboutRef.current.children, {
        y: 12,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.3,
      })
    }

    if (waveRef.current) {
      const waveElement = waveRef.current
      const waveTimeline = gsap.timeline({ paused: true, repeat: -1 })

      waveTimeline
        .to(waveElement, { rotation: 20, duration: 0.15, ease: "power1.inOut" })
        .to(waveElement, { rotation: -20, duration: 0.15, ease: "power1.inOut" })
        .to(waveElement, { rotation: 20, duration: 0.15, ease: "power1.inOut" })
        .to(waveElement, { rotation: 0, duration: 0.15, ease: "power1.inOut" })

      const handleMouseEnter = () => waveTimeline.play()
      const handleMouseLeave = () => {
        waveTimeline.pause()
        gsap.to(waveElement, { rotation: 0, duration: 0.2, ease: "power1.out" })
      }

      waveElement.addEventListener("mouseenter", handleMouseEnter)
      waveElement.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        waveElement.removeEventListener("mouseenter", handleMouseEnter)
        waveElement.removeEventListener("mouseleave", handleMouseLeave)
        waveTimeline.kill()
      }
    }
  }, [])

  // Animate role change
  useEffect(() => {
    if (roleRef.current) {
      gsap.fromTo(
        roleRef.current,
        { y: 20, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
    }
  }, [currentRoleIndex])

  return (
    <>
      <SEO title="Home" />
      
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>
      
      <main className="relative flex min-h-[calc(100vh-258px)] flex-col-reverse items-center justify-center gap-12 px-4 md:min-h-[calc(100vh-216px)] md:flex-row">
        <div className="text-center md:w-2/3 md:text-left">
          <h1 ref={headingRef} className="mb-8 text-3xl font-bold text-white">
            Hey there, I'm Abhinav!{" "}
            <span
              ref={waveRef}
              className="inline-block origin-bottom-right cursor-pointer"
            >
              👋
            </span>
          </h1>
          <span className="font-semibold"> I am a ....</span>{" "}
          
          {/* Quirky Rotating Role Section */}
          <div className="mb-8 min-h-[60px]">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <span className="mr-3 text-2xl">{roles[currentRoleIndex].emoji}</span>
              <span
                ref={roleRef}
                className={`text-2xl font-bold ${roles[currentRoleIndex].color} transition-colors duration-300`}
              >
                {roles[currentRoleIndex].title}
              </span>
            </div>
            
            {/* Role indicators */}
            <div className="mb-6 flex justify-center gap-2 md:justify-start">
              {roles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoleIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentRoleIndex
                      ? "w-8 bg-emerald-400"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Switch to role ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <section
            ref={aboutRef}
            className="mb-8 text-balance text-lg tracking-wide"
          >
           <p className="mb-4 text-gray-300">
              <span className="font-semibold text-emerald-400"></span>{" "}
              From{" "}
              <OutboundLink
                href="https://www.northeastern.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline font-sans text-red-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-red-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full"
              >
                Northeastern University
              </OutboundLink>{" "}
            </p>
            
            <p className="mb-6 text-gray-300">
              Building some{" "}
              <Link
              to="/work" 
              className="relative inline font-sans text-blue-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-blue-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full">
                exciting side projects
              </Link>{" "}
              , and sharing knowledge through{" "}
              <Link
                to="/blog"
                className="relative inline font-sans text-blue-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-blue-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full"
              >
                technical writing
              </Link>{" "}
              ✍️!
            </p>
  
        
            <OutboundLink
              href="https://drive.google.com/file/d/1D0RQ3EOK2_y-hOspw3t5eveZvWbTH-cd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-gray-300 no-underline transition-colors hover:text-emerald-400 hover:no-underline"
              onClick={mediumHaptic}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-xl transition-colors group-hover:bg-emerald-400/20">
                📄
              </span>
              <span className="text-base font-medium">View Resume</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </OutboundLink>
          </section>
        </div>

        <div ref={imgWrapperRef} className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-400 opacity-20 blur-2xl"></div>
          <StaticImage
            src="../images/square.png"
            alt="Abhinav"
            placeholder="blurred"
            layout="constrained"
            width={350}
            height={350}
            className="relative rounded-lg shadow-2xl ring-2 ring-emerald-400/30"
          />
        </div>
      </main>
    </>
  )
}

export default IndexPage