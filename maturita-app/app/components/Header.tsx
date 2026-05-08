'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-taupe/40">
      <div className="max-w-6xl mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
        <a href="/" className="font-display text-xl md:text-2xl tracking-tight font-medium">
          Maturita <span className="book-number">2026</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-ui text-sm gap-8">
          <a href="/cestina" className="hover:text-burgundy transition-colors">Čeština</a>
          <a href="/matika" className="hover:text-burgundy transition-colors">Matika</a>
          <a href="/fyzika" className="hover:text-burgundy transition-colors">Fyzika</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:text-burgundy transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-taupe/40 bg-parchment">
          <nav className="flex flex-col font-ui">
            <a
              href="/cestina"
              className="px-4 py-4 hover:bg-taupe/10 transition-colors border-b border-taupe/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Čeština
            </a>
            <a
              href="/matika"
              className="px-4 py-4 hover:bg-taupe/10 transition-colors border-b border-taupe/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Matika
            </a>
            <a
              href="/fyzika"
              className="px-4 py-4 hover:bg-taupe/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fyzika
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
