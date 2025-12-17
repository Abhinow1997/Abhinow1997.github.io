import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { graphql, Link } from "gatsby"
import gsap from "gsap"

import { SEO } from "@components"

export type MDXNode = {
  id: string
  excerpt: string
  frontmatter: {
    date: string
    description: string
    slug: string
    title: string
  }
}

interface BlogIndexProps {
  data: {
    allMdx: {
      nodes: MDXNode[]
    }
  }
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const postsRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.current, {
      y: -16,
      opacity: 0,
      ease: "power3.out",
      duration: 0.4,
    })

    if (postsRef.current) {
      tl.from(postsRef.current.children, {
        y: -8,
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
        duration: 0.4,
      })
    }
  }, [])

  return (
    <>
      <SEO title="Blog" />
      
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="py-8 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 ref={headingRef} className="mb-8 text-4xl font-bold text-emerald-400">
            Blog
          </h1>
          <div ref={postsRef} className="space-y-8">
            {data.allMdx.nodes.map((post) => (
              <article key={post.id}>
                <header>
                  <h2>
                    <Link
                      to={`/blog/${post.frontmatter.slug}`}
                      className="relative mb-1 text-2xl font-bold inline font-sans text-emerald-400 no-underline transition-colors duration-200 before:absolute before:bottom-0 before:h-px before:w-0 before:bg-current before:transition-all before:content-[''] hover:text-emerald-300 hover:no-underline hover:before:w-full focus:outline-none focus-visible:before:w-full"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <small className="text-gray-500">{post.frontmatter.date}</small>
                </header>
                <section>
                  <p className="mt-2 text-gray-400">{post.frontmatter.description}</p>
                </section>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
        }
      }
    }
  }
`