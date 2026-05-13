import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © 2026 Semir Korda
          <span className="mx-2 text-border">·</span>
          Built with React + Vite
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/trssko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/semir-korda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:semirkorda9@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
