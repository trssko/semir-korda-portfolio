import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Award, MessageCircle, Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const FACT_ICONS = [MapPin, GraduationCap, Award, Award, MessageCircle, Heart]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item} className="mb-14">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">{about.label}</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">{about.heading}</h2>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div variants={item} className="md:col-span-3 space-y-5 text-muted leading-7">
            <p>{about.p1}</p>
            <p>
              {about.p2.t1}
              <span className="text-text">GMV GmbH</span>
              {about.p2.t2}
              <span className="text-accent">Zoran Djindjic Scholarship Programme</span>
              {about.p2.t3}
            </p>
            <p>
              {about.p3.t1}
              <span className="text-text">ZIRA Group</span>
              {about.p3.t2}
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div variants={item} className="md:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                {about.quickFacts}
              </p>
              {about.facts.map((text, i) => {
                const Icon = FACT_ICONS[i]
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-muted text-sm leading-snug">{text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
