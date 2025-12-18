import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "text-nobel-gold transition-colors cursor-pointer uppercase text-sm font-medium tracking-wide"
      : "text-stone-600 hover:text-nobel-gold transition-colors cursor-pointer uppercase text-sm font-medium tracking-wide"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo & Title */}
        <NavLink to="/" className="cursor-pointer group">
          <span className="font-serif font-bold text-lg tracking-wide">
            DISC CLEANER
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/team" className={navLinkClass}>
            Team
          </NavLink>
          <NavLink to="/design" className={navLinkClass}>
            Design
          </NavLink>
          <NavLink to="/process" className={navLinkClass}>
            Process
          </NavLink>
          <NavLink to="/budget" className={navLinkClass}>
            Budget
          </NavLink>
          <NavLink to="/code" className={navLinkClass}>
            Docs
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-stone-900 p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header

