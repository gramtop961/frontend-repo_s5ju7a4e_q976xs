import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const posts = [
  {
    title: '5 Budgeting Habits That Actually Stick',
    excerpt:
      'Learn simple, repeatable budgeting routines to help you stay on track without feeling restricted.',
  },
  {
    title: 'Index Funds vs. ETFs: What’s Best For You?',
    excerpt:
      'Understand the key differences between index funds and ETFs so you can invest with confidence.',
  },
  {
    title: 'Credit Scores: How They’re Calculated And How To Improve',
    excerpt:
      'We break down the factors behind credit scores and the practical steps to grow yours.',
  },
  {
    title: 'Emergency Funds: How Much Is Enough?',
    excerpt:
      'A quick guide to setting the right target for your emergency savings and where to keep it.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="mx-auto max-w-7xl px-6">
        <div className="py-6">
          <Hero />
        </div>

        <div className="grid gap-8 py-10 lg:grid-cols-3">
          <section className="lg:col-span-2" aria-label="Featured posts">
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.slice(0, 4).map((p) => (
                <PostCard key={p.title} title={p.title} excerpt={p.excerpt} />
              ))}
            </div>
          </section>
          <Sidebar />
        </div>

        {/* About, Contact, Privacy sections as anchors to satisfy navigation links */}
        <section id="about" className="prose prose-zinc max-w-none dark:prose-invert">
          <h2>About Us</h2>
          <p>
            Expert advice on personal finance from industry pros. We believe in clear, actionable guidance to help you
            make smarter money decisions.
          </p>
          <h3>Our Mission</h3>
          <p>
            Empower readers with transparent, unbiased insights to build wealth, reduce debt, and plan for the future.
          </p>
          <h3>Team</h3>
          <ul>
            <li>Editor-in-Chief: Alex Morgan</li>
            <li>Senior Analyst: Jamie Lee</li>
            <li>Contributor: Taylor Brooks</li>
          </ul>
        </section>

        <section id="contact" className="mt-12">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <form className="mt-4 grid gap-4 sm:grid-cols-2" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" type="text" required className="mt-1 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" required className="mt-1 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows="4" required className="mt-1 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800"></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  Send Message
                </button>
                <div className="h-40 w-full max-w-xs rounded bg-zinc-100 text-center text-xs text-zinc-500 dark:bg-zinc-800">Map Embed</div>
              </div>
            </form>
          </div>
        </section>

        <section id="privacy" className="prose prose-zinc mt-12 max-w-none dark:prose-invert">
          <h2>Privacy Policy</h2>
          <p><strong>Data Collection:</strong> We collect minimal data necessary to provide our services, such as email addresses for newsletter subscriptions.</p>
          <p><strong>Cookies:</strong> We use cookies to improve site performance and user experience. You can disable cookies in your browser settings.</p>
          <p><strong>AdSense Disclosure:</strong> This site uses Google AdSense to serve ads. Google may use cookies to serve ads based on your prior visits to this and other websites.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
