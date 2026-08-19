import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Eased travel to an in-page section. Returns false when the caller should let
 * the browser handle the anchor natively (missing target, or reduced motion).
 */
export const scrollToSection = (targetId: string): boolean => {
  if (typeof document === "undefined") return false

  const target = document.getElementById(targetId)

  if (!target || prefersReducedMotion()) return false

  const root = document.documentElement
  const previousBehavior = root.style.scrollBehavior
  // CSS smooth scrolling fights a tweened scroll position, so hand the travel
  // over to GSAP for the duration of the tween.
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

  return true
}

const isIOS = () => {
  if (typeof window === "undefined") return false
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
  )
}

// iOS fallback: subtle audio feedback
const playTapSound = (duration: number) => {
  if (typeof window === "undefined") return
  try {
    const audioContext = new (
      window.AudioContext || (window as any).webkitAudioContext
    )()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 1000
    gainNode.gain.value = 0.01 // Very quiet

    oscillator.start()
    oscillator.stop(audioContext.currentTime + duration / 1000)
  } catch (e) {
    // Silently fail if audio context not available
  }
}

export const hapticFeedback = (pattern: number | number[] = 10) => {
  if (typeof window === "undefined") return

  // iOS doesn't support vibration API - use subtle audio feedback instead
  if (isIOS()) {
    const duration = typeof pattern === "number" ? pattern : pattern[0]
    playTapSound(duration)
    return
  }

  if ("vibrate" in navigator) {
    navigator.vibrate(pattern)
  }
}

export const lightHaptic = () => hapticFeedback(10)
export const mediumHaptic = () => hapticFeedback(20)
export const heavyHaptic = () => hapticFeedback(30)

export const titleCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\b(\w)/g, (s: string) => s.toUpperCase())
    .split(" ")[0]

export const fetchData = async <T>(url: string): Promise<T> => {
  if (typeof window === "undefined") {
    throw new Error("fetchData can only be called on the client side")
  }
  const response = await fetch(url)
  return response.json()
}
