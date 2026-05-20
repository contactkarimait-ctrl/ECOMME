import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <Leaf className="h-6 w-6 text-primary" />
          <span>DailyNest</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#produit" className="transition-colors hover:text-primary">
            Produit
          </a>
          <a href="#photos" className="transition-colors hover:text-primary">
            Photos
          </a>
          <a href="#commander" className="transition-colors hover:text-primary">
            Commander
          </a>
        </nav>
        <a
          href="#commander"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Commander
        </a>
      </div>
    </header>
  )
}
