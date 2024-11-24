'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import useThemeSwitcher from './lib/use-theme-switcher'
import { Button } from '@/components/ui/button'

export default function ThemeSwitcher() {
  const { theme, changeColor, changeMode } = useThemeSwitcher()

  return (
    <div className="fixed bottom-6 right-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Customize</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <Label>Colors</Label>
              <RadioGroup value={theme.color}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="violet"
                    id="violet"
                    onClick={() => {
                      changeColor('violet')
                    }}
                  />
                  <Label htmlFor="violet" className="text-violet-500">
                    Violet
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="rose"
                    id="rose"
                    onClick={() => {
                      changeColor('rose')
                    }}
                  />
                  <Label htmlFor="rose" className="text-rose-500">
                    Rose
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="orange"
                    id="orange"
                    onClick={() => {
                      changeColor('orange')
                    }}
                  />
                  <Label htmlFor="orange" className="text-orange-500">
                    Orange
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-4">
              <Label>Mode</Label>
              <RadioGroup value={theme.mode}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="light"
                    id="light"
                    onClick={() => {
                      changeMode('light')
                    }}
                  />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="dark"
                    id="dark"
                    onClick={() => changeMode('dark')}
                  />
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
