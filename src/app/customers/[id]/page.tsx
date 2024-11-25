import { fetchCustomerById } from '@/app/lib/data'
import { requireAuth } from '@/app/lib/utils'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer',
}

type Props = { params: Promise<{ id: string }> }

export default async function Page(props: Props) {
  await requireAuth()

  const params = await props.params
  const id = params.id

  const customer = await fetchCustomerById(id)

  if (!customer) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Customer: {customer.id}</h1>
      <div className="flex flex-row gap-4">
        <p>{customer.name}</p>
        <p>{customer.email}</p>
      </div>
    </div>
  )
}
