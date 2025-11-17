import { useEffect, useState } from 'react'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        // ensure seed exists, then fetch featured
        await fetch(`${base}/api/seed`, { method: 'POST' }).catch(() => {})
        const res = await fetch(`${base}/api/products?featured=true`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <section id="collections" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-40 grid place-items-center text-zinc-500">Loading featured…</div>
        </div>
      </section>
    )
  }

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Featured Forms</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition shadow-black/5">
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                {item.images?.[0] ? (
                  <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-zinc-400">No image</div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-zinc-900">{item.title}</h3>
                  <span className="text-zinc-700">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{item.description}</p>
                <div className="mt-3 flex gap-2 items-center">
                  {item.colors?.slice(0,4).map((c,i) => (
                    <span key={i} className="h-4 w-4 rounded-full border border-zinc-200" style={{ backgroundColor: c === 'bone' ? '#e9e6df' : c === 'onyx' ? '#0a0a0a' : c === 'charcoal' ? '#3a3a3a' : c === 'graphite' ? '#4b4b4b' : c === 'sage' ? '#aeb9a8' : c === 'storm' ? '#7a818a' : c === 'obsidian' ? '#0b0b0c' : '#d4d4d4' }} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
