import { ReactNode } from 'react'
import { fetchCardData } from '../lib/data'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default async function Overview() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        title="Total Invoices"
        value={numberOfInvoices}
        link={
          <Link
            href="/invoices"
            className={buttonVariants({ variant: 'default' })}
          >
            View
          </Link>
        }
      />
      <Card
        title="Collected"
        value={totalPaidInvoices}
        link={
          <Link
            href="/invoices?status=paid"
            className={buttonVariants({ variant: 'default' })}
          >
            View
          </Link>
        }
      />
      <Card
        title="Pending"
        value={totalPendingInvoices}
        link={
          <Link
            href="/invoices?status=pending"
            className={buttonVariants({ variant: 'default' })}
          >
            View
          </Link>
        }
      />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        link={
          <Link
            href="/customers"
            className={buttonVariants({ variant: 'default' })}
          >
            View
          </Link>
        }
      />
    </section>
  )
}

type CardProps = {
  title: string
  value: number | string
  link: ReactNode
}

function Card({ title, value, link }: CardProps) {
  return (
    <div className="p-6 border border-border rounded-md flex flex-col gap-2">
      <h3>
        <strong>{title}</strong>
      </h3>
      <p>{value}</p>
      <p>{link}</p>
    </div>
  )
}
