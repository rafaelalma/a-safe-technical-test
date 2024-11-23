import { z } from 'zod'

export type User = z.infer<typeof UserSchema>
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export type Customer = z.infer<typeof CustomerSchema>
export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

export type Invoice = z.infer<typeof InvoiceSchema>
export const InvoiceSchema = z.object({
  id: z.string(),
  customer_id: z.string(),
  issued_date: z.string(),
  due_date: z.string(),
  amount: z.number(),
  status: z.enum(['pending', 'paid']),
})

export type MonthlyRevenue = z.infer<typeof MonthlyRevenueSchema>
export const MonthlyRevenueSchema = z.object({
  month: z.string(),
  revenue: z.number(),
})
