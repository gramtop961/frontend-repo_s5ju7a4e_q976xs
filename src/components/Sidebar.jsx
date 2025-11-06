import React from 'react';

const categories = ['Budgeting', 'Investing', 'Credit', 'Savings'];

export default function Sidebar() {
  return (
    <aside className="space-y-6" aria-label="Sidebar">
      <section aria-labelledby="categories-heading" className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 id="categories-heading" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Categories</h2>
        <ul className="mt-3 space-y-2">
          {categories.map((c) => (
            <li key={c}>
              <a href="#" className="text-sm text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">{c}</a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Advertisement" className="rounded-xl border border-dashed border-zinc-300 bg-white p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mx-auto flex h-[250px] w-[300px] items-center justify-center rounded bg-zinc-100 text-xs text-zinc-500 dark:bg-zinc-800">
          300x250 Ad
        </div>
      </section>

      <section aria-label="Advertisement" className="rounded-xl border border-dashed border-zinc-300 bg-white p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mx-auto flex h-[250px] w-[300px] items-center justify-center rounded bg-zinc-100 text-xs text-zinc-500 dark:bg-zinc-800">
          300x250 Ad
        </div>
      </section>
    </aside>
  );
}
