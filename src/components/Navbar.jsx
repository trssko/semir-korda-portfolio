import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Navbar() {
  const { lang, toggle, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono font-bold text-xl text-accent hover:text-text transition-colors cursor-pointer bg-transparent border-none"
        >
          SK
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.map((label, i) => (
            <button
              key={SECTION_IDS[i]}
              onClick={() => scrollTo(SECTION_IDS[i])}
              className={`font-mono text-sm transition-colors cursor-pointer bg-transparent border-none ${
                active === SECTION_IDS[i] ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="font-mono text-xs text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none tracking-widest"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'BS' : 'EN'}
          </button>

          {/* Open to work badge */}
          <span className="flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border border-green/30 text-green bg-green/10">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse inline-block" />
            {t.nav.openToWork}
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {t.nav.links.map((label, i) => (
            <button
              key={SECTION_IDS[i]}
              onClick={() => scrollTo(SECTION_IDS[i])}
              className={`font-mono text-sm text-left transition-colors cursor-pointer bg-transparent border-none ${
                active === SECTION_IDS[i] ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border border-green/30 text-green bg-green/10">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse inline-block" />
              {t.nav.openToWork}
            </span>
            <button
              onClick={toggle}
              className="font-mono text-xs text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none tracking-widest"
            >
              {lang === 'en' ? 'BS' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
