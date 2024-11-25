import { getDbClient } from './db'
import {
  Customer,
  Invoice,
  InvoiceTableElementRaw,
  MonthlyRevenue,
  RecentInvoiceRaw,
} from './definitions'
import { capitalize, formatCurrency, getFormattedDate } from './utils'

// TODO: validate with zod
// TODO: fix db connection

const client = await getDbClient()

export async function fetchCardData() {
  try {
    const invoiceCountPromise = client.sql`SELECT COUNT(*) FROM invoices`
    const customerCountPromise = client.sql`SELECT COUNT(*) FROM customers`
    const invoiceStatusPromise = client.sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ])

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0')
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0')
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0')
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0')

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch card data.')
  }
}

export async function fetchRevenue() {
  try {
    const data = await client.sql<MonthlyRevenue>`SELECT * FROM revenue`

    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch revenue data.')
  }
}

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
      due_date: getFormattedDate(invoice.due_date),
      status: capitalize(invoice.status),
    }))
    return recentInvoices
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch the latest invoices.')
  }
}

// TODO: fetchFilteredInvoices and fetchFilteredInvoicesPages in the same fetch

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
  limit: number
) {
  const offset = (currentPage - 1) * limit

  try {
    const invoices = await client.sql<InvoiceTableElementRaw>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.issued_date,
        invoices.due_date,
        invoices.status,
        customers.name,
        customers.email
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.issued_date::text ILIKE ${`%${query}%`} OR
        invoices.due_date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.due_date DESC
      LIMIT ${limit} OFFSET ${offset}
    `

    return invoices.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
      due_date: getFormattedDate(invoice.due_date),
      issued_date: getFormattedDate(invoice.issued_date),
      status: capitalize(invoice.status),
    }))
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch invoices.')
  }
}

export async function fetchFilteredInvoicesPages(query: string, limit: number) {
  try {
    const count = await client.sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.issued_date::text ILIKE ${`%${query}%`} OR
        invoices.due_date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / limit)
    return totalPages
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of invoices.')
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await client.sql<Omit<Invoice, 'issued_date' | 'due_date'>>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `

    const invoice = data.rows[0]

    return {
      ...invoice,
      amount: formatCurrency(invoice.amount),
      status: capitalize(invoice.status),
    }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch invoice.')
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number,
  limit: number
) {
  const offset = (currentPage - 1) * limit

  try {
    const data = await client.sql<Customer>`
      SELECT
        customers.id,
        customers.name,
        customers.email
      FROM customers
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
      ORDER BY name ASC
      LIMIT ${limit} OFFSET ${offset}
    `

    const customers = data.rows
    return customers
  } catch (err) {
    console.error('Database Error:', err)
    throw new Error('Failed to fetch all customers.')
  }
}

export async function fetchFilteredCustomersPages(
  query: string,
  limit: number
) {
  try {
    const count = await client.sql`SELECT COUNT(*)
    FROM customers
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
  `

    const totalPages = Math.ceil(Number(count.rows[0].count) / limit)
    return totalPages
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of invoices.')
  }
}

export async function fetchCustomerById(id: string) {
  try {
    const data = await client.sql<Customer>`
      SELECT
        customers.id,
        customers.name,
        customers.email
      FROM customers
      WHERE customers.id = ${id};
    `

    const customer = data.rows[0]

    return customer
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch invoice.')
  }
}
