'use client'

import {useState} from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MoonIcon, SunIcon} from "lucide-react";



export function LightDarkToggle({className}) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} onClick={() => {
          setIsDarkMode((prevValue => !prevValue))
          document.body.classList.toggle('dark')
        }}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Темна тема' : 'Світла тема'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}