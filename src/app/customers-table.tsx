import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { fetchFilteredCustomers } from './lib/data'

type Props = {
  query: string
  currentPage: number
  limit: number
}

export default async function CustomersTable({
  query,
  currentPage,
  limit,
}: Props) {
  const customers = await fetchFilteredCustomers(query, currentPage, limit)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Email</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>
              <Link href={`/customers/${customer.id}`} className="text-primary">
                View Customer
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
