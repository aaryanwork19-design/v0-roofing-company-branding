import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Sun, Shield, Wrench } from "lucide-react"

type Service = {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
  {
    title: "Storm-Resistant Roofing",
    description: "Impact-rated shingles and metal systems designed to withstand severe weather.",
    Icon: Shield,
  },
  {
    title: "Energy-Efficient Cool Roofs",
    description: "Reflective materials reduce heat absorption to save on cooling.",
    Icon: Sun,
  },
  {
    title: "Solar-Ready Designs",
    description: "Roofs engineered for clean solar integrations and long-term performance.",
    Icon: Hammer,
  },
  {
    title: "Repair & Inspections",
    description: "Storm damage repair, leak fixes, and proactive inspection services.",
    Icon: Wrench,
  },
]

export default function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ title, description, Icon }) => (
        <div key={title} className="group perspective">
          <div className="relative h-full w-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            {/* Front */}
            <Card className="h-full backface-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <CardTitle className="text-balance">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>

            {/* Back */}
            <Card className="absolute inset-0 h-full rotate-y-180 backface-hidden border-dashed">
              <CardContent className="h-full flex items-center justify-center text-center">
                <p className="text-sm">Learn more about {title.toLowerCase()} and how it protects your home.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
