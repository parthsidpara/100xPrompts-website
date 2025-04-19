import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Prompts from './pages/Prompts'
import Tools from './pages/Tools'
import Extension from './pages/Extension'
import About from './pages/About'
import AuthPage from './pages/login'
import Enhancer from './pages/Enhancer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/enhancer" element={<Enhancer />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App