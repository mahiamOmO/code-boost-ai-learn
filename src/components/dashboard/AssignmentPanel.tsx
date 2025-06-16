
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AssignmentPanel = () => {
  const { toast } = useToast();
  const [assignments] = useState([
    {
      id: 1,
      title: 'React Component Lifecycle',
      description: 'Build a todo app demonstrating component lifecycle methods',
      dueDate: '2024-06-20',
      difficulty: 'Medium',
      points: 100,
      status: 'pending',
      timeLeft: '2 days'
    },
    {
      id: 2,
      title: 'JavaScript Array Methods',
      description: 'Implement custom array methods (map, filter, reduce)',
      dueDate: '2024-06-18',
      difficulty: 'Easy',
      points: 75,
      status: 'completed',
      timeLeft: 'Completed'
    },
    {
      id: 3,
      title: 'API Integration Project',
      description: 'Create a weather app using REST API',
      dueDate: '2024-06-25',
      difficulty: 'Hard',
      points: 150,
      status: 'pending',
      timeLeft: '7 days'
    }
  ]);

  const [submission, setSubmission] = useState('');

  const handleSubmit = (assignmentId: number) => {
    toast({
      title: "Assignment Submitted!",
      description: "Your submission has been received and will be reviewed.",
    });
    setSubmission('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
          <p className="text-gray-500">Complete assignments to earn points and improve your skills</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Progress</p>
          <Progress value={67} className="w-32 mt-1" />
          <p className="text-xs text-gray-400 mt-1">2 of 3 completed</p>
        </div>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    {assignment.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <FileText className="h-5 w-5 text-blue-600" />
                    )}
                    {assignment.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {assignment.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(assignment.difficulty)}>
                    {assignment.difficulty}
                  </Badge>
                  <span className="text-sm font-medium text-blue-600">
                    +{assignment.points} pts
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Due: {assignment.dueDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {assignment.timeLeft}
                  </div>
                </div>
                {assignment.status === 'pending' ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Submit Assignment</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Submit: {assignment.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Your Solution</label>
                          <Textarea
                            placeholder="Paste your code or provide a link to your repository..."
                            value={submission}
                            onChange={(e) => setSubmission(e.target.value)}
                            className="mt-1 min-h-[200px]"
                          />
                        </div>
                        <Button 
                          onClick={() => handleSubmit(assignment.id)}
                          className="w-full"
                        >
                          Submit Assignment
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
