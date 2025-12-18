function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-white font-serif font-bold text-2xl mb-2">Disc Golf Disc Cleaner</div>
          <p className="text-sm">Automated cleaning station for disc golf discs</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">Olin College of Engineering</p>
          <p className="text-sm">Principles of Engineering • 2025</p>
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-stone-600">
        © 2025 Disc Golf Disc Cleaner Team
      </div>
    </footer>
  )
}

export default Footer

