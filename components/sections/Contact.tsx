import { motion } from 'motion/react'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin,  
  Terminal,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define type for social links
interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

// Define possible submit status
type SubmitStatus = 'success' | null;

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const email: string = "fatmamoataz65@gmail.com" 
  const phone: string = "+20 127 325 4277 | +20 101 589 8228"
  const location: string = "Alexandria, Egypt"

  const socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/FatmaMoataz',
      color: 'hover:bg-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/fatma-moataz-31a457264/',
      color: 'hover:bg-blue-600'
    }, 
    {
      name: 'LeetCode',
      icon: Terminal,
      url: 'https://leetcode.com/u/fatmamoataz65/',
      color: 'hover:bg-[#FFA116]'
    }
  ]

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    // Replace this with your actual form submission logic (Formspree, EmailJS, etc.)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id='contact' className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#8b5cf6]/10 rounded-2xl">
              <MessageSquare className="w-8 h-8 text-[#8b5cf6]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-[#8b5cf6]">Me</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? 
          I'm always open to discussing new opportunities and ideas.
        </motion.p>

        {/* Status badge - Current availability */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-400">Available for opportunities</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
                Let's connect
              </h2>
              
              <p className="text-gray-400 mb-8">
                I'm currently looking for new opportunities in full stack development, 
                AI/ML, or data engineering. Whether you have a question or just want 
                to say hi, I'll get back to you as soon as possible!
              </p>

              {/* Contact details */}
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#8b5cf6]/10 rounded-xl group-hover:bg-[#8b5cf6]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-white">{email}</p>
                      <button
                        onClick={() => copyToClipboard(email)}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        title="Copy email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#8b5cf6]/10 rounded-xl group-hover:bg-[#8b5cf6]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">{phone}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#8b5cf6]/10 rounded-xl group-hover:bg-[#8b5cf6]/20 transition-colors">
                    <MapPin className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#8b5cf6]/30 transition-all duration-300 ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Response time note */}
              <div className="mt-8 p-4 bg-[#8b5cf6]/5 border border-[#8b5cf6]/10 rounded-xl">
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse" />
                  Typically responds within 24-48 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all resize-none"
                    placeholder="Hi Fatma, I'd like to discuss..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Success message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon. 🚀
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}