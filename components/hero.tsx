import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Nouveau
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Boîte à Épices{" "}
              <span className="text-primary">Organisateur 6 en 1</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Garnez votre cuisine bien organisée avec notre boîte à épices
              transparente à 6 compartiments. Pratique, élégante et facile à
              nettoyer.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#commander"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
              >
                Commander maintenant — 45 Dhs
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Livraison partout au Maroc
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Paiement à la livraison
              </span>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-xl">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Vidéo du produit
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Intégrer Mux / Cloudflare Stream ici
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
