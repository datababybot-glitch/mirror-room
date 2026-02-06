'use client';

import PageLayout from '../components/PageLayout';

export default function Rachel() {
  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>
              RACHEL BALKE
            </h1>
            <p className="text-lg text-white/70 mb-2">
              Founder & CEO of Datababy
            </p>
            <a 
              href="https://datababy.io/p/rachel-balke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Full Profile →
            </a>
          </div>

          {/* Executive Summary */}
          <div
            style={{
              background: 'rgba(168, 85, 247, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '48px'
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
              EXECUTIVE SUMMARY
            </h2>
            <p className="text-white/90 leading-relaxed mb-4 text-lg">
              Rachel's profile reveals a <strong className="text-purple-300">highly analytical, independent, questioning thinker</strong> (80%+ on cognitive polarities) 
              who is <strong className="text-purple-300">bold and experimental</strong> (94% adventurous, 90% experimental) but has developed good <strong className="text-purple-300">social balance</strong> in 
              key relationship polarities.
            </p>
            <p className="text-white/70 italic">
              <strong className="text-purple-300">Core pattern:</strong> Strong cognitive/task orientation with learned interpersonal balance. Natural introversion (80%) paired with developed communication skills.
            </p>
          </div>

          {/* Polarity Grid */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-orbitron)' }}>
            POLARITY PROFILE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Extreme */}
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '16px',
                padding: '24px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔴</span>
                <h3 className="text-xl font-bold text-red-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  EXTREME (90%+)
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-lg mb-1 text-white">94% Adventurous</div>
                  <p className="text-white/70 text-sm">Risk-tolerant. Will try new things without hesitation.</p>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1 text-white">90% Experimental</div>
                  <p className="text-white/70 text-sm">Innovation over convention. Always seeking the new way.</p>
                </div>
              </div>
            </div>

            {/* Very Strong */}
            <div
              style={{
                background: 'rgba(249, 115, 22, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '16px',
                padding: '24px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟠</span>
                <h3 className="text-xl font-bold text-orange-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  VERY STRONG (80-89%)
                </h3>
              </div>
              <div className="space-y-2 text-sm text-white/90">
                <div>86% Self-Assured</div>
                <div>85% Hard Working</div>
                <div>84% Questioning</div>
                <div>82% Analytical</div>
                <div>81% Figures it Out on Own</div>
                <div>80% Introverted</div>
                <div>80% Serious</div>
              </div>
            </div>

            {/* Strong */}
            <div
              style={{
                background: 'rgba(234, 179, 8, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                borderRadius: '16px',
                padding: '24px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟡</span>
                <h3 className="text-xl font-bold text-yellow-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  STRONG (70-79%)
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-1 text-sm text-white/90">
                <div>77% Disciplined</div>
                <div>76% Accountable</div>
                <div>75% Competitive</div>
                <div>73% Concise</div>
                <div>73% Organized</div>
                <div>71% Genuine</div>
              </div>
            </div>

            {/* Balanced */}
            <div
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '16px',
                padding: '24px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟢</span>
                <h3 className="text-xl font-bold text-green-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  BALANCED (45-55%)
                </h3>
              </div>
              <div className="space-y-2 text-sm text-white/90">
                <div>54% Diplomatic ↔ 46% Candid</div>
                <div>52% Candid ↔ 48% Agreeable</div>
                <div>51% Prepared ↔ 49% Responsive</div>
                <div>50% Collaborative ↔ 50% Independent</div>
              </div>
              <p className="mt-4 text-white/70 italic text-sm">
                <strong className="text-green-300">Key:</strong> Developed social balance through practice
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div
            style={{
              background: 'rgba(168, 85, 247, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '20px',
              padding: '32px'
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
              KEY INSIGHTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>🧠</span> Cognitive Style
                </div>
                <p className="text-sm text-white/70">Analytical, logical, thinking over empathetic. Questions everything, challenges status quo.</p>
              </div>
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>💪</span> Independence
                </div>
                <p className="text-sm text-white/70">Figures it out alone (81%), doesn't ask for help. Self-reliant problem solver.</p>
              </div>
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>🔋</span> Energy
                </div>
                <p className="text-sm text-white/70">Introverted (80%) - recharges alone. Mysterious rather than extraverted.</p>
              </div>
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>🎯</span> Work Approach
                </div>
                <p className="text-sm text-white/70">Disciplined, focused, organized, proactive. Competitive and ambitious.</p>
              </div>
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>🗣️</span> Communication
                </div>
                <p className="text-sm text-white/70">Concise, pragmatic, genuine. Balanced diplomatic/candid. Understated.</p>
              </div>
              <div>
                <div className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span>🚀</span> Risk Profile
                </div>
                <p className="text-sm text-white/70">Extremely adventurous (94%) and experimental (90%). Will try anything new.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-white/50">
            <p>Based on 167 responders, 188 contacts</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
