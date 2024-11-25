import { Button } from '@/components/ui/button'
import { signIn } from '../../../auth'
import LoginForm from './login-form'

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Login</h1>
      <LoginForm />
      <form
        action={async () => {
          'use server'
          await signIn('github', { redirectTo: '/dashboard' })
        }}
        className="self-center"
      >
        <Button type="submit">Signin with GitHub</Button>
      </form>
    </>
  )
}
