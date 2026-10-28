import { site } from 'app/site'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const links = [
  { name: 'LinkedIn', href: site.linkedin },
  { name: 'GitHub', href: site.github },
  { name: site.email, href: `mailto:${site.email}` },
]

export default function Footer() {
  return (
    <footer className="mt-20 mb-12 border-t border-[var(--line)] pt-8">
      <ul className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-6">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              className="flex items-center gap-2 transition-colors hover:text-[var(--orange-text)]"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <ArrowIcon />
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
