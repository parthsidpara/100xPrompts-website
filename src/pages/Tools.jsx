import { motion } from 'framer-motion'
import { FiCpu, FiImage, FiCode, FiMessageCircle, FiMusic, FiVideo } from 'react-icons/fi'

const tools = [
  {
    category: "Large Language Models",
    icon: <FiCpu />,
    models: [
      {
        name: "GPT-4",
        provider: "OpenAI",
        description: "Most advanced language model with strong reasoning and creativity capabilities.",
        useCases: [
          "Complex problem solving",
          "Creative writing",
          "Code generation",
          "Analysis and research",
          "Mathematical computations"
        ],
        link: "https://openai.com/gpt-4"
      },
      {
        name: "Claude 2",
        provider: "Anthropic",
        description: "Advanced AI with strong analytical and writing capabilities, excels at long-form content.",
        useCases: [
          "Document analysis",
          "Academic writing",
          "Research assistance",
          "Content editing",
          "Technical documentation"
        ],
        link: "https://anthropic.com/claude"
      },
      {
        name: "Gemini Pro",
        provider: "Google",
        description: "Multimodal model with strong reasoning and real-world knowledge.",
        useCases: [
          "Visual analysis",
          "Research",
          "Content creation",
          "Code assistance",
          "Educational support"
        ],
        link: "https://deepmind.google/technologies/gemini/"
      }
    ]
  },
  {
    category: "Image Generation",
    icon: <FiImage />,
    models: [
      {
        name: "DALL-E 3",
        provider: "OpenAI",
        description: "Creates highly detailed and accurate images from text descriptions.",
        useCases: [
          "Marketing visuals",
          "Product concepts",
          "Artistic illustrations",
          "Design mockups",
          "Brand assets"
        ],
        link: "https://openai.com/dall-e-3"
      },
      {
        name: "Midjourney",
        provider: "Midjourney",
        description: "Specializes in artistic and creative image generation with unique aesthetic.",
        useCases: [
          "Artistic projects",
          "Concept art",
          "Interior design",
          "Fashion design",
          "World building"
        ],
        link: "https://midjourney.com"
      },
      {
        name: "Stable Diffusion XL",
        provider: "Stability AI",
        description: "Open-source image generation with high customization potential.",
        useCases: [
          "Custom art creation",
          "Photo editing",
          "Design iterations",
          "Visual prototyping",
          "Content generation"
        ],
        link: "https://stability.ai"
      }
    ]
  },
  {
    category: "Code Assistants",
    icon: <FiCode />,
    models: [
      {
        name: "GitHub Copilot",
        provider: "GitHub",
        description: "AI pair programmer that suggests code completions in real-time.",
        useCases: [
          "Code completion",
          "Bug fixing",
          "Test generation",
          "Documentation writing",
          "Code refactoring"
        ],
        link: "https://github.com/features/copilot"
      },
      {
        name: "Amazon CodeWhisperer",
        provider: "Amazon",
        description: "AI coding companion with strong AWS integration.",
        useCases: [
          "Cloud development",
          "Security scanning",
          "API integration",
          "Infrastructure code",
          "Best practices"
        ],
        link: "https://aws.amazon.com/codewhisperer/"
      }
    ]
  },
  {
    category: "Conversational AI",
    icon: <FiMessageCircle />,
    models: [
      {
        name: "ChatGPT",
        provider: "OpenAI",
        description: "Popular chatbot for general conversation and task assistance.",
        useCases: [
          "Customer support",
          "Learning assistance",
          "Task automation",
          "Writing help",
          "General queries"
        ],
        link: "https://chat.openai.com"
      },
      {
        name: "Claude.ai",
        provider: "Anthropic",
        description: "Conversational AI focused on helpful and honest interactions.",
        useCases: [
          "Research assistance",
          "Content creation",
          "Analysis",
          "Coding help",
          "Document review"
        ],
        link: "https://claude.ai"
      }
    ]
  },
  {
    category: "Audio & Music",
    icon: <FiMusic />,
    models: [
      {
        name: "Whisper",
        provider: "OpenAI",
        description: "Advanced speech recognition system for transcription and translation.",
        useCases: [
          "Audio transcription",
          "Translation",
          "Subtitling",
          "Meeting notes",
          "Content accessibility"
        ],
        link: "https://openai.com/research/whisper"
      },
      {
        name: "MusicLM",
        provider: "Google",
        description: "Generates high-fidelity music from text descriptions.",
        useCases: [
          "Music creation",
          "Sound design",
          "Soundtrack generation",
          "Audio prototyping",
          "Creative projects"
        ],
        link: "https://google-research.github.io/seanet/musiclm/examples/"
      }
    ]
  },
  {
    category: "Video Generation",
    icon: <FiVideo />,
    models: [
      {
        name: "Sora",
        provider: "OpenAI",
        description: "Creates realistic and imaginative videos from text descriptions.",
        useCases: [
          "Video content creation",
          "Visual effects",
          "Storyboard visualization",
          "Marketing content",
          "Educational videos"
        ],
        link: "https://openai.com/sora"
      },
      {
        name: "Runway Gen-2",
        provider: "Runway",
        description: "AI video generation and editing platform.",
        useCases: [
          "Video editing",
          "Visual effects",
          "Content creation",
          "Animation",
          "Scene generation"
        ],
        link: "https://runway.com"
      }
    ]
  }
]

function ToolCard({ model }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl hover-card relative group"
    >
      <div className="card-highlight"></div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold group-hover:text-gradient">{model.name}</h3>
          <p className="text-sm text-primary">{model.provider}</p>
        </div>
        <a
          href={model.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-primary transition-colors z-50"
        >
          Learn More →
        </a>
      </div>
      <p className="text-gray-600 mb-4">{model.description}</p>
      <div>
        <h4 className="font-medium mb-2">Best Use Cases:</h4>
        <ul className="space-y-1">
          {model.useCases.map((useCase, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function CategorySection({ category, icon, models }) {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="text-3xl text-primary">{icon}</div>
        <h2 className="text-2xl font-bold shimmer-text from-primary via-tertiary to-quaternary">
          {category}
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <ToolCard key={index} model={model} />
        ))}
      </div>
    </section>
  )
}

function Tools() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-surface-50 via-white to-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 shimmer-text from-primary via-tertiary to-quaternary"
          >
            AI Tools Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the perfect AI tools for your needs. Explore our curated collection of the most powerful and innovative AI models.
          </motion.p>
        </div>

        {/* Tools Sections */}
        {tools.map((category, index) => (
          <CategorySection
            key={index}
            category={category.category}
            icon={category.icon}
            models={category.models}
          />
        ))}
      </div>
    </div>
  )
}

export default Tools