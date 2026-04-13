import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="font-spaceGrotesk-400 fixed top-0 left-0 right-0 bg-white z-50 py-5">

      <div className="flex items-center justify-between px-6 sm:px-16">

        <h1 className="font-spaceGrotesk-700 text-lg text-foreground">
          Clara Miño
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Sobre mi</li>
            <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Skills</li>
            <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Proyectos</li>
            <li className="cursor-pointer text-[var(--text-grey)] hover:text-[var(--text-black)] transition-colors">Contacto</li>
          </ul>

          <a
            href="https://www.linkedin.com/in/clara-mino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://www.linkedin.com/in/clara-mino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-10 border-t bg-white mt-4">
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