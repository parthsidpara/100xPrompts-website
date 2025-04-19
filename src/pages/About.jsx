import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const teamMembers = [
  {
    name: "Parth",
    role: "Founder",
    bio: "Second year computer science student at VIT Chennai, interested in tech and startups",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Advait",
    role: "Research and Analysis",
    bio: "Finding and analysing best AI prompts, creating carefully curated collection to maximize the outcome",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Varun",
    role: "Head of Product",
    bio: "Product leader focused on making UI and UX better.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
]

const milestones = [
  {
    year: "2025",
    title: "Project Started",
    description: "100xPrompts was born from a vision to democratize AI prompt engineering, as a student project for Web Development course"
  }
]

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Prompts Created", value: "100K+" },
  { label: "Success Rate", value: "98%" },
  { label: "Time Saved", value: "1M+ hrs" }
]

function TeamMemberCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card hover-card p-6 rounded-2xl relative group"
    >
      <div className="card-highlight"></div>
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover hover-lift"
      />
      <h3 className="text-xl font-semibold text-center group-hover:text-gradient">{member.name}</h3>
      <p className="text-primary font-medium text-center mb-2">{member.role}</p>
      <p className="text-gray-600 text-center mb-4">{member.bio}</p>
      <div className="flex justify-center space-x-4">
        <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
          <FiTwitter size={20} />
        </a>
        <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
          <FiLinkedin size={20} />
        </a>
        <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
          <FiGithub size={20} />
        </a>
      </div>
    </motion.div>
  )
}

function About() {
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
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At 100xPrompts, we're on a mission to democratize AI technology by making prompt engineering accessible to everyone. We believe in the power of AI to enhance human creativity and productivity.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover-card relative group"
            >
              <div className="card-highlight"></div>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-gradient">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 shimmer-text from-primary via-tertiary to-quaternary"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 shimmer-text from-primary via-tertiary to-quaternary"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-2xl hover-card relative group"
              >
                <div className="card-highlight"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-24 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-semibold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 shimmer-text from-primary via-tertiary to-quaternary">
            Get in Touch
          </h2>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto hover-card relative">
            <div className="card-highlight"></div>
            <p className="text-gray-600 mb-6">
              Have questions or want to learn more? We'd love to hear from you!
            </p>
            <a
              href="mailto:contact@100xprompts.com"
              className="inline-flex items-center gap-2 glow-effect px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-tertiary to-quaternary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all shine-effect"
            >
              <FiMail />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About