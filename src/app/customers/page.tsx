import { fetchFilteredCustomersPages } from '../lib/data'
import { requireAuth } from '../lib/utils'
import { Metadata } from 'next'
import Search from '../ui/search'
import { Suspense } from 'react'
import CustomersTable from '../customers-table'
import { CustomersTableSkeleton } from './skeletons'
import CustomPagination from '../ui/custom-pagination'

export const metadata: Metadata = {
  title: 'Customers',
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
  const totalPages = await fetchFilteredCustomersPages(query, LIMIT)

  return (
    <>
      <h1 className="sr-only">Customers</h1>
      <Search placeholder="Search Customers..." />

      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTable query={query} currentPage={currentPage} limit={LIMIT} />
      </Suspense>

      <CustomPagination totalPages={totalPages} />
    </>
  )
}
