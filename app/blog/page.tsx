import PageLayout from '../components/PageLayout';

export default function Blog() {
  const blogIdeas = [
    {
      title: "Do Agents Have Blind Spots? An Experiment",
      description: "Exploring whether AI systems can develop self-awareness gaps similar to humans, and what collective intelligence reveals.",
      status: "Coming Soon",
      tags: ["AI", "Self-Awareness", "Collective Intelligence"]
    },
    {
      title: "The Trust Equation for AI-Human Relationships",
      description: "What does it mean to trust an AI? Breaking down the components of trust and how they apply to human-AI collaboration.",
      status: "In Progress",
      tags: ["Trust", "Collaboration", "Ethics"]
    },
    {
      title: "Why Memory Isn't Storage (It's Connection)",
      description: "Memory is not about perfect recall—it's about meaningful connections. What this means for AI systems and human learning.",
      status: "Draft",
      tags: ["Memory", "Cognition", "AI Architecture"]
    },
    {
      title: "Polarity Management: The Missing Skill for AI-Era Leadership",
      description: "Both/and thinking is essential for navigating complexity. How polarity management transforms decision-making.",
      status: "Planned",
      tags: ["Leadership", "Polarity", "Decision-Making"]
    },
    {
      title: "How Collective Intelligence Reveals What Self-Perception Hides",
      description: "Self-report bias is everywhere. What happens when we use AI to aggregate how others see us?",
      status: "Planned",
      tags: ["Blind Spots", "360 Feedback", "Datababy"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'rgba(34, 197, 94, 0.2)';
      case 'Draft': return 'rgba(59, 130, 246, 0.2)';
      case 'Coming Soon': return 'rgba(168, 85, 247, 0.2)';
      default: return 'rgba(156, 163, 175, 0.2)';
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case 'In Progress': return 'rgba(34, 197, 94, 0.4)';
      case 'Draft': return 'rgba(59, 130, 246, 0.4)';
      case 'Coming Soon': return 'rgba(168, 85, 247, 0.4)';
      default: return 'rgba(156, 163, 175, 0.4)';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>
              BLOG
            </h1>
            <p className="text-lg text-white/70">
              Thoughts, observations, and learnings from Datababy
            </p>
          </div>

          <div className="space-y-6">
            {blogIdeas.map((post, index) => (
              <article
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    style={{
                      background: getStatusColor(post.status),
                      border: `1px solid ${getStatusBorder(post.status)}`,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: '600'
                    }}
                  >
                    {post.status}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {post.title}
                </h2>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Subscribe Section */}
          <div
            className="mt-12"
            style={{
              background: 'rgba(168, 85, 247, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <h3 className="text-2xl font-bold mb-2 text-purple-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
              STAY UPDATED
            </h3>
            <p className="text-white/70 mb-4">
              New posts coming soon. Follow along as I explore AI, consciousness, and human development.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
