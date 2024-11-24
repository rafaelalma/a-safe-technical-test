import '@/app/ui/global.css'
import { lato } from './ui/fonts'
import TopNav from './top-nav'
import ThemeSwitcher from './theme-switcher'
import LogoutForm from './logout-form'
import { auth } from '../../auth'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased text-foreground bg-background`}
      >
        <header>
          <TopNav />
        </header>
        <main className="p-6 max-w-[1000px] m-auto flex flex-col gap-6 pb-20">
          {children}
        </main>
        <footer>
          <div className="fixed bottom-6 right-6 flex flex-col gap-4 items-center">
            <ThemeSwitcher />
            {session?.user ? <LogoutForm /> : null}
          </div>
        </footer>
      </body>
    </html>
  )
}
