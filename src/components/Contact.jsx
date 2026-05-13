import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

const ICONS = { Email: Mail, LinkedIn: LinkedinIcon, GitHub: GithubIcon }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">{contact.label}</p>
        <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">{contact.heading}</h2>
        <div className="mt-3 w-12 h-0.5 bg-accent" />
      </motion.div>

      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted text-base leading-relaxed mb-10"
        >
          {contact.subtext}
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {contact.items.map(({ label, value, href }) => {
            const Icon = ICONS[label] ?? Mail
            return (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={item}
                className="flex items-center gap-5 p-5 bg-surface border border-border rounded-xl hover:border-accent/40 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_8%,transparent)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-widest">{label}</p>
                  <p className="text-text text-sm mt-0.5 group-hover:text-accent transition-colors">{value}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
