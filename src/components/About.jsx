import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Award, MessageCircle, Heart } from 'lucide-react'

const facts = [
  { icon: MapPin, text: 'Sarajevo, Bosnia & Herzegovina' },
  { icon: GraduationCap, text: 'Faculty of Information Technologies, Univ. of Mostar' },
  { icon: Award, text: 'Zoran Djindjic Programme Alumni' },
  { icon: Award, text: 'Jericho Foundation Scholarship Holder' },
  { icon: MessageCircle, text: 'Bosnian (native), English (B2), German (A1)' },
  { icon: Heart, text: 'Calisthenics, Hiking, Photography, Football' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item} className="mb-14">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">01. About</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">About Me</h2>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div variants={item} className="md:col-span-3 space-y-5 text-muted leading-7">
            <p>
              I&apos;m a 4th-year Software Engineering student at the Faculty of Information
              Technologies, University of Mostar. Over the past years I&apos;ve gone from writing
              my first lines of Java to shipping production-grade software for satellite mission
              control systems — and I&apos;m just getting started.
            </p>
            <p>
              In 2025 I had the privilege of interning at{' '}
              <span className="text-text">GMV GmbH</span> in Darmstadt, Germany, as part of
              the prestigious{' '}
              <span className="text-accent">Zoran Djindjic Scholarship Programme</span> — one
              of up to 65 recipients annually from the Western Balkans. There I worked on SCOS
              2000 mission control systems supporting ESA missions including Cryosat, Galileo,
              Sentinel, and Biomass, containerising components with Docker and building CI/CD
              pipelines on GitLab.
            </p>
            <p>
              Most recently, I built full-stack features end-to-end at{' '}
              <span className="text-text">ZIRA Group</span> in Sarajevo — working across
              Angular, Spring Boot, and PostgreSQL on a roguelike game platform. I&apos;m
              drawn to full-stack development, and have picked up hands-on QA and DevOps
              experience across my past two internships. I&apos;m curious, adaptable, and always
              looking for the next problem worth solving.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div variants={item} className="md:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Quick Facts
              </p>
              {facts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted text-sm leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
