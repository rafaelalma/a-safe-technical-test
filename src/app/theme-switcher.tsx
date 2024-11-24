'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useThemeSwitcher from './lib/use-theme-switcher'

export default function ThemeSwitcher() {
  useThemeSwitcher()

  return (
    <div className="fixed bottom-6 right-6">
      <Popover>
        <PopoverTrigger className="text-primary-foreground bg-primary p-2">
          Customize
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  )
}
