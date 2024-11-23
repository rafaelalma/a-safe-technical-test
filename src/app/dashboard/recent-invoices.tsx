import { fetchRecentInvoices } from '../lib/data'

export default async function RecentInvoices() {
  const recentInvoices = await fetchRecentInvoices()

  return (
    <ol>
      {recentInvoices.map((recentInvoice) => (
        <li key={recentInvoice.id}>{recentInvoice.amount}</li>
      ))}
    </ol>
  )
}
