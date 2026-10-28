import { site } from 'app/site'

const navItems = [
  { href: '#about', name: 'About' },
  { href: '#research', name: 'Research' },
  { href: '#experience', name: 'Experience' },
]

const linkClass = 'text-muted transition-colors hover:text-[var(--orange-text)]'

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 -mx-4 mb-6 bg-white/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href="#about"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-green"
        >
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full bg-[var(--orange)]"
          />
          {site.name}
        </a>
        <nav className="flex flex-row flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {navItems.map(({ href, name }) => (
            <a key={href} href={href} className={`hidden sm:inline ${linkClass}`}>
              {name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !px-4 !py-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
