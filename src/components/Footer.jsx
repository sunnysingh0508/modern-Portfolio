export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#141414] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          © {year} Sunny Singh. Crafted with care.
        </p>
        <div className="flex items-center gap-4 text-xs font-medium text-white/50">
          <a
            href="/assets/sunny-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Resume (PDF) ↗
          </a>
          <span>•</span>
          <a
            href="https://github.com/sunnysingh0508"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/sunny-singh0506"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
