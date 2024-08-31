'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Icon from "@/components/ui/Icon";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black/10 backdrop-blur-lg rounded-lg shadow-lg w-96 p-6 border border-white/20 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText?: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText, highlighted }) => {
  return (
    <div className={`rounded-lg shadow-lg p-8 ${highlighted ? 'border-2 border-blue-500 bg-blue-900' : 'border border-gray-700 bg-gray-800'} text-center`}>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex justify-center items-center mb-6">
        <span className={`text-4xl font-extrabold ${highlighted ? 'text-blue-300' : 'text-white'}`}>{price}</span>
      </div>
      <ul className="text-gray-300 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">✔️ {feature}</li>
        ))}
      </ul>
      {buttonText && (
        <button className={`w-full ${highlighted ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-blue-600 rounded-lg px-4 py-2`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg flex items-center justify-between px-8 py-4">
      <div className="text-white text-xl font-bold">vitality AI</div>
      <nav className="flex space-x-8 text-white">
        <a href="#features" className="hover:text-gray-300">Features</a>
        <a href="#pricing" className="hover:text-gray-300">Pricing</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <a 
          href="https://vitality-ai.vercel.app/pages-login.html" 
          className="text-white hover:text-gray-300">
          Login
        </a>
        <button 
          onClick={onOpenModal} 
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2">
          Register
        </button>
      </div>
    </header>
  );
};

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#202543] to-black">
      <head>
        <meta property="og:title" content="Vitality.ai" />
        <meta property="og:description" content="Vitality.ai is a one stop solution for chronic pain management." />
        <meta property="og:url" content="https://vitality-landing-new.vercel.app/" />
        <meta property="og:image" content="public/opengraph-image.jpeg" />
      </head>
      <BackgroundBeams className="w-full" />
      <Navbar onOpenModal={handleOpenModal} />

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 max-md:text-4xl"
        >
          vitality.ai
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-2xl text-gray-300 mt-5 max-md:text-sm text-center max-md:px-10"
        >
          vitality.ai is a one-stop platform for managing chronic pain
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-2xl text-gray-300 mt-5 max-md:text-sm text-center max-md:px-10"
        >
          Personalized plans with AI, yoga, and physiotherapy consultations
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="mt-8 bg-blue-500 backdrop-blur-sm border-[1px] text-white hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-5 py-3 flex flex-row gap-3 items-center justify-center"
          onClick={() => window.location.href = 'https://zcal.co/i/WQSUUkRW/'}
        >
          Free Demo
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="mt-8 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-5 py-3 flex flex-row gap-3 items-center justify-center"
          onClick={() => window.location.href = 'https://just-vitality-react-chatbot.pages.dev/'}
        >
          Try our free AI ChatBot
        </motion.button>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Register</h2>
            <div className="flex flex-col gap-4">
              <button 
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-6 py-4"
                onClick={() => window.location.href = 'https://vitality-ai.vercel.app/pages-register.html'}
              >
                Register as a User
              </button>
              <button 
                className="bg-green-500 text-white hover:bg-green-600 rounded-lg px-6 py-4"
                onClick={() => window.location.href = 'https://coderdotexe.github.io/VedioVerification/'}
              >
                Register as a Partner
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Features Section */}
      <section id="features" className="w-screen min-h-screen bg-gradient-to-bl from-black to-[#131625] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12 pt-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Motion Tracking Model"
              description="Guide users through their exercise plan, analyze posture, and correct incorrect exercises with our adaptive motion tracking model."
              icon=""
            />
            <FeatureCard
              title="Multilingual AI ChatBot"
              description="Address queries without communication barriers with our GenAI chatbot offering multilingual support."
              icon=""
            />
            <FeatureCard
              title="AI Generated Analysis Report"
              description="AI-generated reports track progress, pain points, and recovery, adapting future plans through a feedback mechanism."
              icon=""
            />
            <FeatureCard
              title="1:1 Expert Sessions"
              description="Get a free 1:1 consultation with a physiotherapist to set a personalized plan of action for managing chronic pain."
              icon=""
            />
            <FeatureCard
              title="Google Fit Integration"
              description="Identify relationships between patient's Google Fit metrics and reported pain levels using AI."
              icon=""
            />
            <FeatureCard
              title="Dynamic and Adaptive Planning"
              description="Receive tailored exercise and diet plans suited to your specifications through our Computer Vision motion tracker and AI-generated reports."
              icon=""
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-screen min-h-screen bg-gradient-to-br from-[#131625] to-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12 pt-5">Pricing Plans</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <PricingCard 
                title="Free" 
                price="₹0"
                features={[
                  "AI Health Chatbot",
                  "One 1:1 Physiotherapist Consultation",
                ]}
                buttonText="Get Started"
              />
              <PricingCard 
                title="Personal" 
                price="₹8000"
                features={[
                  "3 months Validity",
                  "Renews @ ₹3000/mo",
                  "2 Live Physiotherapist Sessions per month",
                  "1 Live Nutritionist Session per month",
                  "AI Health Chatbot",
                ]}
                highlighted
                buttonText="Get Started"
              />
              <PricingCard 
                title="Enterprise" 
                price="Custom"
                features={[
                  "1 Year contract",
                  "Custom Pricing Based on Demand",
                  "Individual Employee Accounts",
                  "Individual access to AI Chatbot",
                ]}
                buttonText="Book a demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-black py-10 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Logo and Copyright */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">vitality AI</h3>
              <p className="text-gray-400">&copy; 2024 vitality.ai</p>
              <p className="text-gray-400">All rights reserved</p>
            </div>
            
            {/* Column 2: Useful Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3: Legal Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>

            {/* Column 4: Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            
          </div>
          <div className="mt-10 text-gray-400 text-center">
            <p>&copy; 2024 vitality.ai - All rights reserved by Team Geek6</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/20">
      <div className="text-5xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
