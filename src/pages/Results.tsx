import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  TrendingUp, 
  Award,
  Users,
  Calendar,
  MapPin
} from "lucide-react";

const Results = () => {
  // Mock data for team statistics
  const teamStats = {
    "Men's 1st": {
      played: 8,
      won: 6,
      lost: 2,
      winPercentage: 75,
      homeRecord: "4-1",
      awayRecord: "2-1",
      currentStreak: "W3",
    },
    "Men's 2nd": {
      played: 7,
      won: 4,
      lost: 3,
      winPercentage: 57,
      homeRecord: "3-1",
      awayRecord: "1-2",
      currentStreak: "W1",
    },
    "Women's 1st": {
      played: 6,
      won: 5,
      lost: 1,
      winPercentage: 83,
      homeRecord: "3-0",
      awayRecord: "2-1",
      currentStreak: "W4",
    },
  };

  // Mock data for match results
  const matchResults = {
    "Men's 1st": [
      {
        id: 1,
        date: "2023-10-15",
        opponent: "Glasgow University",
        score: "6-3",
        result: "win",
        venue: "Home",
      },
      {
        id: 2,
        date: "2023-10-22",
        opponent: "St Andrews University",
        score: "4-5",
        result: "loss",
        venue: "Away",
      },
      {
        id: 3,
        date: "2023-11-05",
        opponent: "Aberdeen University",
        score: "7-2",
        result: "win",
        venue: "Home",
      },
      {
        id: 4,
        date: "2023-11-12",
        opponent: "Stirling University",
        score: "5-4",
        result: "win",
        venue: "Away",
      },
    ],
    "Men's 2nd": [
      {
        id: 5,
        date: "2023-10-15",
        opponent: "Stirling University 2nd",
        score: "5-4",
        result: "win",
        venue: "Away",
      },
      {
        id: 6,
        date: "2023-10-29",
        opponent: "Heriot-Watt University",
        score: "3-6",
        result: "loss",
        venue: "Home",
      },
    ],
    "Women's 1st": [
      {
        id: 7,
        date: "2023-10-08",
        opponent: "Glasgow University",
        score: "8-1",
        result: "win",
        venue: "Home",
      },
      {
        id: 8,
        date: "2023-10-22",
        opponent: "St Andrews University",
        score: "5-4",
        result: "win",
        venue: "Away",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Content */}
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold text-tennis-dark mb-4">Match Results & Statistics</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Track our teams' performances throughout the season, with detailed match records,
              player statistics, and comprehensive team analytics.
            </p>
          </motion.div>
          
          <Tabs defaultValue="Men's 1st" className="w-full mb-16">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="Men's 1st">Men's 1st</TabsTrigger>
                <TabsTrigger value="Men's 2nd">Men's 2nd</TabsTrigger>
                <TabsTrigger value="Women's 1st">Women's 1st</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(teamStats).map(([team, stats]) => (
              <TabsContent key={team} value={team} className="space-y-10">
                {/* Team summary cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Record</h3>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-tennis-dark">
                        {stats.won}-{stats.lost}
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={stats.currentStreak.startsWith("W") ? "text-green-500" : "text-red-500"}>
                          {stats.currentStreak}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Win Rate</h3>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-tennis-dark">
                        {stats.winPercentage}%
                      </div>
                      <div className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-green-500">+5%</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Home</h3>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-tennis-dark">
                        {stats.homeRecord}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stats.homeRecord.split('-')[0]} wins
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="bg-white rounded-xl p-6 shadow-subtle"
                  >
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Away</h3>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-tennis-dark">
                        {stats.awayRecord}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stats.awayRecord.split('-')[0]} wins
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Match history */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-subtle overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold">Match History</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground">Date</th>
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground">Opponent</th>
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground">Score</th>
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground">Venue</th>
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground">Result</th>
                          <th className="px-6 py-4 text-left font-medium text-muted-foreground"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {matchResults[team].map((match) => (
                          <tr
                            key={match.id}
                            className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                          >
                            <td className="px-6 py-4">{new Date(match.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                            <td className="px-6 py-4 font-medium">{match.opponent}</td>
                            <td className="px-6 py-4">{match.score}</td>
                            <td className="px-6 py-4">{match.venue}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                  match.result === "win"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {match.result === "win" ? "Win" : "Loss"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <Button variant="ghost" size="sm" className="text-tennis-blue">
                                View Report <ChevronRight className="h-4 w-4 ml-1" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* Additional sections - Top performers, Upcoming matches */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white rounded-xl shadow-subtle overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Top Performers</h3>
                      <Award className="h-5 w-5 text-tennis-blue" />
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {[
                          { name: "John Smith", wins: 8, losses: 2, winRate: 80 },
                          { name: "Alex Johnson", wins: 7, losses: 3, winRate: 70 },
                          { name: "Michael Chen", wins: 6, losses: 4, winRate: 60 },
                        ].map((player, i) => (
                          <div key={player.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tennis-blue to-tennis-green flex items-center justify-center text-white font-medium">
                                {i + 1}
                              </div>
                              <div className="ml-4">
                                <p className="font-medium">{player.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {player.wins}-{player.losses} ({player.winRate}% win rate)
                                </p>
                              </div>
                            </div>
                            <div>
                              <span className="text-tennis-blue font-medium">{player.wins}</span> 
                              <span className="text-muted-foreground font-medium"> wins</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white rounded-xl shadow-subtle overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Upcoming Matches</h3>
                      <Calendar className="h-5 w-5 text-tennis-blue" />
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {[
                          { opponent: "Glasgow University", date: "Nov 19, 2023", venue: "Home" },
                          { opponent: "St Andrews University", date: "Dec 3, 2023", venue: "Away" },
                          { opponent: "Aberdeen University", date: "Dec 10, 2023", venue: "Home" },
                        ].map((match) => (
                          <div key={match.date} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-tennis-blue/30 hover:bg-blue-50/30 transition-colors">
                            <div>
                              <p className="font-medium">vs {match.opponent}</p>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {match.date}
                                <span className="mx-2">•</span>
                                <MapPin className="h-3 w-3 mr-1" />
                                {match.venue}
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="text-tennis-blue">
                              Sign Up
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
