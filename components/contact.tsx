"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
  { label: "Dev.to", href: "#" },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-20"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="h-px w-full bg-border" />

        <div className="flex flex-col gap-16 pt-24 md:flex-row md:justify-between md:gap-24">
          {/* Left */}
          <div className="flex-1">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="text-foreground"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                  lineHeight: 1.05,
                }}
              >
                Get in
                <br />
                touch
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 max-w-md font-mono text-sm leading-relaxed text-muted-foreground"
            >
              Looking for a full-time role or have a project in mind?
              I&apos;d love to connect -- whether it&apos;s a team opportunity
              or a freelance collaboration.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              href="mailto:hello@alexrivera.dev"
              className="mt-8 inline-block font-mono text-lg text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              data-cursor="pointer"
            >
              hello@alexrivera.dev
            </motion.a>
          </div>

          {/* Right: Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Socials
            </p>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex items-center gap-4 font-mono text-sm text-foreground transition-colors hover:text-muted-foreground"
                data-cursor="pointer"
              >
                <span className="inline-block h-px w-4 bg-foreground transition-all duration-300 group-hover:w-8" />
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
