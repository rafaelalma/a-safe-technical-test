import Overview from './overview'
import RecentInvoices from './recent-invoices'
import RevenueChart from './revenue-chart'

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Dashboard</h1>
      <Overview />
      <RevenueChart />
      <RecentInvoices />
    </>
  )
}
