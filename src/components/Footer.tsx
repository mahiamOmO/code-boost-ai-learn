
import { Code, Mail, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">CodeBoost AI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the next generation of developers with AI-powered learning, 
              competitive programming, and personalized career guidance.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@codeboostai.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Assignments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CodeBoost AI. All rights reserved. Built with ❤️ for developers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};
