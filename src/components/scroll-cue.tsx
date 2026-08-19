import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PiCaretDown } from "react-icons/pi"

import { lightHaptic, prefersReducedMotion, scrollToSection } from "@utils"

gsap.registerPlugin(ScrollTrigger)

export interface ScrollCueProps {
  /** id of the section to travel to */
  targetId: string
  /** short mono label that sits on the rule */
  label?: string
  ariaLabel: string
  /** hold the reveal back, e.g. until a hero intro has settled */
  revealDelay?: number
}

/**
 * The boundary between two stacked sections, doubling as the invitation to cross
 * it: a hairline rule that breaks around a mono label. Sitting on the seam keeps
 * it clear of a section's crowded middle, and the full-width rule reads as
 * structure rather than a floating ornament.
 */
const ScrollCue: React.FC<ScrollCueProps> = ({
  targetId,
  label = "scroll",
  ariaLabel,
  revealDelay = 0,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const leftRuleRef = useRef<HTMLSpanElement | null>(null)
  const rightRuleRef = useRef<HTMLSpanElement | null>(null)
  const caretRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // The rule draws itself outward from the label as the seam comes into
      // view — every instance animates where it is read, not on page load.
      gsap.from([leftRuleRef.current, rightRuleRef.current], {
        scaleX: 0,
        duration: 0.9,
        delay: revealDelay,
        ease: "power2.out",
        // Hand the inline transform back afterwards so nothing is left scaled
        // to zero if the tween is ever interrupted.
        clearProps: "transform",
        scrollTrigger: { trigger: rootRef.current, start: "top 95%" },
      })

      // A slow drip downwards — the only moving part, and it rests between beats.
      gsap
        .timeline({ repeat: -1, repeatDelay: 2.4, delay: revealDelay + 0.9 })
        .to(caretRef.current, { y: 4, duration: 0.5, ease: "power1.inOut" })
        .to(caretRef.current, { y: 0, duration: 0.5, ease: "power1.inOut" })

      // The caret invites you downwards while the seam sits low in the viewport,
      // then retires as you scroll past it. Relative to the cue, so it works
      // wherever on the page the cue happens to sit.
      gsap.to(caretRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 0.3,
        },
      })
    },
    { scope: rootRef }
  )

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    lightHaptic()

    if (scrollToSection(targetId)) event.preventDefault()
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
