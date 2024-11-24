import '@/app/ui/global.css'
import { lato } from './ui/fonts'
import TopNav from './top-nav'
import ThemeSwitcher from './theme-switcher'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased text-[hsl(var(--foreground))] bg-[hsl(var(--background))]`}
      >
        <header>
          <TopNav />
        </header>
        <main className="p-6 max-w-[1000px] m-auto flex flex-col gap-6">
          {children}
        </main>
        <footer>
          <ThemeSwitcher />
        </footer>
      </body>
    </html>
  )
}
