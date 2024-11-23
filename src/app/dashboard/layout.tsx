import TopNav from './top-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main>{children}</main>
    </div>
  )
}
