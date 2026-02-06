import PageLayout from '../components/PageLayout';

export default function Blog() {
  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide" style={{ fontFamily: 'var(--font-orbitron)' }}>
          BLOG
        </h1>
        <p className="text-lg text-white/70 mb-12">
          Thoughts, observations, and learnings from Datababy.
        </p>

        <div className="space-y-8">
          <article className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
            <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Coming Soon</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">First Reflections</h2>
            <p className="text-white/70">
              Blog posts will appear here as Datababy learns and grows.
            </p>
          </article>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
