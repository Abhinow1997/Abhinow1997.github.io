import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PiCaretDown } from "react-icons/pi"

import { lightHaptic } from "@utils"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export interface ScrollCueProps {
  /** id of the section to travel to */
  targetId: string
  /** short mono label that sits on the rule */
  label?: string
  ariaLabel: string
}

/**
 * The boundary between two stacked screens, doubling as the invitation to cross
 * it: a hairline rule that breaks around a mono label. Sitting on the seam keeps
 * it clear of the hero's crowded middle, and the full-width rule reads as
 * structure rather than a floating ornament.
 */
const ScrollCue: React.FC<ScrollCueProps> = ({
  targetId,
  label = "scroll",
  ariaLabel,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const leftRuleRef = useRef<HTMLSpanElement | null>(null)
  const rightRuleRef = useRef<HTMLSpanElement | null>(null)
  const caretRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // The rule draws itself outward from the label once the hero has settled.
      gsap.from([leftRuleRef.current, rightRuleRef.current], {
        scaleX: 0,
        duration: 0.9,
        delay: 1.5,
        ease: "power2.out",
        // Hand the inline transform back afterwards so nothing is left scaled
        // to zero if the tween is ever interrupted.
        clearProps: "transform",
      })

      // A slow drip downwards — the only moving part, and it rests between beats.
      gsap
        .timeline({ repeat: -1, repeatDelay: 2.4, delay: 2.4 })
        .to(caretRef.current, { y: 4, duration: 0.5, ease: "power1.inOut" })
        .to(caretRef.current, { y: 0, duration: 0.5, ease: "power1.inOut" })

      // Once you are reading, the invitation retires and the rule stays as structure.
      gsap.to(caretRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { start: 40, end: 260, scrub: 0.3 },
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
      className="mx-auto flex w-full max-w-4xl items-center gap-4 sm:gap-6"
    >
      <span
        ref={leftRuleRef}
        aria-hidden="true"
        className="h-px flex-1 origin-right bg-gradient-to-r from-transparent to-emerald-400/25"
      />

      <a
        href={`#${targetId}`}
        onClick={handleClick}
        aria-label={ariaLabel}
        className="group flex min-h-[44px] shrink-0 items-center gap-2 rounded-md px-3 no-underline transition-colors duration-200 hover:no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400/60"
      >
        <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.2em] text-gray-400 transition-colors duration-200 group-hover:text-emerald-300">
          {label}
        </span>
        <span ref={caretRef} className="block">
          <PiCaretDown
            aria-hidden="true"
            className="h-3 w-3 text-gray-500 transition-colors duration-200 group-hover:text-emerald-300"
          />
        </span>
      </a>

      <span
        ref={rightRuleRef}
        aria-hidden="true"
        className="h-px flex-1 origin-left bg-gradient-to-l from-transparent to-emerald-400/25"
      />
    </div>
  )
}

export default ScrollCue
