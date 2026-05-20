import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PhotoGallery } from "@/components/photo-gallery"
import { ProductDetails } from "@/components/product-details"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductDetails />
        <PhotoGallery />
        <OrderForm />
      </main>
      <Footer />
    </div>
  )
}
