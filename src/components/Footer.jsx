import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} {siteConfig.name}. შექმნილია React-ით.</p><div className="flex gap-4"><Link to="/contact" className="hover:text-violet-700">დამიკავშირდი</Link>{siteConfig.socialLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="hover:text-violet-700">{link.name}</a>)}</div></div></footer>
}
