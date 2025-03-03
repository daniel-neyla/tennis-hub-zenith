
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MatchReports } from "@/components/MatchReports";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  CalendarCheck, 
  MessageSquare, 
  ChevronRight, 
  Search 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Reports = () => {
  // Mock featured report
  const featuredReport = {
    id: 1,
    title: "Dominant Performance Against Glasgow",
    author: "John Smith",
    date: "October 15, 2023",
    content: `
      <p>Our men's 1st team showed incredible form in this weekend's fixture, winning all singles matches and securing a commanding 6-3 victory against Glasgow University.</p>
      <p>Team captain Jamie Lewis led from the front with a decisive 6-2, 6-3 win against Glasgow's number one. "The whole team played with confidence today," Jamie commented after the match. "We've been focusing on our return games in practice, and it really paid off today."</p>
      <p>Coach David Martin was particularly impressed with the doubles performances: "The partnerships we've developed this season are really starting to gel. The communication on court was excellent."</p>
      <p>This victory puts us in an excellent position at the top of the Northern Division, with three wins from three matches so far this season.</p>
      <p>Next week's away fixture against St Andrews will be a tougher test, but the team is confident they can maintain their unbeaten run.</p>
    `,
    tags: ["Men's 1st", "Home Match", "Victory"],
    comments: [
      { id: 1, author: "Alex Johnson", content: "Great performance team!", date: "October 16, 2023" },
      { id: 2, author: "Emma Davis", content: "The doubles pairs were fantastic to watch!", date: "October 16, 2023" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <div className="bg-tennis-green text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="h-8 w-8 text-tennis-yellow" />
              <h1 className="text-3xl font-bold">Match Reports</h1>
            </div>
            <p className="text-center max-w-2xl mx-auto text-white/80">
              Read detailed accounts of our matches, player performances, and key moments from throughout the season.
            </p>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="bg-tennis-light py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search reports..." 
                  className="pl-10"
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Teams</TabsTrigger>
                  <TabsTrigger value="mens1">Men's 1st</TabsTrigger>
                  <TabsTrigger value="mens2">Men's 2nd</TabsTrigger>
                  <TabsTrigger value="womens1">Women's 1st</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Featured report */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-tennis-light rounded-xl p-6 shadow-subtle"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-tennis-green" />
                  <span className="text-sm text-muted-foreground">{featuredReport.date}</span>
                </div>
                <div className="flex gap-2">
                  {featuredReport.tags.map(tag => (
                    <span key={tag} className="bg-tennis-green/20 text-tennis-green text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{featuredReport.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">Written by {featuredReport.author}</p>
              
              <ScrollArea className="h-[300px] rounded-md border p-4 bg-white">
                <div className="prose prose-green max-w-none" dangerouslySetInnerHTML={{ __html: featuredReport.content }} />
              </ScrollArea>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4">Comments ({featuredReport.comments.length})</h3>
                <div className="space-y-4">
                  {featuredReport.comments.map(comment => (
                    <div key={comment.id} className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* All reports section */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Recent Reports</h2>
            
            <MatchReports />
            
            <div className="flex justify-center mt-12">
              <Button className="bg-tennis-green text-white hover:bg-tennis-green/90">
                Load More Reports
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reports;
