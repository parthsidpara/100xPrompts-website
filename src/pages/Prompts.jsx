import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCopy, FiHeart, FiSearch, FiX, FiChevronDown, FiCheck } from 'react-icons/fi'

const mockPrompts = [
  {
    id: 1,
    title: "Professional Email Writer",
    prompt: "Write a professional email about [topic] that is [tone] in tone. The email should be addressed to [recipient] and include [key points]. Make it approximately [length] long.",
    category: "Business",
    models: ["ChatGPT", "Claude"],
    likes: 234,
    tags: ["email", "professional", "communication"],
    examples: "Perfect for cold outreach, team updates, or client communications",
  },
  {
    id: 2,
    title: "Code Refactoring Assistant",
    prompt: "Analyze this [language] code and suggest refactoring improvements focusing on [aspect] (e.g., performance, readability, maintainability). Explain each suggestion and provide the refactored code.",
    category: "Code",
    models: ["ChatGPT", "Claude", "Bard"],
    likes: 567,
    tags: ["coding", "refactoring", "optimization"],
    examples: "Use for code reviews, optimization, and learning best practices",
  },
  {
    id: 3,
    title: "Blog Post Generator",
    prompt: "Create a comprehensive blog post about [topic] targeting [audience]. Include an engaging introduction, [number] main points, relevant examples, and a strong conclusion. The tone should be [tone] and length approximately [length] words.",
    category: "Writing",
    models: ["ChatGPT", "Claude"],
    likes: 789,
    tags: ["blog", "content", "writing"],
    examples: "Great for content creation, SEO articles, and thought leadership",
  }
]

const categories = ["All", "Business", "Code", "Writing", "Creative", "Academic", "Marketing"]
const aiModels = ["All Models", "ChatGPT", "Claude", "DALL-E", "Stable Diffusion", "Midjourney", "Bard"]
const sortOptions = ["Most Popular", "Recently Added", "Alphabetical"]

function PromptCard({ prompt }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [liked, setLiked] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-card hover-card p-6 rounded-2xl relative group"
    >
      <div className="card-highlight"></div>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold group-hover:text-gradient">{prompt.title}</h3>
        <button
          onClick={() => setLiked(!liked)}
          className={`p-2 rounded-full transition-colors ${
            liked ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'
          }`}
        >
          <FiHeart className={`${liked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-primary/10 via-tertiary/10 to-quaternary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Prompt Text */}
      <div className="mb-4">
        <p className={`text-gray-600 ${!expanded && 'line-clamp-3'}`}>
          {prompt.prompt}
        </p>
        {prompt.prompt.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-medium mt-2 hover:text-secondary transition-colors"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>

      {/* Models & Copy Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {prompt.models.map((model, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg text-xs bg-gray-100 text-gray-600"
            >
              {model}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="glow-effect px-3 py-2 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect"
        >
          {copied ? <FiCheck className="mr-1" /> : <FiCopy className="mr-1" />}
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
    </motion.div>
  )
}

function FilterDropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 rounded-xl bg-white border border-gray-200 flex items-center justify-between hover:border-primary transition-colors"
      >
        <span className="text-gray-700">{value}</span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                value === option ? 'text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Prompts() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedModel, setSelectedModel] = useState('All Models')
  const [sortBy, setSortBy] = useState('Most Popular')
  const [filteredPrompts, setFilteredPrompts] = useState(mockPrompts)

  useEffect(() => {
    let filtered = [...mockPrompts]

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(prompt =>
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(prompt => prompt.category === selectedCategory)
    }

    // Apply model filter
    if (selectedModel !== 'All Models') {
      filtered = filtered.filter(prompt => prompt.models.includes(selectedModel))
    }

    // Apply sorting
    switch (sortBy) {
      case 'Most Popular':
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case 'Recently Added':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'Alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        break
    }

    setFilteredPrompts(filtered)
  }, [searchQuery, selectedCategory, selectedModel, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedModel('All Models')
    setSortBy('Most Popular')
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-surface-50 via-white to-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text from-primary via-tertiary to-quaternary">
            Prompt Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and use expert-crafted prompts for your favorite AI models
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
            />
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FilterDropdown
              label="Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <FilterDropdown
              label="AI Model"
              options={aiModels}
              value={selectedModel}
              onChange={setSelectedModel}
            />
            <FilterDropdown
              label="Sort By"
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              <FiX />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Prompts Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No prompts found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Prompts