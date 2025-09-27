"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex P.",
    quote:
      "SkyGuard replaced our roof after a hailstorm—fast, professional, and our bills are lower with the cool roof.",
  },
  {
    name: "Jordan R.",
    quote: "Great warranty and the inspection process gave us peace of mind before storm season.",
  },
  {
    name: "Taylor S.",
    quote: "Solar-ready install was seamless. The team really knows their stuff.",
  },
]

export default function Testimonials() {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-4 text-accent" aria-hidden />
                    ))}
                    <span className="sr-only">5 star rating</span>
                  </div>
                  <p className="mt-3 text-pretty text-sm text-muted-foreground">“{t.quote}”</p>
                  <div className="mt-auto pt-4 flex items-center gap-3">
                    <Image src="/placeholder-user.jpg" alt="" width={32} height={32} className="rounded-full" />
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
