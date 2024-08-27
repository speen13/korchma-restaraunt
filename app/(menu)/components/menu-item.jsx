'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";




export default function MenuItem({children, href}) {
  // const {onClose} = useContext(DrawerContext)
  const pathName = usePathname()
  const isActive = pathName === href
  return <li>
    <Link className={cn('block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
      isActive && 'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
    )} href={href} >
      {children}
    </Link>
  </li>
}