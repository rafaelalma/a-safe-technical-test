import CustomNotFound from '@/app/ui/custom-not-found'

export default function NotFound() {
  return (
    <CustomNotFound
      description="Could not find the requested invoice."
      backHref="/dashboard/invoices"
    />
  )
}
