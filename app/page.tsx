"use client"

import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Hero } from "@/components/hero"
import { SelectedWorks } from "@/components/selected-works"
// import { Experience } from "@/components/experience"
// import { About } from "@/components/about"
// import { Education } from "@/components/education"
// import { Contact } from "@/components/contact"
import { MarqueeFooter } from "@/components/marquee-footer"

export default function Home() {
  return (
    <>
      <SmoothScroll />
      {/* <CustomCursor /> */}
      <Navigation />
      <main>
        <Hero />
        <SelectedWorks />
        {/* <Experience />
        <About />
        <Education />
        <Contact /> */}
      </main>
      <MarqueeFooter />
    </>
  )
}
