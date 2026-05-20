import { Leaf, Mail, Phone, Truck } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Leaf className="h-6 w-6 text-primary" />
              <span>DailyNest</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Des produits pratiques pour organiser votre quotidien avec
              élégance.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Livraison</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Livraison partout au Maroc
              </p>
              <p>24-48h pour les grandes villes</p>
              <p>3-5 jours pour les zones reculées</p>
              <p>Paiement à la livraison (espèces)</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +212 6XX-XXXXXX
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@dailynest.ma
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DailyNest. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
