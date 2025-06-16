
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Trophy, Brain } from 'lucide-react';

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
        <div className="h-56 w-full bg-gradient-to-br from-blue-100 to-purple-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-4">
              <Brain className="h-16 w-16 text-blue-600" />
            </div>
            <p className="text-lg font-semibold text-gray-700">AI-Powered Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};
