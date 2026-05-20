import { Check, Package, Ruler, Sparkles } from "lucide-react"

const features = [
  "6 compartiments transparents pour organiser vos épices",
  "Design compact et élégant qui s'adapte à toute cuisine",
  "Facile à utiliser et facile à nettoyer",
  "Boîte transparente pour voir l'assaisonnement sans ouvrir",
  "6 petites boîtes incluses dans chaque ensemble",
]

const specs = [
  { icon: Package, label: "Contenu", value: "6 pots à épices + organisateur" },
  { icon: Ruler, label: "Matériau", value: "Plastique transparent de qualité" },
  { icon: Sparkles, label: "Utilisation", value: "Épices, condiments, herbes, baharat" },
]

export function ProductDetails() {
  return (
    <section id="produit" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Boîte à Épices Organisateur 6 en 1
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-primary">45 Dhs</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-4 text-xl font-semibold">Caractéristiques</h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 bg-card p-5 text-center shadow-sm"
              >
                <spec.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-muted-foreground">
                  {spec.label}
                </p>
                <p className="mt-1 text-sm font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-accent/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              La boîte transparente vous permet de choisir l'assaisonnement
              sans avoir à tous les sortir. Maintenez le bon ordre dans votre
              cuisine :)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
