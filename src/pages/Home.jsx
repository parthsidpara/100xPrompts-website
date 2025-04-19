import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="aurora-bg"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-conic from-primary via-tertiary to-quaternary opacity-10"></div>
          <div className="absolute inset-0">
            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-primary to-tertiary opacity-30 blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
            <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-tertiary to-quaternary opacity-30 blur-3xl top-40 right-20 animate-float-slow"></div>
            <div className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-quaternary to-primary opacity-30 blur-3xl bottom-20 left-1/4 animate-pulse-slow delay-700"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="neo-morph shine-effect px-8 py-3 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 text-primary font-medium text-sm">
                AI-Powered Productivity
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Unlock the Full Power of{' '}
              <span className="shimmer-text from-primary via-tertiary to-quaternary">AI</span> with{' '}
              <span className="shimmer-text from-primary via-tertiary to-quaternary">Expert-Curated Prompts</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get access to carefully tested prompts for all major AI models and supercharge your productivity with our Chrome extension.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-effect px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect"
                onClick={() => navigate("/prompts")}
              >
                Explore Prompts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-border hover-lift"
                onClick={() => navigate("/extension")}
              >
                <span className="gradient-border-content px-8 py-4 text-primary font-semibold hover:bg-gray-50 transition-colors">
                  Get the Chrome Extension
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-surface-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 shimmer-text from-primary via-tertiary to-quaternary">
              Why Choose 100xPrompts?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elevate your AI interactions with our powerful features
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Curated & Tested',
                description: 'Get high-quality, tested prompts for every AI model.',
                icon: '✨',
                gradient: 'from-neo-purple to-neo-pink'
              },
              {
                title: 'Model-Specific',
                description: 'Prompts tailored for GPT-4, Claude, Gemini, and more.',
                icon: '🎯',
                gradient: 'from-neo-pink to-neo-blue'
              },
              {
                title: 'Chrome Extension',
                description: 'Use prompts directly within your favorite AI tools.',
                icon: '🚀',
                gradient: 'from-neo-blue to-neo-cyan'
              },
              {
                title: 'Personalization',
                description: 'Save and customize prompts for your workflow.',
                icon: '⚡',
                gradient: 'from-neo-cyan to-neo-purple'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 rounded-2xl hover-card relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/95 group-hover:to-white/50 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="card-highlight"></div>
                  <div className="relative">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:animate-bounce-subtle transition-transform duration-500">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-quaternary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 shimmer-text from-primary via-tertiary to-quaternary">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Browse',
                description: 'Explore our extensive prompt library',
                gradient: 'from-neo-purple to-neo-pink'
              },
              {
                step: '2',
                title: 'Copy & Use',
                description: 'Use optimized prompts in your favorite AI',
                gradient: 'from-neo-pink to-neo-blue'
              },
              {
                step: '3',
                title: 'Install Extension',
                description: 'Get a seamless experience with our Chrome extension',
                gradient: 'from-neo-blue to-neo-purple'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="glass-card p-8 rounded-2xl hover-card relative z-10 group-hover:bg-gradient-to-br group-hover:from-white/95 group-hover:to-white/50 transition-all duration-500">
                  <div className={`neo-morph w-20 h-20 bg-gradient-to-r ${step.gradient} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/20 to-primary/0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* Not sure !! */}
      <section className="py-32 bg-gradient-to-b from-white to-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 pb-1 shimmer-text from-primary via-tertiary to-quaternary">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start boosting your productivity today
            </p>
          </motion.div>

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
                      'Access to all premium prompts',
                      'Chrome extension',
                      'Prompt customization',
                      'Priority support',
                      'Custom extension offers'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-gradient-to-r from-neo-purple to-neo-pink text-white flex items-center justify-center mr-3 group-hover:animate-bounce-subtle">✓</span>
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
      </section>
    </div>
  )
}

export default Home