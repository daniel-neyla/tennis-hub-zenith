
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  ],
  "Men's 2nd": [
    {
      id: 4,
      date: "2023-10-15",
      opponent: "Stirling University 2nd",
      score: "5-4",
      result: "win",
      venue: "Away",
    },
    {
      id: 5,
      date: "2023-10-29",
      opponent: "Heriot-Watt University",
      score: "3-6",
      result: "loss",
      venue: "Home",
    },
  ],
  "Women's 1st": [
    {
      id: 6,
      date: "2023-10-08",
      opponent: "Glasgow University",
      score: "8-1",
      result: "win",
      venue: "Home",
    },
    {
      id: 7,
      date: "2023-10-22",
      opponent: "St Andrews University",
      score: "5-4",
      result: "win",
      venue: "Away",
    },
  ],
};

export function MatchResults() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-tennis-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4 gap-3 text-tennis-green">
            <Trophy className="h-8 w-8" />
            <h2 className="text-3xl font-bold">
              Match Results & Stats
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track our teams' performances throughout the season with up-to-date
            results and comprehensive statistics.
          </p>
        </motion.div>

        <Tabs defaultValue="Men's 1st" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="Men's 1st">Men's 1st</TabsTrigger>
              <TabsTrigger value="Men's 2nd">Men's 2nd</TabsTrigger>
              <TabsTrigger value="Women's 1st">Women's 1st</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(matchResults).map(([team, matches]) => (
            <TabsContent key={team} value={team} className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-subtle">
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
                    {matches.map((match) => (
                      <motion.tr
                        key={match.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
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
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button className="bg-tennis-green hover:bg-tennis-green/90">
                  View All {team} Results
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
