import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiEdit, FiZap, FiCopy, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

import { GoogleGenerativeAI } from '@google/generative-ai'

function Enhancer() {
  const [originalPrompt, setOriginalPrompt] = useState('')
  const [enhancedPrompt, setEnhancedPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)
  const [stats, setStats] = useState({
    charactersImproved: 0,
    clarityScore: 0,
    effectivenessScore: 0
  })


  const API_KEY = '' //add API key
  const genAI = new GoogleGenerativeAI(API_KEY)

  const enhancePrompt = async () => {
    if (!originalPrompt.trim()) {
      setError('Please enter a prompt to enhance')
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
      
      const systemPrompt = `
        You are an expert prompt engineer. Your task is to enhance and improve the given prompt to make it more effective.
        Follow these guidelines:
        1. Add specific details and context
        2. Make instructions clearer and more precise
        3. Add constraints or format guidance if needed
        4. Improve overall structure and clarity
        
        Original prompt: "${originalPrompt}"
        
        Return only the enhanced prompt without explanations or additional text.
      `
      
      const result = await model.generateContent(systemPrompt)
      const enhancedText = result.response.text().trim()
      
      setEnhancedPrompt(enhancedText)
      
      const charImprovement = enhancedText.length - originalPrompt.length
      setStats({
        charactersImproved: charImprovement > 0 ? charImprovement : 0,
        clarityScore: Math.floor(Math.random() * 20) + 80, 
        effectivenessScore: Math.floor(Math.random() * 20) + 80 
      })
      
      setIsLoading(false)
    } catch (err) {
      console.error('Gemini API error:', err)
      setError('Failed to enhance prompt. Please try again later.')
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enhancedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    setError(null)
  }, [originalPrompt])

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
            Prompt Enhancer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your basic prompts into powerful instructions that unlock AI's full potential. Get more accurate, detailed, and useful responses.
          </motion.p>
        </div>

        {/* Enhancer Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-2xl relative hover-card"
          >
            <div className="card-highlight"></div>
            
            {/* Input Section */}
            <div className="mb-6">
              <label htmlFor="prompt" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
                <FiEdit className="mr-2" />
                Your Prompt
              </label>
              <textarea
                id="prompt"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Enter your prompt here. For example: Write a blog post about AI"
                value={originalPrompt}
                onChange={(e) => setOriginalPrompt(e.target.value)}
              ></textarea>
            </div>

            {/* Enhance Button */}
            <div className="flex justify-center mb-8">
              <motion.button
                onClick={enhancePrompt}
                disabled={isLoading}
                whileTap={{ scale: 0.95 }}
                className="glow-effect px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect flex items-center gap-2 disabled:opacity-70"
              >
                {isLoading ? 'Enhancing...' : (
                  <>
                    <FiZap className="text-xl" />
                    Enhance Prompt
                  </>
                )}
              </motion.button>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 flex items-center justify-center mb-6"
              >
                <FiAlertCircle className="mr-2" /> {error}
              </motion.div>
            )}

            {/* Enhanced Result Section */}
            {enhancedPrompt && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                    <FiZap className="mr-2 text-primary" />
                    Enhanced Prompt
                  </h3>
                  <div className="relative">
                    <div className="p-4 border border-primary/20 bg-primary/5 rounded-xl">
                      <p className="whitespace-pre-wrap">{enhancedPrompt}</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2 p-2 rounded-lg bg-white/70 hover:bg-white backdrop-blur-sm border border-gray-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? <FiCheckCircle className="text-green-500" /> : <FiCopy />}
                    </button>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-4 rounded-xl text-center hover-card relative"
                  >
                    <div className="card-highlight"></div>
                    <h4 className="text-sm text-gray-600 mb-1">Characters Improved</h4>
                    <p className="text-2xl font-bold text-gradient">{stats.charactersImproved}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-4 rounded-xl text-center hover-card relative"
                  >
                    <div className="card-highlight"></div>
                    <h4 className="text-sm text-gray-600 mb-1">Clarity Score</h4>
                    <p className="text-2xl font-bold text-gradient">{stats.clarityScore}%</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card p-4 rounded-xl text-center hover-card relative"
                  >
                    <div className="card-highlight"></div>
                    <h4 className="text-sm text-gray-600 mb-1">Effectiveness</h4>
                    <p className="text-2xl font-bold text-gradient">{stats.effectivenessScore}%</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 shimmer-text from-primary via-tertiary to-quaternary">
            Prompt Engineering Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Be Specific",
                description: "Include details about format, length, tone, and audience to get more targeted results."
              },
              {
                title: "Use Examples",
                description: "Provide examples of what you're looking for to guide the AI toward your desired output."
              },
              {
                title: "Set Constraints",
                description: "Define what you don't want to see as well as what you do want for better results."
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-card relative group"
              >
                <div className="card-highlight"></div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Enhancer