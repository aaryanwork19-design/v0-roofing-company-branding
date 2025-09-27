import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import USPWarranty from "@/components/usp-warranty"
import Testimonials from "@/components/testimonials"
import CTABanner from "@/components/cta-banner"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/placeholder-logo.png" width={36} height={36} alt="SkyGuard Logo" className="rounded" />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">SkyGuard Roofing Solutions</span>
              <span className="text-sm text-muted-foreground">{"“Protecting your home, one roof at a time.”"}</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" className="text-foreground">
              Services
            </Button>
            <Button variant="ghost" className="text-foreground">
              Warranty
            </Button>
            <Button className="bg-primary text-primary-foreground">Book Free Inspection</Button>
          </div>
        </div>
      </header>

      <Hero />

      <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-pretty text-3xl md:text-4xl font-semibold mb-6">
          Roofing services built for storms and savings
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Residential roofing specialists in storm-prone regions. We install asphalt, metal, tile, and composite,
          integrate solar, perform storm damage repairs, inspections, and reflective cool-roof systems.
        </p>
        <ServicesGrid />
      </section>

      <section id="warranty" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <USPWarranty />
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-pretty text-3xl md:text-4xl font-semibold mb-6">Homeowners trust SkyGuard</h2>
        <Testimonials />
      </section>

      <CTABanner />

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkyGuard Roofing Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="size-4 text-primary" aria-hidden />
            <span className="text-muted-foreground">Licensed, bonded, and insured</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
