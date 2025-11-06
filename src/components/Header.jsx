import React, { useEffect, useState } from 'react';
import { Search, Sun, Moon, ChevronDown, Twitter, Linkedin } from 'lucide-react';

const categories = [
  { name: 'Budgeting', href: '#' },
  { name: 'Investing', href: '#' },
  { name: 'Credit', href: '#' },
  { name: 'Savings', href: '#' },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const shouldDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80" role="banner" aria-label="Primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Finance Insights Home">
          <div className="h-8 w-8 rounded bg-emerald-500" aria-hidden="true"></div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Finance Insights</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main menu">
          <a href="#" className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">Home</a>

          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300"
              aria-haspopup="true"
              aria-expanded={catOpen}
              onClick={() => setCatOpen((v) => !v)}
            >
              Categories <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {catOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-48 rounded-md border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                {categories.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    role="menuitem"
                    className="block rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">About</a>
          <a href="#contact" className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">Contact</a>
          <a href="#privacy" className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">Privacy</a>

          <div className="relative">
            <label htmlFor="site-search" className="sr-only">Search</label>
            <input
              id="site-search"
              type="search"
              placeholder="Search articles"
              className="w-64 rounded-full border border-zinc-200 bg-white px-4 py-2 pl-10 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              aria-label="Search site"
            />
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="https://twitter.com" aria-label="Twitter" className="text-zinc-500 hover:text-emerald-600">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-zinc-500 hover:text-emerald-600">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile: Menu toggle */}
        <button
          className="inline-flex items-center rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-200 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:hidden">
          <div className="space-y-2 px-4 py-4">
            <a href="#" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Home</a>
            <details>
              <summary className="cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-200">Categories</summary>
              <div className="mt-2 space-y-1 pl-4">
                {categories.map((c) => (
                  <a key={c.name} href={c.href} className="block text-sm text-zinc-600 dark:text-zinc-300">{c.name}</a>
                ))}
              </div>
            </details>
            <a href="#about" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">About</a>
            <a href="#contact" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Contact</a>
            <a href="#privacy" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Privacy</a>
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <div className="flex items-center gap-3">
                <a href="https://twitter.com" aria-label="Twitter" className="text-zinc-500 hover:text-emerald-600">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="text-zinc-500 hover:text-emerald-600">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
