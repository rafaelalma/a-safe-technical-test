import { fetchCardData } from '../lib/data'

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      <Card title="Total Customers" value={numberOfCustomers} />
      <Card title="Total Invoices" value={numberOfInvoices} />
      <Card title="Collected" value={totalPaidInvoices} />
      <Card title="Pending" value={totalPendingInvoices} />
    </section>
  )
}

type CardProps = {
  title: string
  value: number | string
}

function Card({ title, value }: CardProps) {
  return (
    <div className="p-6 border border-[hsl(var(--border))]">
      <h3>
        <strong>{title}</strong>
      </h3>
      <p>{value}</p>
    </div>
  )
}
