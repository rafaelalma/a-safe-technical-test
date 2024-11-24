import { Suspense } from 'react'
import Overview from './overview'
import RecentInvoices from './recent-invoices'
import RevenueChart from './revenue-chart'
import {
  OverviewSkeleton,
  RecentInvoicesSkeleton,
  RevenueChartSkeleton,
} from '../ui/skeletons'

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
    </>
  )
}
