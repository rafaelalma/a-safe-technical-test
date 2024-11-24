import NavLinks from './nav-links'

export default function TopNav() {
  return (
    <nav>
      <ul className="flex flex-row p-6 justify-center gap-2 sm:gap-6 text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))]">
        <NavLinks />
      </ul>
    </nav>
  )
}
