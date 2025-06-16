
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, Clock, Award } from 'lucide-react';

export const ContestPanel = () => {
  const [contests] = useState([
    {
      id: 1,
      title: 'Weekly Algorithm Challenge',
      description: 'Solve 5 algorithmic problems in 2 hours',
      startTime: '2024-06-20 18:00',
      duration: '2 hours',
      participants: 1247,
      prize: '₹5,000',
      status: 'upcoming',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Frontend Sprint Contest',
      description: 'Build a responsive web page from design mockup',
      startTime: '2024-06-18 15:00',
      duration: '3 hours',
      participants: 892,
      prize: '₹3,000',
      status: 'completed',
      difficulty: 'Easy',
      rank: 23
    }
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: 'Alex Chen', points: 2840, contests: 45 },
    { rank: 2, name: 'Sarah Johnson', points: 2755, contests: 38 },
    { rank: 3, name: 'Mike Rodriguez', points: 2690, contests: 42 },
    { rank: 4, name: 'You', points: 2450, contests: 28 },
    { rank: 5, name: 'Lisa Wang', points: 2380, contests: 35 }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Programming Contests</h2>
          <p className="text-gray-500">Compete with developers worldwide and climb the leaderboard</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold">Active & Upcoming Contests</h3>
          {contests.map((contest) => (
            <Card key={contest.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      {contest.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {contest.description}
                    </CardDescription>
                  </div>
                  <Badge variant={contest.status === 'upcoming' ? 'default' : 'secondary'}>
                    {contest.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {contest.startTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {contest.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    {contest.participants} participants
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-gray-400" />
                    Prize: {contest.prize}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Badge className={
                    contest.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    contest.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {contest.difficulty}
                  </Badge>
                  {contest.status === 'upcoming' ? (
                    <Button>Register</Button>
                  ) : contest.rank ? (
                    <div className="text-right">
                      <p className="text-sm font-medium">Your Rank: #{contest.rank}</p>
                      <p className="text-xs text-gray-500">Great job!</p>
                    </div>
                  ) : (
                    <Button variant="outline">View Results</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.name === 'You' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                        user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.contests} contests</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">{user.points}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
