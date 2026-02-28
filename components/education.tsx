"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2021 -- 2025",
    details: [
      "GPA: 3.8 / 4.0",
      "Dean's List -- All Semesters",
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Distributed Systems, Software Engineering, Computer Networks",
    ],
  },
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Meta Front-End Developer Certificate",
]

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-32">
          {/* Education */}
          <div className="flex-1">
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
                Education
              </motion.h2>
            </div>

            <div className="mt-12">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.15,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="border-t border-border pt-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3
                        className="text-foreground"
                        style={{
                          fontFamily: "var(--font-dm-serif)",
                          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                          lineHeight: 1.3,
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="mt-2 font-mono text-sm tracking-wide text-muted-foreground">
                        {edu.school}
                      </p>
                    </div>
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase md:text-right">
                      {edu.period}
                    </p>
                  </div>
                  <ul className="mt-6 flex flex-col gap-3">
                    {edu.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:w-[360px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="mb-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Certifications
              </p>
              <div className="flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-foreground/10 py-3 pl-6 transition-colors hover:border-foreground/30"
                  >
                    <p className="text-sm text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="mt-16"
            >
              <p className="mb-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Interests
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Open Source",
                  "System Design",
                  "Performance",
                  "Developer Tools",
                  "AI / ML",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border px-4 py-1.5 font-mono text-xs tracking-wider text-foreground/70 transition-colors hover:border-foreground/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
