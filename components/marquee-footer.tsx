"use client"

import { motion } from "framer-motion"

const marqueeText = "OPEN TO WORK"
const separator = " \u2014 "

export function MarqueeFooter() {
  const repeatedText = Array(8)
    .fill(`${marqueeText}${separator}`)
    .join("")

  return (
    <footer className="relative overflow-hidden border-t border-border py-8">
      <div className="flex">
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex shrink-0 items-center whitespace-nowrap"
        >
          <span
            className="text-foreground/20"
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              lineHeight: 1,
            }}
          >
            {repeatedText}
          </span>
        </motion.div>
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex shrink-0 items-center whitespace-nowrap"
        >
          <span
            className="text-foreground/20"
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              lineHeight: 1,
            }}
          >
            {repeatedText}
          </span>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 pt-8 md:px-12 lg:px-20">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          &copy; 2026
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          ALEX RIVERA
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  )
}
