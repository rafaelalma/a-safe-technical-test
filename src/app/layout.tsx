import '@/app/ui/global.css'
import { lato } from './ui/fonts'
import TopNav from './top-nav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <header>
          <TopNav />
        </header>
        <main className="p-6 max-w-[1000px] m-auto">{children}</main>
      </body>
    </html>
  )
}
