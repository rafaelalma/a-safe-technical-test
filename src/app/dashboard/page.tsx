import { Suspense } from 'react'
import Overview from './overview'
import RecentInvoices from './recent-invoices'
import RevenueChart from './revenue-chart'
import {
  AllInvoicesSkeleton,
  OverviewSkeleton,
  RecentInvoicesSkeleton,
  RevenueChartSkeleton,
} from './skeletons'
import AllInvoices from './all-invoices'

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Dashboard</h1>

      <Suspense fallback={<OverviewSkeleton />}>
        <Overview />
      </Suspense>

      <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart />
      </Suspense>

      <Suspense fallback={<RecentInvoicesSkeleton />}>
        <RecentInvoices />
      </Suspense>

      <Suspense fallback={<AllInvoicesSkeleton />}>
        <AllInvoices />
      </Suspense>
    </>
  )
}
