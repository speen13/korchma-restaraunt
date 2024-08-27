'use client'

import iceCream from '../../public/images/pexels-melda-besir-1462737295-26898131.jpg'
import mangal from '../../public/images/pexels-vitrinreklam-15388077.jpg'
import kitchen from '../../public/images/pexels-ella-olsson-572949-1640777.jpg'
import bankets from '../../public/images/banket.jpg'
import lanch from '../../public/images/pexels-ella-olsson-572949-1640777.jpg'
import bar from '../../public/images/pexels-marceloverfe-27851491.jpg'
import sweets from '../../public/images/pexels-marta-dzedyshko-1042863-2067396.jpg'
import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {useMediaQuery} from "@/app/hooks/use-media-query";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const dataMenu = [{
  name:'Мангал Меню',
  image: mangal,
  link: 'https://korchmarest.ps.me/category/39',
  btn: ''
},
  {
    name:'Банкет Меню',
    image: bankets,
    link: 'https://korchmarest.ps.me/category/33',
    btn: ''
  }, {
  name:'Ланч',
  image: lanch,
  link: 'https://korchmarest.ps.me/category/36',
  btn: ''
  }, {
  name:'Солодощі',
  image: sweets,
  link: 'https://korchmarest.ps.me/category/40',
  btn: ''
  }, {
  name:'Морозиво',
  image: iceCream,
  link: 'https://korchmarest.ps.me/category/41',
  btn: ''
  }, {
  name:'Кухня',
  image: kitchen,
  link: 'https://korchmarest.ps.me/category/1',
  btn: ''
  }, {
  name:'Бар Меню',
  image: bar,
  link: 'https://korchmarest.ps.me/category/2',
  btn: ''
  }]
export default function MainPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>

    <Carousel opts={{
      align:"start",
      loop: true,
    }} plugins={[
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter:true,
      }),
    ]} className=" m-auto max-w-screen-md">
      <CarouselContent className=''>
        {dataMenu.map((data, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=''>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
                  <Image className='' height={730}  src={data.image} />

                    <Button className='w-1/2 mt-4'>
                      <Link className='' href={data.link}>
                      {data.name}
                      </Link>
                    </Button>


                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />*/}
      {/*<CarouselNext />*/}
    </Carousel>

    </>
  )
}