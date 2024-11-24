'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  totalPages: number
}

export default function CustomPagination({ totalPages }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const previousIsDisabled = currentPage <= 1
  const nextIsDisabled = currentPage >= totalPages

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            prefetch
            scroll={false}
            className={
              previousIsDisabled ? 'pointer-events-none text-muted' : ''
            }
            aria-disabled={previousIsDisabled}
            tabIndex={previousIsDisabled ? -1 : undefined}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            prefetch
            scroll={false}
            className={nextIsDisabled ? 'pointer-events-none text-muted' : ''}
            aria-disabled={nextIsDisabled}
            tabIndex={nextIsDisabled ? -1 : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
