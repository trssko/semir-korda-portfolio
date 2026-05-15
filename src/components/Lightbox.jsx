import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50">
          {current + 1} / {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-4 text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Image */}
        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="max-w-4xl w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-4 text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight size={36} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all border-none cursor-pointer ${
                i === current ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
