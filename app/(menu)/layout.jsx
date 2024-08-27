"use client"

import {LightDarkToggle} from "@/components/ui/light-dark-toogle";
import {useMediaQuery} from "@/app/hooks/use-media-query";
import { useState} from "react";
import MainMenu from "@/app/(menu)/components/main-menu";
import MenuTitle from "@/app/(menu)/components/menu-title";
import {DrawerTrigger, Drawer, DrawerContent} from "@/components/ui/drawer";
import {MenuIcon} from "lucide-react";

import VisuallyHidden from "@/app/hooks/visyally-hidden";


export default function LoggedOutLayout ({children}) {

  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (




      <div className='md:grid md:grid-cols-[250px_1fr] h-screen '>
        <MainMenu className='hidden h-screen md:flex'/>
        {!isDesktop && (
          <div
            className='p-4 flex justify-between md:hidden sticky z-10 left-0 top-0 bg-background border-b border-border'>
            <MenuTitle/>

            <Drawer direction='right'

                    open={mobileMenuOpen}

                    onOpenChange={(open) => setMobileMenuOpen(open)}>

              <DrawerTrigger>
                <MenuIcon/>

              </DrawerTrigger>
               <DrawerContent onClick={() => setMobileMenuOpen(false)}>

                <MainMenu/>

              </DrawerContent>

            </Drawer>

          </div>

        )}





      <div className=''>
        {children}
      </div>
      </div>


  )
}