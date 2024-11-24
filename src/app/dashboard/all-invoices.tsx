import Link from 'next/link'

export default async function AllInvoices() {
  return (
    <section className="flex flex-col gap-4">
      <h2>
        <Link href="/invoices" className="text-primary">
          All Invoices
        </Link>
      </h2>
    </section>
  )
}
