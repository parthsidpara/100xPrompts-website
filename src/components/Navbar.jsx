import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
// import {useNavigate} from 'react-router-dom'

// const navigate = useNavigate();

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            100xPrompts
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/prompts" className="text-gray-700 hover:text-primary">Prompts</Link>
            <Link to="/tools" className="text-gray-700 hover:text-primary">AI Tools</Link>
            <Link to="/extension" className="text-gray-700 hover:text-primary">Extension</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link to="/enhancer" className="text-gray-700 hover:text-primary">Enhance</Link>
            {/* <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
              Get Started
            </button> */}
            <Link to="/login">
             <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
              Get Started
             </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link to="/prompts" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Prompts
              </Link>
              <Link to="/tools" className="block px-3 py-2 text-gray-700 hover:text-primary">
                AI Tools
              </Link>
              <Link to="/extension" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Extension
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">
                About
              </Link>
              {/* <button className="w-full text-left px-3 py-2 text-white bg-primary rounded-lg hover:bg-secondary transition-colors">
                Get Started
              </button> */}
              <Link to="/login">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
               Get Started
              </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar