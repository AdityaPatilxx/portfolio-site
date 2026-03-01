"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const projects = [
  {
    title: "NexaPay",
    category: "Fintech / Full Stack",
    year: "2026",
    description: "A real-time payment processing platform built with Next.js, Go microservices, PostgreSQL, and Stripe -- handling 500K+ transactions monthly.",
    color: "linear-gradient(135deg, #1a1a2e 0%, #16222A 100%)",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
  },
  {
    title: "CloudForge",
    category: "SaaS / DevOps Platform",
    year: "2025",
    description: "An infrastructure management dashboard with CI/CD pipelines, container orchestration, and real-time monitoring. React, Node.js, Docker, and AWS.",
    color: "linear-gradient(135deg, #1a2e1a 0%, #0f2027 100%)",
    pattern: "linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)",
  },
  {
    title: "Artisan",
    category: "E-Commerce / API Architecture",
    year: "2025",
    description: "Headless commerce platform with a custom GraphQL API, inventory microservices, and a Next.js storefront serving 100K+ daily users.",
    color: "linear-gradient(135deg, #2e1a1a 0%, #200122 100%)",
    pattern: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)",
  },
  {
    title: "Synapse",
    category: "AI / Real-Time App",
    year: "2024",
    description: "Collaborative AI writing tool with WebSocket-powered real-time editing, LLM integration, and a custom CRDT engine for conflict resolution.",
    color: "linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)",
    pattern: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`group flex flex-col gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } md:items-center md:gap-16 lg:gap-24`}
    >
      {/* Image container with parallax */}
      <div className="relative flex-1 overflow-hidden">
        <motion.div style={{ y }} className="relative">
          <div
            className="relative aspect-[4/3] w-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            data-cursor="pointer"
          >
            <div
              className="group-hover:scale-105 flex h-full w-full transform items-center justify-center transition-transform duration-1000 ease-out"
              style={{ background: project.color }}
            >
              {/* Pattern Overlay */}
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-50 transition-opacity duration-1000 group-hover:opacity-100"
                style={{
                  backgroundImage: project.pattern,
                  backgroundSize: index === 0 ? "20px 20px" : index === 1 ? "40px 40px" : index === 2 ? "100% 100%" : "30px 30px",
                }}
              />
              <span
                className="relative z-10 text-foreground/30 transition-all duration-700 group-hover:text-foreground/50 group-hover:scale-110"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(3rem, 6vw, 8rem)",
                  lineHeight: 1,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/5" />
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className={`flex-1 ${isEven ? "md:pl-0" : "md:pr-0"}`}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {project.category}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h3
          className="mt-4 text-foreground transition-all duration-500 group-hover:tracking-wider"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(2rem, 4vw, 4.5rem)",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>

        <p className="mt-4 max-w-sm font-mono text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 font-mono text-xs tracking-widest text-foreground uppercase transition-all group-hover:gap-5"
          data-cursor="pointer"
        >
          View Project
          <span className="inline-block h-px w-8 bg-foreground transition-all duration-300 group-hover:w-12" />
        </a>
      </div>
    </motion.div>
  )
}

export function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section header */}
        <div className="mb-24 flex items-end justify-between md:mb-32">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={titleInView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="text-foreground"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2rem, 5vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              Selected
              <br />
              Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden font-mono text-xs tracking-widest text-muted-foreground uppercase md:block"
          >
            (04) Projects
          </motion.p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
