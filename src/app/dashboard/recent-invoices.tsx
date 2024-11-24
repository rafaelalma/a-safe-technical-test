import Link from 'next/link'
import { fetchRecentInvoices } from '../lib/data'

export default async function RecentInvoices() {
  const recentInvoices = await fetchRecentInvoices()

  return (
    <section className="flex flex-col gap-4">
      <h2>Recent Invoices</h2>
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {recentInvoices.map((recentInvoice) => (
          <li
            key={recentInvoice.id}
            className="border border-border rounded-md"
          >
            <article>
              <p className="px-4 py-2 border-b border-border">
                <strong>Client:</strong> {recentInvoice.name}
              </p>
              <p className="px-4 py-2 border-b border-border">
                <strong>Amount:</strong> {recentInvoice.amount}
              </p>
              <p className="px-4 py-2 border-b border-border">
                <strong>Due Date:</strong> {recentInvoice.due_date}
              </p>
              <p className="px-4 py-2 border-b border-border">
                <strong>Status:</strong> {recentInvoice.status}
              </p>
              <p className="px-4 py-2">
                <Link
                  href={`/invoices/${recentInvoice.id}`}
                  className="text-primary"
                >
                  View Invoice
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
