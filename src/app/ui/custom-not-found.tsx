import Link from 'next/link'

type Props = {
  description: string
  backHref: string
}

export default function CustomNotFound({ description, backHref }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>404 Not Found</h1>
      <p>{description}</p>
      <Link href={backHref} className="text-primary">
        Go Back
      </Link>
    </div>
  )
}
