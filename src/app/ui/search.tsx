'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type Props = {
  placeholder: string
}

export default function Search({ placeholder }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', '1')

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="block w-full rounded-md border border-primary py-[9px] pl-10 text-sm outline-2 placeholder:text-foreground bg-background"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}
