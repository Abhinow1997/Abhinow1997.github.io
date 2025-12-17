import React, { useEffect, useState } from "react"

import GitHubCalendar from "react-github-calendar"
import { Tooltip as ReactTooltip } from "react-tooltip"

import { Projects, SEO } from "@components"

const WorkPage: React.FC = () => {
  const [monthsToShow, setMonthsToShow] = useState(12)

  useEffect(() => {
    const calculateMonths = () => {
      const width = window.innerWidth
      const padding = 32 // Account for page padding
      const availableWidth = width - padding
      const monthWidth = 90 // Approx width per month

      // Calculate how many months can fit, max 12
      const months = Math.floor(availableWidth / monthWidth)
      return Math.min(Math.max(months, 1), 12)
    }

    const updateMonths = () => {
      setMonthsToShow(calculateMonths())
    }

    updateMonths()
    window.addEventListener("resize", updateMonths)

    return () => window.removeEventListener("resize", updateMonths)
  }, [])

  return (
    <>
      <SEO title="Projects" />
      
      {/* Black Background - Matching Homepage */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="min-h-[calc(100vh-216px)] px-4 py-8">
        {/* GitHub Contribution Calendar Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-emerald-400">
            GitHub Activity
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar
              username="Abhinow1997"
              fontSize={16}
              blockSize={14}
              hideColorLegend
              hideTotalCount
              transformData={(data) => {
                if (monthsToShow < 12) {
                  const today = new Date()
                  const cutoffDate = new Date()
                  cutoffDate.setMonth(cutoffDate.getMonth() - monthsToShow)

                  // Find the Sunday on or before the cutoff date
                  const startSunday = new Date(cutoffDate)
                  startSunday.setDate(cutoffDate.getDate() - cutoffDate.getDay())

                  // Find the Saturday after today (end of current week)
                  const endSaturday = new Date(today)
                  endSaturday.setDate(today.getDate() + (6 - today.getDay()))

                  return data.filter((day) => {
                    const date = new Date(day.date)
                    return date >= startSunday && date <= endSaturday
                  })
                }
                return data
              }}
            >
              <ReactTooltip delayShow={10} className="custom-tooltip" />
            </GitHubCalendar>
          </div>
        </div>

        {/* Projects Section */}
        <Projects />
      </div>
    </>
  )
}

export default WorkPage