import { motion } from 'framer-motion'
import { FiDownload, FiStar, FiCheck, FiClock, FiUsers, FiShield } from 'react-icons/fi'

const features = [
  {
    icon: <FiClock />,
    title: "Save Time",
    description: "Access your favorite prompts instantly while using any AI tool."
  },
  {
    icon: <FiUsers />,
    title: "Team Sharing",
    description: "Share custom prompts with your team members effortlessly."
  },
  {
    icon: <FiShield />,
    title: "Secure",
    description: "Your prompts are encrypted and stored securely."
  }
]

const screenshots = [
  {
    title: "Quick Access",
    description: "Access your prompts directly from any AI platform",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&q=80"
  },
  {
    title: "Custom Collections",
    description: "Organize prompts into custom collections",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
  },
  {
    title: "Smart Suggestions",
    description: "Get AI-powered prompt suggestions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
]

const reviews = [
  {
    name: "Michael S.",
    role: "Content Creator",
    rating: 5,
    comment: "This extension has revolutionized how I work with AI. The prompt suggestions are incredibly helpful!"
  },
  {
    name: "Lisa T.",
    role: "Digital Marketer",
    rating: 5,
    comment: "The team sharing feature is a game-changer for our marketing department."
  },
  {
    name: "David K.",
    role: "Software Developer",
    rating: 4,
    comment: "Great tool for managing and reusing complex prompts. Would highly recommend!"
  }
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

function Extension() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-surface-50 via-white to-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-tertiary/10 to-quaternary/10 text-primary font-medium text-sm mb-4"
          >
            Available on Chrome Web Store
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 shimmer-text from-primary via-tertiary to-quaternary"
          >
            Supercharge Your AI Workflow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Access expert-crafted prompts directly in your browser while using ChatGPT, Claude, or any other AI platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-effect px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect inline-flex items-center justify-center gap-2"
            >
              <FiDownload />
              Add to Chrome
            </motion.a>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-card relative group"
              >
                <div className="card-highlight"></div>
                <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 shimmer-text from-primary via-tertiary to-quaternary">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden rounded-2xl hover-card relative group"
              >
                <div className="card-highlight"></div>
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient">{screenshot.title}</h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 shimmer-text from-primary via-tertiary to-quaternary">
            Choose Your Plan
          </h2>
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gradient-border group hover-lift"
            >
              <div className="gradient-border-content">
                <div className="p-2">
                  <div className="neo-morph bg-gradient-to-r from-primary via-tertiary to-quaternary text-white text-center py-2 rounded-xl text-sm font-medium shine-effect">
                    Most Popular
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-4">Pro Access</h3>
                  <div className="text-center mb-8">
                    <span className="text-6xl font-bold shimmer-text from-primary via-tertiary to-quaternary">$19</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Unlimited prompt collections',
                      'Team sharing features',
                      'Priority support',
                      'Custom prompt creation',
                      'AI-powered suggestions',
                      'Analytics dashboard'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FiCheck className="w-5 h-5 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary via-tertiary to-quaternary text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect neo-morph"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 shimmer-text from-primary via-tertiary to-quaternary">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-card relative group"
              >
                <div className="card-highlight"></div>
                <StarRating rating={review.rating} />
                <p className="text-gray-600 my-4">{review.comment}</p>
                <div>
                  <p className="font-semibold group-hover:text-gradient">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl max-w-2xl mx-auto mb-16 hover-card relative"
        >
          <div className="card-highlight"></div>
          <h2 className="text-2xl font-bold mb-6 text-gradient">Quick Installation Guide</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-tertiary text-white flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <p>Click the "Add to Chrome" button above</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-tertiary to-quaternary text-white flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <p>Click "Add Extension" in the Chrome Web Store popup</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-quaternary to-primary text-white flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <p>Pin the extension to your toolbar for easy access</p>
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  )
}

export default Extension