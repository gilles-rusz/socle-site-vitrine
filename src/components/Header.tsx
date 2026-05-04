"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#accueil"
            className="text-xl font-bold text-dark-900 tracking-tight"
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-dark-600 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Devis gratuit
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-dark-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-dark-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-dark-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Devis gratuit
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
