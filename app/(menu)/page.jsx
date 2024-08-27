'use client'



import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";


export default function MainPage() {
  return (
    <Carousel opts={{
      align:"start",
      loop: true,
    }} plugins={[
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter:true,
      }),
    ]} className="   max-w-screen-md">
      <CarouselContent className=''>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=''>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}