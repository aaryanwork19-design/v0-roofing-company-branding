"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const phrases = ["Storm-Resistant.", "Energy-Efficient.", "Future-Ready."]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Background “storm to sun” motion via subtle accent overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-accent/0 animate-[pulse_6s_ease-in-out_infinite]" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-pretty text-4xl md:text-6xl font-bold tracking-tight">
            Roofing built to weather any storm
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We specialize in impact-resistant shingles, cool roofing, and solar-ready designs. Protect your home and
            lower your energy bills—backed by our Lifetime Roof Warranty.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground">Book Free Inspection</Button>
            <Button variant="outline" className="border-input bg-transparent">
              See Our Work
            </Button>
          </div>

          <div className="mt-8">
            <span className="text-sm uppercase tracking-wide text-muted-foreground">Why SkyGuard?</span>
            <div className="mt-2 h-10 inline-flex items-center rounded px-2">
              <span className="text-2xl md:text-3xl font-semibold">{phrases[index]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
