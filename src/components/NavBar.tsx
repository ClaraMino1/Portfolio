import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="font-spaceGrotesk-400 fixed top-0 left-0 right-0 bg-white z-50 py-5">
      
      <div className="flex items-center justify-between px-6 mb-10 sm:px-16 sm:mb-0">

        <h1 className="font-spaceGrotesk-700 text-lg text-foreground">
          Clara Miño
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Sobre mi</li>
          <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Skills</li>
          <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Proyectos</li>
          <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Contacto</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-10 border-t">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">Sobre mi</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Proyectos</li>
            <li className="cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </nav>
  )
}