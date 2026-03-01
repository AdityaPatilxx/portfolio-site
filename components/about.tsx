"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const capabilities = [
  "React / Next.js",
  "Node.js / Express",
  "TypeScript",
  "PostgreSQL / MongoDB",
  "AWS / Docker / CI-CD",
  "GraphQL / REST APIs",
  "System Design",
  "Python / Go",
  "Tailwind CSS",
  "Git / GitHub Actions",
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const imageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="flex flex-col gap-16 md:flex-row md:gap-24 lg:gap-32">
          {/* Left: Image with parallax */}
          <div className="flex-1" ref={imageRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative overflow-hidden"
            >
              <motion.div style={{ y: imageY }}>
                <div 
                  className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-secondary"
                  style={{
                    background: "linear-gradient(135deg, var(--card) 0%, var(--background) 100%)",
                  }}
                >
                  {/* Pattern Overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-30"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  <span
                    className="relative z-10 text-muted-foreground/50 mix-blend-difference"
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      fontSize: "clamp(2rem, 4vw, 5rem)",
                    }}
                  >
                    Portrait
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-1 flex-col justify-center">
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
                About
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                I&apos;m a recent CS graduate and full-stack developer with
                hands-on experience building production-ready web applications
                through internships and freelance work. I love owning the entire
                stack -- from database design to polished user interfaces.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                I care deeply about clean code, thoughtful architecture, and
                shipping features that actually solve problems. Currently
                seeking a full-time role where I can grow alongside a strong
                engineering team and contribute from day one.
              </p>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mt-16"
            >
              <p className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border px-5 py-2 font-mono text-xs tracking-wider text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
                  >
                    {cap}
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
