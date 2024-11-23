import { db } from '@vercel/postgres'
import { RecentInvoiceRaw } from './definitions'
import { capitalize, formatCurrency } from './utils'
import { format } from 'date-fns'

const client = await db.connect()

export async function fetchRecentInvoices() {
  try {
    const data = await client.sql<RecentInvoiceRaw>`
        SELECT invoices.id, customers.name, invoices.amount, invoices.due_date, invoices.status, invoices.issued_date
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.issued_date DESC
        LIMIT 3`

    const recentInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
      due_date: format(invoice.due_date, 'dd/MM/yy'),
      status: capitalize(invoice.status),
    }))
    return recentInvoices
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch the latest invoices.')
  }
}
