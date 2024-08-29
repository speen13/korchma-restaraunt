"use client"



import Link from "next/link";
import {cn} from '@/lib/utils'
import MenuTitle from "@/app/(menu)/components/menu-title";
import MenuItem from "@/app/(menu)/components/menu-item";
import {LightDarkToggle} from "@/components/ui/light-dark-toogle";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {PhoneCall} from "lucide-react";

export default function MainMenu({className}) {
  return (
    <nav className={cn(' md:bg-muted overflow-auto p-4 flex flex-col', className)}>
      <header className='hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4'>
        <MenuTitle />
      </header>
      <ul className='py-4 grow'>
        <MenuItem href='/'>
          Головна
        </MenuItem>
        <MenuItem href='/contacts'>
          Де ми знаходимся
        </MenuItem>
        <MenuItem href='https://korchmarest.ps.me/'>
          Меню
        </MenuItem>
        <MenuItem href='/about-as'>
          Про нас
        </MenuItem>

        <div className='mt-8 ml-2 text-gray-500'>Ми працюємо:</div>
        <div className='ml-2 text-gray-500'>ПН-НД</div>
        <div className='ml-2 text-gray-500'>10:00-23:00</div>
        <div className='ml-2 mt-4 text-gray-500'>Зв`язатися з нами</div>
        <Link href='tel:+380932064797'>
          <div className='mt-4 ml-2 text-gray-500 inline-flex'><PhoneCall/> <span className=''>+38(093)2064797</span>
          </div>
        </Link>


      </ul>

      <footer className='flex gap-2 items-center'>
        <LightDarkToggle className='mr-auto' />
      </footer>
    </nav>
  )
}