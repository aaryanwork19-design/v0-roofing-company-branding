import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Shield } from "lucide-react"

export default function USPWarranty() {
  return (
    <div className="rounded-lg border p-6 md:p-8 bg-card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2">
            <Shield className="size-5 text-primary" aria-hidden />
            <h3 className="text-2xl font-semibold">Lifetime Roof Warranty Program</h3>
          </div>
          <p className="mt-2 text-muted-foreground">
            We stand behind every install with repairs and checkups every 2 years.
          </p>
        </div>
        <Badge className="bg-accent text-accent-foreground">Lifetime Warranty</Badge>
      </div>

      {/* Animated 2-year checkups timeline */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {["Install", "Year 2 Checkup", "Year 4 Checkup", "Year 6 Checkup"].map((label, i) => (
          <div key={label} className="relative">
            <div className="h-2 rounded bg-primary/15 overflow-hidden">
              <div
                className="h-full bg-primary animate-[shimmer_2.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 250}ms` }}
              />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-secondary" aria-hidden />
              <span className="text-sm">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
