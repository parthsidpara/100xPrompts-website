import { Link } from 'react-router-dom'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">100xPrompts</h3>
            <p className="text-gray-600">Unlock the full power of AI with expert-curated prompts.</p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/prompts" className="text-gray-600 hover:text-primary">Prompts</Link></li>
              <li><Link to="/extension" className="text-gray-600 hover:text-primary">Extension</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><FiGithub size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><FiLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} 100xPrompts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer