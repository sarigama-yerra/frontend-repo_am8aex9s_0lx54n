import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/coreosofia', label: 'Cos’è Coreosofia' },
  { to: '/danzacurativa', label: 'DanzaCurativa' },
  { to: '/online', label: 'Online' },
  { to: '/in-presenza', label: 'In presenza' },
  { to: '/ritiri', label: 'Ritiri' },
  { to: '/testimonianze', label: 'Testimonianze' },
  { to: '/contatti', label: 'Contatti' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-rose-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-200 via-pink-100 to-sky-100 ring-2 ring-rose-300/50 shadow-inner" />
            <div className="leading-tight">
              <p className="font-semibold tracking-wide text-rose-700">Coreosofia</p>
              <p className="text-xs text-rose-500">di Maresa Pronti</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm transition-colors ${
                    isActive
                      ? 'bg-rose-100 text-rose-800'
                      : 'text-rose-700 hover:bg-rose-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contatti"
              className="ml-2 rounded-full bg-rose-700 text-white px-4 py-2 text-sm shadow hover:bg-rose-800 transition-colors"
            >
              Prenota
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-700"
            onClick={() => setOpen((o) => !o)}
            aria-label="Apri menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white/90">
          <div className="px-4 py-3 grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm ${
                    isActive ? 'bg-rose-100 text-rose-800' : 'text-rose-700 hover:bg-rose-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contatti"
              onClick={() => setOpen(false)}
              className="rounded-full bg-rose-700 text-white px-4 py-2 text-sm shadow"
            >
              Prenota
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
