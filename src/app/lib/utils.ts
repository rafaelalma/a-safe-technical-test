import { format } from 'date-fns'
import { redirect } from 'next/navigation'
import { auth } from '../../../auth'

export const formatCurrency = (amount: number) => {
  const formattedCurrency = ((amount / 100) * 100).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  })

  return formattedCurrency
}

export const getFormattedDate = (date: string) => {
  return format(date, 'dd/MM/yy')
}

export const capitalize = (word: string) => {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1)
}

export const requireAuth = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
}
