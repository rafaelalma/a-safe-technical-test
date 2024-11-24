import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { fetchFilteredInvoices } from '../lib/data'
import Link from 'next/link'

type Props = {
  query: string
  currentPage: number
}

export default async function InvoicesTable({ query, currentPage }: Props) {
  const invoices = await fetchFilteredInvoices(query, currentPage)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice #</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Issued Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={invoice.id}>
            <TableCell>
              {index + 1 + (currentPage - 1) * invoices.length}
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.issued_date}</TableCell>
            <TableCell>{invoice.due_date}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>
              <Link href={`/invoices/${invoice.id}`} className="text-primary">
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
