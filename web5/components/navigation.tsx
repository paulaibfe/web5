"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("es") // Default language: Spanish

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "inspiración", path: "/blog" },
    { name: "about", path: "/about" },
  ]

  const languages = [
    { code: "es", name: "ES" },
    { code: "en", name: "EN" },
    { code: "ca", name: "CAT" },
  ]

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
    // Here you would implement actual language switching logic
  }

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary glitch" data-text="NEONOIA">
            NEONOIA
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`command-prompt hover:text-primary transition-colors ${
                      pathname === item.path ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher Dropdown - Desktop */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-primary transition-colors">
                <span>{languages.find((lang) => lang.code === language)?.name}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-card border border-border rounded-md shadow-lg hidden group-hover:block transition-all duration-200 ease-in-out">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block w-full text-left px-4 py-2 hover:bg-secondary transition-colors ${
                      language === lang.code ? "text-primary" : "text-white"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`command-prompt block hover:text-primary transition-colors ${
                      pathname === item.path ? "text-primary" : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Mobile language switcher */}
              <li className="pt-2 border-t border-border/40">
                <span className="block text-muted-foreground mb-2">Idioma:</span>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`px-2 py-1 rounded-md ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
