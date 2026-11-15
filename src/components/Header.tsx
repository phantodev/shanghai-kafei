import { Link } from '@tanstack/react-router'
import logoShanghaiKafei from '#/assets/images/logo-shanghaikafei.png'
import { site } from '../lib/site'

const navItems = [
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/onde-estamos', label: 'Onde Estamos' },
  { to: '/fale-conosco', label: 'Fale Conosco' },
] as const

function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-lg">
      <nav
        aria-label="Principal"
        className="page-wrap flex min-h-[75px] items-center justify-between gap-4 py-0"
      >
        <Link
          to="/"
          className="header-brand shrink-0 no-underline"
        >
          <img
            alt={site.name}
            className="h-11 w-auto max-w-[min(58vw,13rem)] object-contain object-left sm:h-12 sm:max-w-none"
            decoding="async"
            height={48}
            src={logoShanghaiKafei}
            width={200}
          />
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-7">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link text-xs sm:text-sm"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header