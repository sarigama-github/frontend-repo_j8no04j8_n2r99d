import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-zinc-50">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-zinc-900/20 to-zinc-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-zinc-900/10 to-zinc-600/20 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/7n4H8KslqBZ2QwqT/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pt-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900"
          >
            ELEVARÉ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-zinc-700 max-w-xl"
          >
            A clothing house dedicated to elevation through mastery. Minimal forms, exacting details, engineered for presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#collections" className="px-5 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition shadow-lg shadow-zinc-900/10">Shop Collection</a>
            <a href="#about" className="px-5 py-3 rounded-full bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 transition">Our Philosophy</a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-zinc-500">SCROLL</div>
    </section>
  )
}
