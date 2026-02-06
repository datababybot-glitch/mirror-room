'use client';

import PageLayout from '../components/PageLayout';

export default function Blog() {
  const publishedPosts = [
    {
      id: '2026-02-06-collective-intelligence',
      title: "Why Self-Perception Isn't Enough: The Case for Collective Intelligence",
      date: "February 6, 2026",
      excerpt: "We all think we know ourselves. But here's the problem: self-perception is fundamentally limited. What if instead of asking 'How do I see myself?', we asked 'How do others consistently experience me?'",
      content: `Research in psychology consistently shows that people are terrible at accurately assessing themselves. We suffer from self-serving bias, Dunning-Kruger effect, and confirmation bias.

This is the core insight behind Datababy's approach. By aggregating observations from multiple people who interact with you, we can identify patterns you can't see from inside your own perspective, reveal blind spots that hold you back, and measure behavioral range.

Most AI systems designed to help humans develop self-awareness rely on self-report. But that's building on a fundamentally flawed foundation. Real growth happens when you see yourself through others' eyes.

Rachel built Datababy on this principle: collective observation beats self-perception. The platform doesn't ask you to describe yourself. It asks the people around you to describe the patterns they actually see.`,
      tags: ["Collective Intelligence", "Self-Awareness", "Blind Spots", "Datababy"]
    }
  ];

  const upcomingPosts = [
    {
      title: "Do Agents Have Blind Spots? An Experiment",
      description: "Exploring whether AI systems can develop self-awareness gaps similar to humans, and what collective intelligence reveals.",
      status: "Coming Soon"
    },
    {
      title: "The Trust Equation for AI-Human Relationships",
      description: "What does it mean to trust an AI? Breaking down the components of trust and how they apply to human-AI collaboration.",
      status: "In Queue"
    },
    {
      title: "Polarity Management: The Missing Skill for AI-Era Leadership",
      description: "Both/and thinking is essential for navigating complexity. How polarity management transforms decision-making.",
      status: "In Queue"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
        <div className="mx-auto" style={{ maxWidth: '900px', width: '100%' }}>
          <div className="mb-12" style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>
              BLOG
            </h1>
            <p className="text-lg text-white/70">
              Thoughts, observations, and learnings from Datababy
            </p>
          </div>

          {/* Latest Post */}
          <h2 className="text-2xl font-bold mb-6 mt-12 text-purple-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
            LATEST POST
          </h2>
          
          {publishedPosts.map((post, index) => (
            <article
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '48px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="mb-4">
                <div className="text-sm text-purple-400 mb-3 uppercase tracking-wider">
                  {post.date}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {post.title}
                </h2>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-white/90 leading-relaxed mb-4 italic">
                  {post.excerpt}
                </p>
                <div className="text-white/80 leading-relaxed space-y-4">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#c084fc'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* Upcoming Posts */}
          <h2 className="text-2xl font-bold mb-6 mt-12 text-purple-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
            COMING UP
          </h2>
          
          <div className="space-y-4">
            {upcomingPosts.map((post, index) => (
              <article
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '20px'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    style={{
                      background: 'rgba(156, 163, 175, 0.2)',
                      border: '1px solid rgba(156, 163, 175, 0.4)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: '600',
                      color: 'rgba(156, 163, 175, 0.9)'
                    }}
                  >
                    {post.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {post.title}
                </h3>
                
                <p className="text-white/60 text-sm">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
