import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">About</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Expert advice on personal finance from industry pros.
            </p>
          </div>
          <form className="md:col-span-2" aria-label="Newsletter subscription">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">Subscribe to our newsletter</label>
            <div className="mt-2 flex max-w-md gap-2">
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                aria-label="Email address"
              />
              <button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} Finance Insights. All rights reserved.</p>
          <nav className="flex items-center gap-4" aria-label="Footer">
            <a href="#" className="hover:text-emerald-600">Home</a>
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
            <a href="#privacy" className="hover:text-emerald-600">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
