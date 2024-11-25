import { requireAuth } from '../lib/utils'

export default async function Page() {
  await requireAuth()

  return (
    <>
      <h1 className="sr-only">Customers</h1>
    </>
  )
}
