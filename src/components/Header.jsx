import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          MyLogo
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#home"
              className="text-sm font-medium transition hover:text-purple-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-sm font-medium transition hover:text-purple-500"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="text-sm font-medium transition hover:text-purple-500"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium transition hover:bg-purple-700"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-purple-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-purple-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-purple-500"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-lg bg-purple-600 px-5 py-2.5 transition hover:bg-purple-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;