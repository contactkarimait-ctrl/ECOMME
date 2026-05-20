"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Loader2, Truck } from "lucide-react"

const cities = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
  "Safi",
  "Mohammedia",
  "El Jadida",
  "Béni Mellal",
  "Nador",
  "Autre",
]

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || ""

export function OrderForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [quantity, setQuantity] = useState("1")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            date: new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" }),
            name: data.name,
            phone: data.phone,
            city: data.city,
            address: data.address,
            quantity,
            total: `${45 * parseInt(quantity)} Dhs`,
          }),
        })
      }

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="commander" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg rounded-2xl border border-border/50 bg-card p-10 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h3 className="text-2xl font-bold">Commande envoyée !</h3>
            <p className="mt-3 text-muted-foreground">
              Merci pour votre commande. Nous vous contacterons par téléphone
              pour confirmer la livraison.
            </p>
            <Button
              className="mt-6"
              onClick={() => setStatus("idle")}
              variant="outline"
            >
              Passer une autre commande
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="commander" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Commander maintenant
            </h2>
            <p className="mt-3 text-muted-foreground">
              Paiement à la livraison — Remplissez le formulaire ci-dessous
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
            {status === "error" && (
              <div className="mb-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" name="name" placeholder="Votre nom et prénom" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="06 XX XX XX XX"
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Select name="city" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse complète</Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Quartier, rue, numéro..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantité</Label>
                <Select value={quantity} onValueChange={(v) => v && setQuantity(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "pièce" : "pièces"} — {45 * n} Dhs
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg bg-accent/30 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Prix unitaire</span>
                  <span className="font-medium">45 Dhs</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {45 * parseInt(quantity)} Dhs
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-base font-semibold"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Truck className="mr-2 h-4 w-4" />
                    Commander — {45 * parseInt(quantity)} Dhs
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Nous vous appellerons pour confirmer votre commande avant
                l'expédition.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
