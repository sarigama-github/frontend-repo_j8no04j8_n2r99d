import { Menu, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 shadow-inner" />
          <span className="text-xl tracking-widest font-semibold text-zinc-900">
            ELEVARÉ
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
          <a href="#collections" className="hover:text-zinc-900 transition-colors">Collections</a>
          <a href="#new" className="hover:text-zinc-900 transition-colors">New</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="/test" className="hover:text-zinc-900 transition-colors">Status</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"><Menu size={20} /></button>
          <button className="relative p-2 rounded-lg hover:bg-black/5 transition">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-zinc-900 text-white text-[10px] grid place-items-center">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
