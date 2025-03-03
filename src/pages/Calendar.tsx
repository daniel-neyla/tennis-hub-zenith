
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventCalendar } from "@/components/EventCalendar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarRange, Download, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Calendar = () => {
  const { toast } = useToast();

  const handleExportCalendar = () => {
    toast({
      title: "Calendar Exported",
      description: "Your calendar has been exported to iCal format.",
    });
  };

  const handleSubscribeCalendar = () => {
    toast({
      title: "Calendar Subscription Added",
      description: "You'll now receive updates when new events are added.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <div className="bg-tennis-green text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CalendarRange className="h-8 w-8 text-tennis-yellow" />
              <h1 className="text-3xl font-bold">Club Calendar</h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-white/80">
              Stay organized with our comprehensive calendar of matches, training sessions,
              social events, and important club deadlines.
            </p>
          </div>
        </div>
        
        {/* Filter and export section */}
        <div className="bg-tennis-light py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="matches">Matches</TabsTrigger>
                  <TabsTrigger value="training">Training</TabsTrigger>
                  <TabsTrigger value="social">Social</TabsTrigger>
                  <TabsTrigger value="meetings">Meetings</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleExportCalendar}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Calendar
                </Button>
                <Button variant="outline" size="sm" onClick={handleSubscribeCalendar}>
                  <CalendarRange className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EventCalendar />
            </motion.div>
          </div>
        </div>
        
        {/* Additional calendar views */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event cards would go here - using placeholders for now */}
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white rounded-lg shadow-subtle p-6 animate-hover"
                >
                  <div className="mb-4 text-tennis-green font-medium">
                    {i === 1 ? "Nov 18, 2023 • 20:00" : i === 2 ? "Nov 19, 2023 • 13:00" : "Nov 21, 2023 • 19:00"}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {i === 1 ? "End of Season Social" : i === 2 ? "Men's 2nd vs Heriot-Watt" : "Committee Meeting"}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {i === 1 
                      ? "Join us for the end of season celebration with food, drinks, and awards."
                      : i === 2
                      ? "Important away match against one of our main rivals in the league."
                      : "Monthly committee meeting to discuss club finances and upcoming events."}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {i === 1 ? "University Union" : i === 2 ? "Heriot-Watt University" : "Online"}
                    </span>
                    <span className={`
                      text-xs px-2 py-1 rounded-full
                      ${i === 1 ? "bg-purple-100 text-purple-800" : i === 2 ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"}
                    `}>
                      {i === 1 ? "Social" : i === 2 ? "Match" : "Meeting"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;
