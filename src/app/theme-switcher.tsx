'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import useThemeSwitcher from './lib/use-theme-switcher'

export default function ThemeSwitcher() {
  useThemeSwitcher()

  return (
    <div className="fixed bottom-6 right-6">
      <Popover>
        <PopoverTrigger className="text-primary-foreground bg-primary p-2">
          Customize
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <Label>Colors</Label>
              <RadioGroup defaultValue="violet">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="violet" id="violet" />
                  <Label htmlFor="violet" className="text-violet-500">
                    Violet
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rose" id="rose" />
                  <Label htmlFor="rose" className="text-rose-500">
                    Rose
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orange" id="orange" />
                  <Label htmlFor="orange" className="text-orange-500">
                    Orange
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-4">
              <Label>Mode</Label>
              <RadioGroup defaultValue="dark">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
