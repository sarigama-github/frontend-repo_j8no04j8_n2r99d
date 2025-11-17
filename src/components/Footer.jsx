export default function Footer() {
  return (
    <footer id="about" className="border-t border-zinc-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-sm text-zinc-600">
        <div>
          <h4 className="text-zinc-900 font-semibold tracking-widest">ELEVARÉ</h4>
          <p className="mt-3 max-w-xs">Elevation through mastery. Essential silhouettes engineered with technical precision.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-zinc-900 font-medium">Explore</h5>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-zinc-900" href="#collections">Collections</a></li>
              <li><a className="hover:text-zinc-900" href="#">Lookbook</a></li>
              <li><a className="hover:text-zinc-900" href="#">Journal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-zinc-900 font-medium">Support</h5>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-zinc-900" href="#">Shipping</a></li>
              <li><a className="hover:text-zinc-900" href="#">Returns</a></li>
              <li><a className="hover:text-zinc-900" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-xs">© {new Date().getFullYear()} ELEVARÉ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
