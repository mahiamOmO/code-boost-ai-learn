
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, User, Plus, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

export const CommunityPanel = () => {
  const { toast } = useToast();
  const [questions] = useState([
    {
      id: 1,
      title: 'How to handle async operations in React?',
      author: 'Sarah M.',
      timestamp: '2 hours ago',
      likes: 12,
      replies: 5,
      tags: ['React', 'JavaScript', 'Async'],
      preview: 'I am struggling with managing async operations in React components...'
    },
    {
      id: 2,
      title: 'Best practices for CSS Grid vs Flexbox?',
      author: 'Mike R.',
      timestamp: '4 hours ago',
      likes: 8,
      replies: 3,
      tags: ['CSS', 'Layout', 'Design'],
      preview: 'When should I use CSS Grid over Flexbox for layouts?'
    },
    {
      id: 3,
      title: 'Algorithm optimization for large datasets',
      author: 'Alex C.',
      timestamp: '1 day ago',
      likes: 15,
      replies: 7,
      tags: ['Algorithms', 'Performance', 'Data Structures'],
      preview: 'Working with a dataset of 1M+ records, need optimization tips...'
    }
  ]);

  const [mentors] = useState([
    { name: 'Dr. Emily Chen', expertise: 'React & Frontend', rating: 4.9, sessions: 250 },
    { name: 'John Smith', expertise: 'Backend & APIs', rating: 4.8, sessions: 180 },
    { name: 'Lisa Wang', expertise: 'Data Structures', rating: 4.9, sessions: 320 }
  ]);

  const [newQuestion, setNewQuestion] = useState({ title: '', content: '', tags: '' });

  const handleAskQuestion = () => {
    toast({
      title: "Question Posted!",
      description: "Your question has been posted to the community.",
    });
    setNewQuestion({ title: '', content: '', tags: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Community Support</h2>
          <p className="text-gray-500">Connect with mentors and peers for collaborative learning</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Ask Question
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Ask the Community</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Question Title</label>
                <Input
                  placeholder="What's your question?"
                  value={newQuestion.title}
                  onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Detailed Description</label>
                <Textarea
                  placeholder="Provide more details about your question..."
                  value={newQuestion.content}
                  onChange={(e) => setNewQuestion({...newQuestion, content: e.target.value})}
                  className="min-h-[150px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tags (comma-separated)</label>
                <Input
                  placeholder="React, JavaScript, CSS..."
                  value={newQuestion.tags}
                  onChange={(e) => setNewQuestion({...newQuestion, tags: e.target.value})}
                />
              </div>
              <Button onClick={handleAskQuestion} className="w-full">
                Post Question
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Questions</h3>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-400" />
              <Input placeholder="Search questions..." className="w-64" />
            </div>
          </div>

          {questions.map((question) => (
            <Card key={question.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{question.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {question.author} • {question.timestamp}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{question.preview}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {question.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {question.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {question.replies}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Expert Mentors</CardTitle>
              <CardDescription>Connect with experienced developers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{mentor.name}</h4>
                      <span className="text-sm text-yellow-600">★ {mentor.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{mentor.expertise}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{mentor.sessions} sessions</span>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Groups</CardTitle>
              <CardDescription>Join collaborative learning sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-center py-4">
                <Users className="h-12 w-12 mx-auto text-gray-400" />
                <p className="text-gray-500">Study groups feature coming soon!</p>
                <Button variant="outline" size="sm">Join Waitlist</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
