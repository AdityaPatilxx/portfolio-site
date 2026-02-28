"use client"

import { motion, type Variants } from "framer-motion"

const headlineWords = ["FULL", "STACK", "DEVELOPER"]

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.8 + i * 0.15,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end px-6 pb-16 md:px-12 lg:px-20">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />

      {/* Top info line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-32 left-6 md:left-12 lg:left-20"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Based in New York
        </p>
        <p className="mt-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Open to Opportunities
        </p>
      </motion.div>

      {/* Year and scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-32 right-6 text-right md:right-12 lg:right-20"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Portfolio 2026
        </p>
      </motion.div>

      {/* Main Headline */}
      <div className="relative max-w-[1800px]">
        <h1 className="flex flex-wrap gap-x-5 gap-y-0 md:gap-x-8">
          {headlineWords.map((word, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-foreground"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(3rem, 10vw, 11rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <p className="max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
            Recent CS graduate building end-to-end web applications -- from
            pixel-perfect frontends to scalable backend architectures.
          </p>
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-7 items-start justify-center rounded-full border border-foreground/20 pt-2"
            >
              <motion.div className="h-1.5 w-0.5 rounded-full bg-foreground" />
            </motion.div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal line separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: [0.23, 1, 0.32, 1] }}
        className="mt-12 h-px w-full origin-left bg-border"
      />
    </section>
  )
}
