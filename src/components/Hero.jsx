import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowDown, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDeleting(false)
    setRoleIndex(0)
  }, [t])

  useEffect(() => {
    const roles = t.hero.roles
    const target = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex, t])

  const scrollToWork = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(79,158,255,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
            {t.hero.greeting}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono font-bold text-5xl md:text-7xl text-text mb-4 leading-tight"
        >
          Semir Korda
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xl md:text-2xl text-accent mb-6 h-8"
        >
          {displayed}
          <span className="cursor-blink text-accent">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToWork}
            className="px-6 py-3 rounded-lg font-mono text-sm font-medium bg-accent text-bg hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_40%,transparent)] cursor-pointer border-none"
          >
            {t.hero.viewWork}
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-lg font-mono text-sm font-medium border border-border text-text hover:border-accent hover:text-accent transition-all duration-200 flex items-center gap-2"
          >
            <FileText size={15} />
            {t.hero.downloadCv}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://github.com/trssko" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/semir-korda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:semirkorda9@gmail.com" aria-label="Email" className="text-muted hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-border animate-bounce"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  )
}
