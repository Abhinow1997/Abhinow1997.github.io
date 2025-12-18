import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { SEO } from "@components"

interface Item {
  name: string
  description: string | React.ReactNode
  link?: string
}

const sections: Array<{ title: string; items: Item[] }> = [
  {
    title: "💻 Development Tools",
    items: [
      {
        name: "VS Code",
        description: "Primary code editor for Python, Scala, and SQL development",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Git",
        description: "Version control for all projects and collaboration",
        link: "https://git-scm.com/",
      },
    ],
  },
  {
    title: "🗄️ Data Engineering Stack",
    items: [
      {
        name: "Apache Spark",
        description: "Distributed data processing for large-scale ETL pipelines",
        link: "https://spark.apache.org/",
      },
      {
        name: "Apache Airflow",
        description: "Workflow orchestration and pipeline scheduling",
        link: "https://airflow.apache.org/",
      },
      {
        name: "DBT (Data Build Tool)",
        description: "Data transformation and modeling in the warehouse",
        link: "https://www.getdbt.com/",
      },
      {
        name: "Snowflake",
        description: "Cloud data warehouse for analytics workloads",
        link: "https://www.snowflake.com/",
      },
      {
        name: "Databricks",
        description: "Unified analytics platform for data engineering and ML",
        link: "https://www.databricks.com/",
      },
    ],
  },
  {
    title: "☁️ Cloud & DevOps",
    items: [
      {
        name: "AWS",
        description: "Cloud platform for S3, EC2, EMR, and more",
        link: "https://aws.amazon.com/",
      },
      {
        name: "Azure",
        description: "Microsoft cloud services for data pipelines",
        link: "https://azure.microsoft.com/",
      },
      {
        name: "Docker",
        description: "Containerization for consistent environments",
        link: "https://www.docker.com/",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD pipelines and automation",
        link: "https://github.com/features/actions",
      },
    ],
  },
  {
    title: "⚡ Productivity",
    items: [
      {
        name: "Notion",
        description: "Project management and knowledge base",
        link: "https://www.notion.so/",
      },
      {
        name: "Teams",
        description: "Team communication and collaboration",
        link: "https://teams.com/",
      },
    ],
  },
  {
    title: "🖥️ Hardware",
    items: [
      {
        name: "Predator Helios 300",
        description: "Development machines for coding and work",
      }
    ],
  },
]

const UsesPage: React.FC = () => {
  const usesRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.current, {
      y: -12,
      opacity: 0,
      ease: "power3.out",
      duration: 0.4,
    })
      .from(subHeadingRef.current, {
        y: -12,
        opacity: 0,
        ease: "power2.out",
        duration: 0.3,
      })
      .from(usesRef.current?.querySelectorAll(".section")!, {
        y: -8,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05,
        duration: 0.3,
      })
      .from(
        usesRef.current?.querySelectorAll(".section-item")!,
        {
          y: -8,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.02,
          duration: 0.3,
        },
        "<0.1"
      )
  }, [])

  return (
    <>
      <SEO title="Uses" />
      
      {/* Black Background - Matching Homepage */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="min-h-[calc(100vh-216px)] px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 ref={headingRef} className="mb-4 text-4xl font-bold text-emerald-400">
              Uses
            </h1>
            <p ref={subHeadingRef} className="text-lg leading-relaxed text-gray-400">
              Tools and technologies I use daily for data engineering, AI development, and building software.
            </p>
          </div>

          {/* Uses Content */}
          <div ref={usesRef} className="space-y-12">
            {sections.map((section, idx) => (
              <section key={idx} className="section">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="section-item">
                      <div className="group rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all duration-200 hover:border-emerald-400/50 hover:bg-gray-900/70">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2 block text-lg font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                          >
                            {item.name} →
                          </a>
                        ) : (
                          <h3 className="mb-2 text-lg font-semibold text-white">
                            {item.name}
                          </h3>
                        )}
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
            
            <p className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
              This page is updated as my tech stack evolves
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsesPage