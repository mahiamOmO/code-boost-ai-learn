
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Trophy, Code, Brain, Users, Calendar } from 'lucide-react';

export const FeatureSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Assignment System',
      description: 'Get personalized assignments with deadlines and track your progress',
      color: 'text-blue-600'
    },
    {
      icon: Trophy,
      title: 'Programming Contests',
      description: 'Compete in coding contests and climb the global leaderboard',
      color: 'text-purple-600'
    },
    {
      icon: Code,
      title: 'Project-Based Learning',
      description: 'Build real-world projects with industry-relevant problem statements',
      color: 'text-green-600'
    },
    {
      icon: Brain,
      title: 'AI Study Tools',
      description: 'Interactive explanations, text-to-speech, and personalized learning',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with mentors and peers for collaborative learning',
      color: 'text-red-600'
    },
    {
      icon: Calendar,
      title: 'Live Classes',
      description: 'Attend live sessions and access recorded solution explanations',
      color: 'text-indigo-600'
    }
  ];

  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to excel in programming
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our comprehensive platform combines personalized learning, competitive programming, and AI-powered tools
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
