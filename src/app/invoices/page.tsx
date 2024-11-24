import Search from '../ui/search'
import InvoicesTable from './invoices-table'

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

  return (
    <>
      <h1 className="sr-only">Invoices</h1>
      <Search placeholder="Search Invoices..." />
      <InvoicesTable query={query} currentPage={currentPage} />
    </>
  )
}
