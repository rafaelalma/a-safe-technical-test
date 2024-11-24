'use client'

import CustomError from '../ui/custom-error'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return <CustomError title="Invoices Error" error={error} reset={reset} />
}
