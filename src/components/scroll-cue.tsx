import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { lightHaptic } from "@utils"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export interface ScrollCueProps {
  /** id of the section to travel to */
  targetId: string
  /** short mono label above the hairline */
  label?: string
  ariaLabel: string
}

/**
 * A hairline with a light travelling down it — quieter than a bouncing arrow,
 * and it reads like a cursor dropping into the terminal section below.
 */
const ScrollCue: React.FC<ScrollCueProps> = ({
  targetId,
  label = "scroll",
  ariaLabel,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const pulseRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // Arrive after the hero intro has settled.
      gsap.from(linkRef.current, {
        autoAlpha: 0,
        y: -8,
        duration: 0.6,
        delay: 1.6,
        ease: "power2.out",
      })

      gsap
        .timeline({ repeat: -1, repeatDelay: 1, delay: 2.2 })
        .fromTo(
          pulseRef.current,
          { y: -18, autoAlpha: 0 },
          { y: 2, autoAlpha: 1, duration: 0.45, ease: "power1.out" }
        )
        .to(pulseRef.current, {
          y: 56,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power2.in",
        })

      // The cue is only useful before you start reading, so retire it as the
      // page moves rather than leaving it looping over the section below.
      gsap.to(rootRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { start: 0, end: 260, scrub: 0.3 },
      })
    },
    { scope: rootRef }
  )

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    lightHaptic()

    const target = document.getElementById(targetId)

    // No JS-driven travel for reduced motion — the native anchor jump is the
    // accessible behaviour there.
    if (!target || prefersReducedMotion()) return

    event.preventDefault()

    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    // CSS smooth scrolling fights a tweened scroll position, so hand the
    // travel over to GSAP for the duration of the tween.
    root.style.scrollBehavior = "auto"

    const restore = () => {
      root.style.scrollBehavior = previousBehavior
    }

    const distance = Math.abs(target.getBoundingClientRect().top)

    gsap.to(window, {
      scrollTo: { y: target, offsetY: 32, autoKill: true },
      duration: gsap.utils.clamp(0.9, 1.6, distance / 900),
      ease: "power2.inOut",
      onInterrupt: restore,
      onComplete: () => {
        restore()
        // Keep keyboard and screen-reader position in step with the visual move.
        target.setAttribute("tabindex", "-1")
        target.focus({ preventScroll: true })
        window.history.replaceState(null, "", `#${targetId}`)
      },
    })
  }

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block"
    >
      <a
        ref={linkRef}
        href={`#${targetId}`}
        onClick={handleClick}
        aria-label={ariaLabel}
        className="pointer-events-auto flex flex-col items-center gap-3 rounded-md px-6 pb-1 pt-3 text-gray-600 no-underline transition-colors duration-300 hover:text-emerald-400 hover:no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400/60"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          {label}
        </span>

        <span
          aria-hidden="true"
          className="relative block h-14 w-px overflow-hidden bg-gradient-to-b from-current to-transparent opacity-40"
        >
          <span
            ref={pulseRef}
            className="absolute left-0 top-0 block h-4 w-px bg-current shadow-[0_0_6px_currentColor]"
          />
        </span>
      </a>
    </div>
  )
}

export default ScrollCue
