import { Button } from '@/components/ui/button'
import { signOut } from '../../auth'

export default function LogoutForm() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button type="submit" variant="destructive">
        Logout
      </Button>
    </form>
  )
}
