import { NextResponse } from "next/server"

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, city, address, quantity, total } = body

    if (!name || !phone || !city || !address) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    if (GOOGLE_SHEET_URL) {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" }),
          name,
          phone,
          city,
          address,
          quantity,
          total: `${total} Dhs`,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur lors du traitement de la commande" },
      { status: 500 }
    )
  }
}
