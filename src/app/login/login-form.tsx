'use client'

import { useActionState } from 'react'
import { authenticate } from '@/app/lib/actions'
import { Button } from '@/components/ui/button'

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  )

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-background px-6 pb-4 pt-8">
        <h1 className="mb-3 text-foreground">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-foreground" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="block w-full rounded-md border border-border py-[9px] pl-10 text-foreground outline-2 placeholder:text-background bg-background"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-foreground"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block w-full rounded-md border text-foreground border-border py-[9px] pl-10 outline-2 placeholder:text-background bg-background"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                autoComplete="current-password"
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value="/dashboard" />
        <Button type="submit" className="mt-4 w-full" aria-disabled={isPending}>
          Log in
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-destructive">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}
