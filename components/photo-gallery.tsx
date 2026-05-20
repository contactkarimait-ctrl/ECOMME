import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const photos = [
  { id: 1, alt: "Boîte à épices - Vue principale", src: "/photos/photo-1.jpg" },
  { id: 2, alt: "Boîte à épices - Compartiments", src: "/photos/photo-2.jpg" },
  { id: 3, alt: "Boîte à épices - En utilisation", src: "/photos/photo-3.jpg" },
  { id: 4, alt: "Boîte à épices - Détail transparent", src: "/photos/photo-4.jpg" },
  { id: 5, alt: "Boîte à épices - Dans la cuisine", src: "/photos/photo-5.jpg" },
]

export function PhotoGallery() {
  return (
    <section id="photos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Découvrez en images
          </h2>
          <p className="mt-3 text-muted-foreground">
            Chaque détail compte pour organiser votre cuisine
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <svg
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">{photo.alt}</p>
                        <p className="mt-1 text-xs text-muted-foreground/60">
                          Placer dans /public{photo.src}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
