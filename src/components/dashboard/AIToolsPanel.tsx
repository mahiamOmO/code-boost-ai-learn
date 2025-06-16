
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Play, Pause, Volume2, Brain, MessageSquare, Book } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AIToolsPanel = () => {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [studyText, setStudyText] = useState('React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.');
  const [aiQuestion, setAiQuestion] = useState('');

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(studyText);
        utterance.onend = () => setIsPlaying(false);
        speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    } else {
      toast({
        title: "Not Supported",
        description: "Text-to-speech is not supported in your browser.",
        variant: "destructive"
      });
    }
  };

  const handleAIExplanation = () => {
    toast({
      title: "AI Explanation Generated!",
      description: "The AI has provided a detailed explanation of your question.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">AI-Powered Study Tools</h2>
        <p className="text-gray-500">Enhance your learning with intelligent AI features</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Text-to-Speech Tool */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-blue-600" />
              Text-to-Speech
            </CardTitle>
            <CardDescription>
              Convert study materials to audio for better retention
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your study material here..."
              value={studyText}
              onChange={(e) => setStudyText(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex gap-2">
              <Button onClick={handleTextToSpeech} className="flex items-center gap-2">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button variant="outline" onClick={() => setStudyText('')}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Q&A Tool */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              AI Q&A Assistant
            </CardTitle>
            <CardDescription>
              Ask questions and get instant explanations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Ask me anything about programming, algorithms, or web development..."
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              className="min-h-[120px]"
            />
            <Button onClick={handleAIExplanation} className="w-full">
              Get AI Explanation
            </Button>
          </CardContent>
        </Card>

        {/* Study Materials */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-green-600" />
              Interactive Study Materials
            </CardTitle>
            <CardDescription>
              AI-curated learning resources based on your progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'React Hooks Guide', progress: 75, difficulty: 'Medium' },
                { title: 'JavaScript Async/Await', progress: 60, difficulty: 'Hard' },
                { title: 'CSS Grid Layout', progress: 90, difficulty: 'Easy' },
                { title: 'API Integration', progress: 30, difficulty: 'Medium' },
                { title: 'Git Version Control', progress: 100, difficulty: 'Easy' },
                { title: 'Database Design', progress: 45, difficulty: 'Hard' }
              ].map((material, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{material.title}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        material.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        material.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {material.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{material.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${material.progress}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
