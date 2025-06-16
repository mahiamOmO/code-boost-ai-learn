
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Trophy, Brain, Sparkles, Code, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: (user: any) => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const handleGetStarted = () => {
    const demoUser = {
      name: 'Demo User',
      email: 'demo@codebootai.com',
      level: 'Beginner',
      streak: 7,
      points: 850
    };
    onGetStarted(demoUser);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Master</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 xl:inline">
                  Web Development
                </span>{' '}
                <span className="block xl:inline">with AI</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Personalized learning paths, competitive programming contests, and AI-powered tools 
                to accelerate your coding journey. Join thousands of developers enhancing their skills.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  10,000+ Students
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-purple-600" />
                  500+ Contests
                </div>
                <div className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-green-600" />
                  AI-Powered
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-700"></div>
            <div className="absolute bottom-16 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10 text-center max-w-sm mx-auto px-6">
            {/* AI Brain with floating elements */}
            <div className="relative mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl mb-4 relative">
                <Brain className="h-12 w-12 text-white" />
                {/* Floating sparkles */}
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
                <Code className="absolute -bottom-2 -left-2 h-5 w-5 text-green-400 animate-pulse" />
              </div>
              
              {/* Floating feature icons */}
              <div className="absolute -top-4 -left-8">
                <div className="bg-white rounded-lg p-2 shadow-lg animate-bounce delay-100">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="absolute -top-2 -right-8">
                <div className="bg-white rounded-lg p-2 shadow-lg animate-bounce delay-300">
                  <Trophy className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-8">
                <div className="bg-white rounded-lg p-2 shadow-lg animate-bounce delay-500">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              AI-Powered Learning
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Experience personalized education with intelligent tutoring, 
              adaptive problem-solving, and real-time feedback.
            </p>
            
            {/* Interactive elements */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="font-semibold text-blue-600">Smart Hints</div>
                <div className="text-gray-600">AI-guided solutions</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="font-semibold text-purple-600">Adaptive</div>
                <div className="text-gray-600">Personalized pace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
