"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function CTABanner() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative my-4">
      <div
        className="relative mx-auto max-w-6xl px-4 py-10 md:py-12 overflow-hidden rounded-lg border"
        aria-label="Book Free Inspection"
      >
        {/* Subtle storm-to-sun background effect using accent overlay only */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 bg-accent/15 ${pulse ? "opacity-100" : "opacity-40"}`}
          aria-hidden
        />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-pretty text-2xl font-semibold">Ready for a safer, smarter roof?</h3>
            <p className="text-muted-foreground">
              Book a free inspection. We’ll assess storm risks and energy-saving opportunities.
            </p>
          </div>
          <Button size="lg" className="bg-[var(--cta)] text-[var(--cta-foreground)] hover:bg-[var(--cta)]/90">
            Book Free Inspection
          </Button>
        </div>
      </div>
    </section>
  )
}
