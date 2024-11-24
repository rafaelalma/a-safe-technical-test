import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton() {
  return <Skeleton className="w-full h-[122px]" />
}

export function OverviewSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}

export function RevenueChartSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-[200px] h-[24px]" />
      <div className="self-center sm:hidden">
        <Skeleton className="w-[272px] h-[180px]" />
      </div>
      <div className="self-center hidden sm:block">
        <Skeleton className="w-[640px] h-[400px]" />
      </div>
    </div>
  )
}

export function RecentInvoicesSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-[200px] h-[24px]" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Skeleton className="w-full h-[200px]" />
        <Skeleton className="w-full h-[200px]" />
        <Skeleton className="w-full h-[200px]" />
      </div>
    </div>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <OverviewSkeleton />
      <RevenueChartSkeleton />
      <RecentInvoicesSkeleton />
    </div>
  )
}
