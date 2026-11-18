import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'მთავარი', end: true },
  { to: '/projects', label: 'პროექტები' },
  { to: '/contact', label: 'კონტაქტი' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setIsOpen(false), [location.pathname])

  const navLinkClass = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-violet-50 text-violet-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 font-bold tracking-tight text-slate-950" aria-label="მთავარ გვერდზე დაბრუნება">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-sm text-white shadow-lg shadow-violet-200">&lt;/&gt;</span>
          პორტფოლიო
        </NavLink>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="primary-navigation" aria-label={isOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}>
          <span className="text-2xl leading-none" aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
        <nav id="primary-navigation" className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-slate-200 bg-white p-4 shadow-xl md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="მთავარი ნავიგაცია">
          {links.map((link) => <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>{link.label}</NavLink>)}
        </nav>
      </div>
    </header>
  )
}
