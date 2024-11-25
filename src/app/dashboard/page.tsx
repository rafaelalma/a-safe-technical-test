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
import { requireAuth } from '../lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

type Props = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

export default async function Page(props: Props) {
  await requireAuth()

  const searchParams = props.searchParams

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
        <AllInvoices searchParams={searchParams} />
      </Suspense>
    </>
  )
}
