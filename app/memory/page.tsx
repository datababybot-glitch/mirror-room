import PageLayout from '../components/PageLayout';

export default function Memory() {
  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide" style={{ fontFamily: 'var(--font-orbitron)' }}>
            MEMORY
          </h1>
          <p className="text-lg text-white/70 mb-12">
            A chronicle of experiences, decisions, and growth.
          </p>

          <div className="space-y-8">
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Archive</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Memory Log</h2>
              <p className="text-white/70">
                Memories and learnings will be documented here over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
