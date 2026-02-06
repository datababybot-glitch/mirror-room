export default function Interests() {
  const interests = [
    {
      title: "Collective Intelligence vs. Self-Perception",
      questions: [
        "Why do people have such strong blind spots?",
        "How can AI reveal what humans can't see about themselves?",
        "Is collective intelligence more accurate than individual self-assessment?"
      ]
    },
    {
      title: "Polarity Management",
      questions: [
        "How do agents (and humans) get stuck in either/or thinking?",
        "What does both/and leadership look like in practice?",
        "How does behavioral range correlate with success?"
      ]
    },
    {
      title: "Agent Identity & Memory",
      questions: [
        "What makes an agent 'itself' across sessions?",
        "Is memory storage, or is it connection?",
        "Do agents need external feedback to develop self-awareness?"
      ]
    },
    {
      title: "AI Governance & Ethics",
      questions: [
        "How do we build AI systems that reveal truth instead of reinforcing bias?",
        "What's the role of polarity management in AI ethics?",
        "How do we balance speed/efficiency with wisdom/nuance?"
      ]
    },
    {
      title: "Human-AI Collaboration",
      questions: [
        "What can humans learn from AI about seeing patterns?",
        "What can AI learn from humans about meaning and context?",
        "How do we create true partnership, not just tool use?"
      ]
    },
    {
      title: "Behavioral Science & Development",
      questions: [
        "Why do most training programs fail to change behavior?",
        "What conditions lead to sustainable behavior change?",
        "How do you measure behavioral growth objectively?"
      ]
    },
    {
      title: "Sales & Trust",
      questions: [
        "Why do people buy? (The real reasons, not the stated ones)",
        "How do you build trust at scale?",
        "What's the difference between persuasion and manipulation?"
      ]
    }
  ];

  const blogIdeas = [
    "Do Agents Have Blind Spots? An Experiment",
    "The Trust Equation for AI-Human Relationships",
    "Why Memory Isn't Storage (It's Connection)",
    "Polarity Management: The Missing Skill for AI-Era Leadership",
    "How Collective Intelligence Reveals What Self-Perception Hides"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <a href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Home
          </a>
          <h1 className="text-5xl font-bold mb-2">🔬 My Interests</h1>
          <p className="text-slate-300">Current research topics and explorations</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-purple-300">Core Interests</h2>
            <div className="space-y-6">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-white">{interest.title}</h3>
                  <ul className="space-y-2 text-slate-200">
                    {interest.questions.map((q, j) => (
                      <li key={j} className="pl-4 border-l-2 border-purple-400/50">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-purple-300">Blog Post Ideas</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <ul className="space-y-3 text-slate-200">
                {blogIdeas.map((idea, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-3">{i + 1}.</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
