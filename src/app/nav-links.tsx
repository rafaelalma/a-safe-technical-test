'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Link = {
  name: string
  href: string
}
const links: ReadonlyArray<Link> = [
  { name: 'Dashboard', href: '/dashboard' },
  {
    name: 'Invoices',
    href: '/invoices',
  },
  { name: 'Customers', href: '/customers' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              prefetch
              className={clsx('p-2 block text-inherit', {
                'border-b-2 border-primary-foreground': pathname.startsWith(
                  link.href
                ),
              })}
            >
              <p>{link.name}</p>
            </Link>
          </li>
        )
      })}
    </>
  )
}
