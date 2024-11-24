import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { signOut } from '../../auth'

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
          Login
        </Link>
      </div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
        className="self-center"
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  )
}
