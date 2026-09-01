export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#141414] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {year} Sunny Singh. Crafted with care.
        </p>
        <p
          className="text-white/20 text-sm"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
