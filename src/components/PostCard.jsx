import React from 'react';

export default function PostCard({ title, excerpt, imgAlt = 'Post image', href = '#' }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900" aria-label={title}>
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-zinc-800 dark:to-zinc-800" role="img" aria-label={imgAlt}></div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">{excerpt}</p>
        <div className="mt-4">
          <a
            href={href}
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={`Read more: ${title}`}
          >
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}
