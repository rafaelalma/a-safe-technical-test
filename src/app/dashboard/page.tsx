import CardWrapper from './cards'
import RecentInvoices from './recent-invoices'

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Dashboard</h1>
      <CardWrapper />
      <RecentInvoices />
    </>
  )
}
