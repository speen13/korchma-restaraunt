'use client'

import iceCream from '../../public/images/pexels-melda-besir-1462737295-26898131.jpg'
import mangal from '../../public/images/pexels-samerdaboul-2233729.jpg'
import kitchen from '../../public/images/pexels-naimbic-2291347.jpg'
import bankets from '../../public/images/pexels-askar-abayev-5638333.jpg'
import lanch from '../../public/images/pexels-ella-olsson-572949-1640777.jpg'
import bar from '../../public/images/pexels-mart-production-7269212.jpg'
import sweets from '../../public/images/pexels-raudys-808941.jpg'
import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {useMediaQuery} from "@/app/hooks/use-media-query";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
  IceCreamBowlIcon,
  IceCreamCone,
  LucideIceCreamBowl,
  MenuIcon,
  NotebookText,
  ReceiptPoundSterlingIcon
} from "lucide-react";

const dataMenu = [{
  name:'Мангал Меню',
  image: mangal,
  link: 'https://korchmarest.ps.me/category/39',
  btn: 'Блюда на мангалі включають в себе найрізніманітніші страви від мʼяса і овочів до риби'
},
  {
    name:'Банкет Меню',
    image: bankets,
    link: 'https://korchmarest.ps.me/category/33',
    btn: 'Страви для банкету які не залишать вас на одинці'
  }, {
  name:'Ланч',
  image: lanch,
  link: 'https://korchmarest.ps.me/category/36',
  btn: 'Комплексні обіди завжди яскраві та улюблені'
  }, {
  name:'Солодощі',
  image: sweets,
  link: 'https://korchmarest.ps.me/category/40',
  btn: 'Солодощі це емоції нашого життя'
  }, {
  name:'Морозиво',
  image: iceCream,
  link: 'https://korchmarest.ps.me/category/41',
  btn: 'Морозиво допоможе охолодити та повернутися у дитинство'
  }, {
  name:'Кухня',
  image: kitchen,
  link: 'https://korchmarest.ps.me/category/1',
  btn: 'Страви Української та Европейскої кухні'
  }, {
  name:'Бар Меню',
  image: bar,
  link: 'https://korchmarest.ps.me/category/2',
  btn: 'Безалкогольні напої соки та компоти'
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
                  <Image alt='photo' width={700} className='rounded-sm' height={530} src={data.image}/>

                  <div className='m-auto'>

                    <h4 className=''>{data.btn}</h4>
                    <NotebookText size={50} className='m-auto text-primary animate-bounce'/>
                  </div>
                  <Button className='w-1/2 md:text-3xl mt-4'>
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