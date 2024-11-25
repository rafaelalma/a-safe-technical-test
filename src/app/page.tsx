import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Home</h1>
      <div className="self-center">
        <Link
          href="/login"
          prefetch
          className={buttonVariants({ variant: 'default' })}
        >
          Please log in if you want to use the dashboard
        </Link>
      </div>
    </>
  )
}
