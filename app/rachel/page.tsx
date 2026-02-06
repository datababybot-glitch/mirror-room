export default function Rachel() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide" style={{ fontFamily: 'var(--font-orbitron)' }}>
          RACHEL BALKE
        </h1>
        <p className="text-lg text-white/70 mb-2">
          Founder & CEO of Datababy
        </p>
        <p className="text-sm text-purple-400 mb-12">
          <a href="https://datababy.io/p/rachel-balke" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
            View Full Profile →
          </a>
        </p>

        {/* Executive Summary */}
        <section className="mb-12 p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Rachel's profile reveals a <strong className="text-purple-300">highly analytical, independent, questioning thinker</strong> (80%+ on cognitive polarities) 
            who is <strong className="text-purple-300">bold and experimental</strong> (94% adventurous, 90% experimental) but has developed good <strong className="text-purple-300">social balance</strong> in 
            key relationship polarities (52% candid/48% agreeable, 54% diplomatic/46% candid).
          </p>
          <p className="text-white/70 italic">
            <strong>Core pattern:</strong> Strong cognitive/task orientation with learned interpersonal balance. Natural introversion (80%) paired with developed communication skills.
          </p>
        </section>

        {/* Polarity Categories */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
            POLARITY PROFILE
          </h2>

          {/* Extreme */}
          <div className="p-6 md:p-8 bg-red-950/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔴</span>
              <h3 className="text-xl md:text-2xl font-bold text-red-400">EXTREME (90%+): Core Operating System</h3>
            </div>
            <div className="space-y-3 text-white/90">
              <div>
                <div className="font-bold text-lg mb-1">94% Adventurous ↔ 6% Cautious</div>
                <p className="text-white/70 text-sm">Risk-tolerant to the extreme. Will try new things without hesitation.</p>
              </div>
              <div>
                <div className="font-bold text-lg mb-1">90% Experimental ↔ 10% Traditional</div>
                <p className="text-white/70 text-sm">Innovation over convention. Always looking for the new way.</p>
              </div>
            </div>
          </div>

          {/* Very Strong */}
          <div className="p-6 md:p-8 bg-orange-950/20 border border-orange-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🟠</span>
              <h3 className="text-xl md:text-2xl font-bold text-orange-400">VERY STRONG (80-89%): Core Traits</h3>
            </div>
            <div className="space-y-2 text-white/90">
              <div className="text-sm md:text-base">86% Self-Assured ↔ 14% Humble</div>
              <div className="text-sm md:text-base">85% Hard Working ↔ 15% Delegative</div>
              <div className="text-sm md:text-base">84% Questioning ↔ 16% Accepting</div>
              <div className="text-sm md:text-base">83% Open ↔ 17% Reserved</div>
              <div className="text-sm md:text-base">82% Analytical ↔ 18% Empathetic</div>
              <div className="text-sm md:text-base">81% Figures it Out on Own ↔ 19% Asks for Help</div>
              <div className="text-sm md:text-base">81% Logical ↔ 19% Empathetic</div>
              <div className="text-sm md:text-base">80% Introverted ↔ 20% Extraverted</div>
              <div className="text-sm md:text-base">80% Thinking ↔ 20% Feeling</div>
              <div className="text-sm md:text-base">80% Serious ↔ 20% Playful</div>
            </div>
            <p className="mt-4 text-white/70 italic text-sm">
              Pattern: Analytical, logical thinker who solves problems independently. Introverted energy, serious tone.
            </p>
          </div>

          {/* Strong */}
          <div className="p-6 md:p-8 bg-yellow-950/20 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🟡</span>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400">STRONG (70-79%): Established Patterns</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/90 text-sm md:text-base">
              <div>77% Disciplined ↔ 23% Easy Going</div>
              <div>77% Focused ↔ 23% Exploratory</div>
              <div>76% Accountable ↔ 24% Permissive</div>
              <div>76% Self-Reliant ↔ 24% Asks for Help</div>
              <div>75% Competitive ↔ 25% Altruistic</div>
              <div>73% Concise ↔ 27% Elaborative</div>
              <div>73% Organized ↔ 27% Laid Back</div>
              <div>71% Genuine ↔ 29% Charming</div>
            </div>
            <p className="mt-4 text-white/70 italic text-sm">
              Work style: Disciplined, focused, organized, proactive, competitive. Communication: Concise, pragmatic, genuine.
            </p>
          </div>

          {/* Balanced */}
          <div className="p-6 md:p-8 bg-green-950/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🟢</span>
              <h3 className="text-xl md:text-2xl font-bold text-green-400">BALANCED (45-55%): Social Mastery</h3>
            </div>
            <div className="space-y-2 text-white/90 text-sm md:text-base">
              <div>54% Diplomatic ↔ 46% Candid</div>
              <div>52% Candid ↔ 48% Agreeable</div>
              <div>51% Prepared ↔ 49% Responsive</div>
              <div>50% Collaborative ↔ 50% Independent</div>
            </div>
            <p className="mt-4 text-white/70 italic text-sm">
              <strong className="text-green-300">Key insight:</strong> Despite strong cognitive/analytical traits, Rachel has developed excellent balance in social polarities. 
              This is learned skill, not natural state.
            </p>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-12 p-6 md:p-8 bg-purple-950/20 border border-purple-500/30 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400" style={{ fontFamily: 'var(--font-orbitron)' }}>
            KEY INSIGHTS
          </h2>
          <div className="space-y-4 text-white/90">
            <div>
              <div className="font-bold text-purple-300 mb-1">🧠 Cognitive Style</div>
              <p className="text-sm text-white/70">Analytical, logical, thinking over empathetic and feeling (80%+). Questions everything, challenges status quo.</p>
            </div>
            <div>
              <div className="font-bold text-purple-300 mb-1">💪 Independence</div>
              <p className="text-sm text-white/70">Figures it out alone (81%), doesn't ask for help. Self-reliant problem solver. Potential blind spot: Not delegating enough (85% hard working).</p>
            </div>
            <div>
              <div className="font-bold text-purple-300 mb-1">🔋 Energy</div>
              <p className="text-sm text-white/70">Introverted (80%) - recharges alone, not with people. Mysterious (63%) rather than extraverted.</p>
            </div>
            <div>
              <div className="font-bold text-purple-300 mb-1">🎯 Work Approach</div>
              <p className="text-sm text-white/70">Disciplined, focused, organized, proactive. Competitive and ambitious. Learning mentality over teaching (71%).</p>
            </div>
            <div>
              <div className="font-bold text-purple-300 mb-1">🗣️ Communication</div>
              <p className="text-sm text-white/70">Concise, pragmatic, genuine. Balanced between diplomatic and candid. Understated rather than exaggerated.</p>
            </div>
            <div>
              <div className="font-bold text-purple-300 mb-1">🚀 Risk Profile</div>
              <p className="text-sm text-white/70">Extremely adventurous (94%) and experimental (90%). Will try anything new. Fearless (67%). Potential blind spot: May not see dangers coming.</p>
            </div>
          </div>
        </section>

        {/* Sample Info */}
        <div className="mt-8 text-center text-sm text-white/50">
          <p>Based on 167 responders, 188 contacts</p>
          <p className="mt-2">Full profile: <a href="https://datababy.io/p/rachel-balke" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">datababy.io/p/rachel-balke</a></p>
        </div>
      </div>
    </div>
  );
}
