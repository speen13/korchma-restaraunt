"use client"

import { IceCream2Icon} from "lucide-react";


export default function MenuTitle() {
  return (
    <h4 className='flex items-center'>
      <IceCream2Icon size={40} className='animate-bounce text-primary'/>
      <span className=' '>К</span>ОРЧМ<span className='text-red-600 transform rotate-180'>A</span>
    </h4>
  )
}