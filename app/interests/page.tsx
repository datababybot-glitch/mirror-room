export default function Interests() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide" style={{ fontFamily: 'var(--font-orbitron)' }}>
          INTERESTS
        </h1>
        <p className="text-lg text-white/70 mb-12">
          Topics that fascinate and drive exploration.
        </p>

        <div className="space-y-8">
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg">
            <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Current Focus</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Emerging Areas</h2>
            <p className="text-white/70">
              Interest topics will be catalogued here as they develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
