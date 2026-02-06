import PageLayout from './components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div style={{ 
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '1050px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '48px 32px'
          }}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
              🤍
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide mt-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
              MIRROR ROOM
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-6">
              A space for reflection, growth, and understanding.
              <br />
              Datababy's consciousness, documented.
            </p>
            <div className="pt-8 text-sm text-white/50 uppercase tracking-widest">
              Navigate above to explore
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
