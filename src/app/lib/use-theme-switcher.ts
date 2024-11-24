import { useEffect, useState } from 'react'
import { z } from 'zod'

// TODO: useSyncExternal storage with local storage to get and set theme

export default function useThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(retrieveTheme())

  useEffect(() => {
    const htmlElement = document.documentElement

    htmlElement.setAttribute('class', `${theme.color} ${theme.mode}`)

    saveTheme(theme)
  }, [theme])

  const changeColor = (newColor: Theme['color']) => {
    setTheme((prevTheme) => ({ ...prevTheme, color: newColor }))
  }

  const changeMode = (newMode: Theme['mode']) => {
    setTheme((prevTheme) => ({ ...prevTheme, mode: newMode }))
  }

  return { theme, changeColor, changeMode }
}

type Theme = z.infer<typeof ThemeSchema>
const ThemeSchema = z.object({
  color: z.enum(['violet', 'rose', 'orange']),
  mode: z.enum(['light', 'dark']),
})

const THEME_KEY = 'a-safe-technical-test-theme'

const initialTheme: Theme = {
  color: 'violet',
  mode: 'dark',
}

const retrieveTheme = (): Theme => {
  const localStorageTheme = window.localStorage.getItem(THEME_KEY)

  if (!localStorageTheme) {
    return initialTheme
  }

  const jsonParsedTheme = JSON.parse(localStorageTheme)

  const parsedTheme = ThemeSchema.parse(jsonParsedTheme)

  return parsedTheme
}

const saveTheme = (theme: Theme) => {
  window.localStorage.setItem(THEME_KEY, JSON.stringify(theme))
}
