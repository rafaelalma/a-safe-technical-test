import { Suspense } from 'react'
import { fetchFilteredInvoicesPages } from '../lib/data'
import Search from '../ui/search'
import { InvoicesTableSkeleton } from './skeletons'
import CustomPagination from '../ui/custom-pagination'
import InvoicesTable from '../invoices-table'
import { requireAuth } from '../lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invoices',
}

type Props = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

const LIMIT = 10

export default async function Page(props: Props) {
  await requireAuth()

  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchFilteredInvoicesPages(query, LIMIT)

  return (
    <>
      <h1 className="sr-only">Invoices</h1>
      <Search placeholder="Search Invoices..." />

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} limit={LIMIT} />
      </Suspense>

      <CustomPagination totalPages={totalPages} />
    </>
  )
}
