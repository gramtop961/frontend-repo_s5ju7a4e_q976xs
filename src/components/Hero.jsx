import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative h-[420px] w-full overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80 dark:from-zinc-950/60 dark:via-zinc-950/60 dark:to-zinc-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 drop-shadow-sm sm:text-4xl md:text-5xl dark:text-zinc-100">
          Finance Insights
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-700 sm:text-lg dark:text-zinc-300">
          Smart Tips for Your Money
        </p>
      </div>
    </section>
  );
}
