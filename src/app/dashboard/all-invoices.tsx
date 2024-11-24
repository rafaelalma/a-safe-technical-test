import Link from 'next/link'
import { fetchFilteredInvoicesPages } from '../lib/data'
import InvoicesTable from '../invoices-table'
import CustomPagination from '../ui/custom-pagination'

type Props = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

const LIMIT = 5

export default async function AllInvoices(props: Props) {
  const searchParams = await props.searchParams
  const query = ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchFilteredInvoicesPages(query, LIMIT)

  return (
    <section className="flex flex-col gap-4">
      <h2>
        <Link href="/invoices" className="text-primary">
          All Invoices
        </Link>
      </h2>
      <InvoicesTable query={query} currentPage={currentPage} limit={LIMIT} />
      <CustomPagination totalPages={totalPages} />
    </section>
  )
}
