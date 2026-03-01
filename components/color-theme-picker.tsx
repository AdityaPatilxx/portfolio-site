"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette } from "lucide-react"
import { useColorTheme, type ColorTheme } from "@/hooks/use-color-theme"

const themes: { id: ColorTheme; label: string; colors: string[] }[] = [
  { id: "monochrome", label: "Monochrome", colors: ["#fafafa", "#0a0a0a"] },
  { id: "navy", label: "Navy", colors: ["#F5D042", "#0A174E"] },
  { id: "teal", label: "Teal", colors: ["#F0EDCC", "#02343F"] },
]

export function ColorThemePicker() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { colorTheme, setColorTheme } = useColorTheme()
  const pickerRef = React.useRef<HTMLDivElement>(null)

  // Close when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={pickerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-transparent transition-colors hover:bg-foreground/5"
        aria-label="Select Color Theme"
      >
        <Palette className="h-[1.1rem] w-[1.1rem] text-foreground" strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-xl"
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setColorTheme(theme.id)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted ${
                  colorTheme === theme.id ? "bg-muted font-medium" : "text-muted-foreground"
                }`}
              >
                <span>{theme.label}</span>
                <div className="flex h-4 w-4 overflow-hidden rounded-full border border-border/50">
                  <div className="h-full w-1/2" style={{ backgroundColor: theme.colors[0] }} />
                  <div className="h-full w-1/2" style={{ backgroundColor: theme.colors[1] }} />
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
