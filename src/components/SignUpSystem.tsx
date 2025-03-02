
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CalendarClock, 
  Trophy, 
  Users, 
  Bell 
} from "lucide-react";

export function SignUpSystem() {
  const features = [
    {
      icon: CalendarClock,
      title: "Deadline Reminders",
      description: "Get automatic notifications before sign-up deadlines close so you never miss your chance to play.",
    },
    {
      icon: Trophy,
      title: "Ranking System",
      description: "Our fair ranking system ensures team selection is based on performance and participation.",
    },
    {
      icon: Users,
      title: "Easy Team Selection",
      description: "Captains can view all sign-ups and create lineups with just a few clicks.",
    },
    {
      icon: Bell,
      title: "Match Notifications",
      description: "Receive alerts when you're selected for a match or when important updates are shared.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-tennis-green text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
        
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-tennis-yellow" />
            <h2 className="text-3xl font-bold text-tennis-white">
              Simplified BUCS Match Sign-Ups
            </h2>
          </div>
          <p className="text-muted-foreground text-white/80 max-w-2xl mx-auto">
            Our ranking-based system makes registering for matches easier 
            than ever. No more forms in group chats or missed deadlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-subtle"
                >
                  <feature.icon className="h-10 w-10 text-tennis-blue mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center"
            >
              <Button className="bg-tennis-blue hover:bg-tennis-blue/90">
                Sign Up for Next Match
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tennis-blue to-tennis-green rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-glass">
                <div className="bg-tennis-blue px-6 py-4 text-white">
                  <h3 className="font-semibold">Men's 1st Team Match Sign-Up</h3>
                  <p className="text-sm opacity-90">vs Glasgow University • Nov 12, 2023</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[
                      { name: "John Smith", ranking: 1, status: "Signed Up" },
                      { name: "Alex Johnson", ranking: 2, status: "Signed Up" },
                      { name: "Michael Chen", ranking: 3, status: "Signed Up" },
                      { name: "Daniel Park", ranking: 4, status: "Pending" },
                      { name: "Ryan Williams", ranking: 5, status: "Not Signed Up" },
                    ].map((player, i) => (
                      <div key={player.name} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tennis-blue to-tennis-green flex items-center justify-center text-white font-medium">
                            {player.ranking}
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">{player.name}</p>
                          </div>
                        </div>
                        <div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              player.status === "Signed Up"
                                ? "bg-green-100 text-green-800"
                                : player.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {player.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
                    <p className="flex items-center">
                      <Bell className="h-4 w-4 mr-2 text-tennis-blue" />
                      Sign-up deadline: <span className="font-semibold ml-1">Nov 9, 2023 at 6:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
