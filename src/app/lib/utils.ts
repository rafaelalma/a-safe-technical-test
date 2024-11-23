export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  })
}

export const capitalize = (word: string) => {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1)
}
