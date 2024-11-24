import { Suspense } from 'react'
import { fetchFilteredInvoicesPages } from '../lib/data'
import Search from '../ui/search'
import InvoicesTable from './invoices-table'
import { InvoicesTableSkeleton } from './skeletons'
import CustomPagination from '../ui/custom-pagination'

type Props = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchFilteredInvoicesPages(query)

  return (
    <>
      <h1 className="sr-only">Invoices</h1>
      <Search placeholder="Search Invoices..." />

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>

      <CustomPagination totalPages={totalPages} />
    </>
  )
}
