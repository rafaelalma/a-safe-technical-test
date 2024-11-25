import { requireAuth } from '../lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function Page() {
  await requireAuth()

  return (
    <>
      <h1 className="sr-only">Customers</h1>
    </>
  )
}
