import { fetchRevenue } from '../lib/data'
import LinePlot from '../ui/line-plot'

export default async function RevenueChart() {
  const revenue = await fetchRevenue()
  const formattedRevenue = revenue.map((monthly) => monthly.revenue)

  return (
    <section className="flex flex-col gap-4">
      <h2>Yearly Revenue</h2>
      <div className="self-center sm:hidden">
        <LinePlot data={formattedRevenue} width={272} height={180} />
      </div>
      <div className="self-center hidden sm:block">
        <LinePlot data={formattedRevenue} width={640} height={400} />
      </div>
    </section>
  )
}
