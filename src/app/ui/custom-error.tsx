import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

type Props = {
  title: string
  error: Error & { digest?: string }
  reset: () => void
}

export default function CustomError({ title, error, reset }: Props) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>{title}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
