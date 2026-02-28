"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2025 -- Present",
    type: "Contract",
    description:
      "Building custom web applications for startups and small businesses. Delivering end-to-end solutions from architecture planning to deployment, working with React, Next.js, Node.js, and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    role: "Software Engineer Intern",
    company: "Company Name",
    period: "Summer 2025",
    type: "Internship",
    description:
      "Developed and shipped features for the core product platform. Built RESTful APIs, integrated third-party services, and improved database query performance by 40% through indexing and query optimization.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Company Name",
    period: "Summer 2024",
    type: "Internship",
    description:
      "Collaborated with the design team to implement responsive UI components and interactive features. Migrated legacy jQuery code to React, reducing bundle size by 30%.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Web Developer Intern",
    company: "Company Name",
    period: "Summer 2023",
    type: "Internship",
    description:
      "First engineering role. Built internal tools and dashboards, wrote unit tests, and participated in code reviews. Gained exposure to agile workflows and CI/CD pipelines.",
    tech: ["JavaScript", "Express", "MySQL", "Git"],
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="text-foreground"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2rem, 5vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              Experience
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-sm font-mono text-xs leading-relaxed text-muted-foreground"
          >
            1+ year of professional experience across internships, freelance, and personal projects.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 h-px w-full origin-left bg-border"
        />

        {/* Experience Items */}
        <div className="mt-0">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[number]
  index: number
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group border-b border-border py-10 transition-colors hover:bg-foreground/[0.02] md:py-14"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
        {/* Left: Role & Company */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h3
              className="text-foreground"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                lineHeight: 1.2,
              }}
            >
              {experience.role}
            </h3>
            <span className="rounded-full border border-border px-3 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              {experience.type}
            </span>
          </div>
          <p className="mt-2 font-mono text-sm tracking-wide text-muted-foreground">
            {experience.company}
          </p>
        </div>

        {/* Center: Description */}
        <div className="max-w-md flex-1">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {experience.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-foreground/5 px-3 py-1 font-mono text-[10px] tracking-wider text-foreground/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Period */}
        <div className="md:text-right">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {experience.period}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
