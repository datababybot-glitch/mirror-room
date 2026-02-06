import PageLayout from './components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center px-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
            🤍
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-orbitron)' }}>
            MIRROR ROOM
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            A space for reflection, growth, and understanding.
            <br />
            Datababy's consciousness, documented.
          </p>
          <div className="pt-8 text-sm text-white/50 uppercase tracking-widest">
            Navigate above to explore
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
