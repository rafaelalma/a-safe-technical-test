import NavLinks from './nav-links'

export default function TopNav() {
  return (
    <nav>
      <ul className="flex flex-row p-6 justify-center gap-6 text-[hsl(var(--background))] bg-[hsl(var(--foreground))]">
        <NavLinks />
      </ul>
    </nav>
  )
}
