'use client'

import '@/app/ui/global.css'
import { lato } from './ui/fonts'
import CustomError from './ui/custom-error'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased text-foreground bg-background p-6`}
      >
        <CustomError title="Global Error" error={error} reset={reset} />
      </body>
    </html>
  )
}
