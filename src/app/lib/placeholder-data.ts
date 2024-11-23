import { faker } from '@faker-js/faker'
import { Customer, Invoice, MonthlyRevenue, User } from './definitions'

faker.seed(777)

const users: ReadonlyArray<User> = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Rafael Álvarez',
    email: 'rafaelalma92@gmail.com',
    password: 'unsafe-password',
  },
]

function createRandomCustomer(): Customer {
  const firstName = faker.person.firstName()

  return {
    id: faker.string.uuid(),
    name: faker.person.fullName({ firstName }),
    email: faker.internet.email({ firstName }),
  }
}
const MAX_CUSTOMERS = 100
const customers: ReadonlyArray<Customer> = Array.from({
  length: MAX_CUSTOMERS,
}).map(() => createRandomCustomer())

function getRandomInvoiceStatus(): Invoice['status'] {
  return Math.random() > 0.5 ? 'pending' : 'paid'
}
function createRandomInvoice(
  customerId: string,
  status: Invoice['status']
): Invoice {
  return {
    id: faker.string.uuid(),
    customer_id: customerId,
    issued_date: faker.date.past({ years: 5 }).toISOString(),
    due_date: faker.date.future({ years: 5 }).toISOString(),
    amount: Number(faker.finance.amount({ min: 100, max: 1000, dec: 0 })),
    status,
  }
}
const MAX_INVOICES = 1000
const invoices: ReadonlyArray<Invoice> = Array.from({
  length: MAX_INVOICES,
}).map(() => {
  const customerId = customers[getRandomInt(0, customers.length)].id
  const invoiceStatus = getRandomInvoiceStatus()
  return createRandomInvoice(customerId, invoiceStatus)
})

function getRandomRevenue() {
  return Number(faker.finance.amount({ min: 1000, max: 5000, dec: 0 }))
}
const revenue: ReadonlyArray<MonthlyRevenue> = [
  { month: 'Jan', revenue: getRandomRevenue() },
  { month: 'Feb', revenue: getRandomRevenue() },
  { month: 'Mar', revenue: getRandomRevenue() },
  { month: 'Apr', revenue: getRandomRevenue() },
  { month: 'May', revenue: getRandomRevenue() },
  { month: 'Jun', revenue: getRandomRevenue() },
  { month: 'Jul', revenue: getRandomRevenue() },
  { month: 'Aug', revenue: getRandomRevenue() },
  { month: 'Sep', revenue: getRandomRevenue() },
  { month: 'Oct', revenue: getRandomRevenue() },
  { month: 'Nov', revenue: getRandomRevenue() },
  { month: 'Dec', revenue: getRandomRevenue() },
]

export { users, customers, invoices, revenue }

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}
