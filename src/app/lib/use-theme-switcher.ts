import { useEffect } from 'react'

export default function useThemeSwitcher() {
  // TODO: useSyncExternal storage with local storage to get and set theme color
  // add class to html element
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('class', 'dark violet')
  }, [])
}
