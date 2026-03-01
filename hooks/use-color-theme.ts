"use client"

import { useEffect, useState } from "react"

export type ColorTheme = "monochrome" | "navy" | "teal"

export function useColorTheme() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("monochrome")

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem("color-theme") as ColorTheme | null
    if (saved) {
      setColorTheme(saved)
      document.documentElement.setAttribute("data-theme", saved)
    } else {
      document.documentElement.setAttribute("data-theme", "monochrome")
    }
  }, [])

  const setTheme = (theme: ColorTheme) => {
    setColorTheme(theme)
    localStorage.setItem("color-theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  return { colorTheme, setColorTheme: setTheme }
}
