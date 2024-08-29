'use client'

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import ava from '../../../public/images/pexels-quang-nguyen-vinh-222549-2175211.jpg'
import Image from "next/image";


export default function Page() {
  return (
    <Card className=''>
      {/*<CardHeader>*/}
      {/*  Page Title*/}
      {/*</CardHeader>*/}
      <CardContent className=' mt-4'>
        <Image className='rounded-sm m-auto' width={850} height={500} href={ava} alt='photo'/>

      </CardContent>
      <CardFooter className='flex items-start mt-4'>
        <div>
          <h5 className=''>
            Ресторан "КОРЧМА" це затишний сімейний дім, який увібрав у себе найкращі традиції європейської, та
            української кухні. Затишна, доброзичлива атмосфера та гідний сервіс – це основні переваги ресторану.
            Проведення банкетів, весіль та корпоративів – це один із основних напрямків діяльності ресторану "КОРЧМА",
            яку з успіхом здійснює наш доброзичливий колектив.
          </h5>
        </div>
      </CardFooter>
    </Card>
  )
}