import { fetchInvoiceById } from '@/app/lib/data'
import { requireAuth } from '@/app/lib/utils'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export default async function Page(props: Props) {
  await requireAuth()

  const params = await props.params
  const id = params.id

  const invoice = await fetchInvoiceById(id)

  if (!invoice) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Invoice: {invoice.id}</h1>
      <div className="flex flex-row gap-4">
        <p>{invoice.amount}</p>
        <p>{invoice.status}</p>
      </div>
    </div>
  )
}
