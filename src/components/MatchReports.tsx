
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Award } from "lucide-react";

export function MatchReports() {
  const reports = [
    {
      id: 1,
      title: "Dominant Performance Against Glasgow",
      author: "John Smith",
      authorInitials: "JS",
      date: "Oct 15, 2023",
      excerpt:
        "Our team showed incredible form, winning all singles matches and securing a commanding 6-3 victory against Glasgow University.",
      likes: 24,
      comments: 8,
      tags: ["Men's 1st", "Home Match", "Victory"],
      featured: true,
    },
    {
      id: 2,
      title: "Narrow Defeat at St Andrews",
      author: "Alex Johnson",
      authorInitials: "AJ",
      date: "Oct 22, 2023",
      excerpt:
        "Despite strong performances from our top seeds, we narrowly lost 4-5 to St Andrews in a tightly contested away match.",
      likes: 18,
      comments: 12,
      tags: ["Men's 1st", "Away Match"],
    },
    {
      id: 3,
      title: "Women's Team Triumphs in Season Opener",
      author: "Emma Davis",
      authorInitials: "ED",
      date: "Oct 8, 2023",
      excerpt:
        "Our women's 1st team made a statement with an impressive 8-1 win over Glasgow, showing why they're favorites this season.",
      likes: 31,
      comments: 14,
      tags: ["Women's 1st", "Home Match", "Victory"],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-tennis-dark mb-4">
            Match Reports & Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read the latest match reports from our players and stay updated with the
            highlights, challenges, and achievements from every match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl shadow-subtle overflow-hidden animate-hover group relative ${
                report.featured
                  ? "md:col-span-2 md:row-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              {/* Card content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              <div className="p-6 bg-white h-full flex flex-col relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-tennis-blue text-white text-xs">
                      {report.authorInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{report.author}</p>
                    <p className="text-xs text-muted-foreground">{report.date}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-tennis-blue transition-colors">
                  {report.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {report.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {report.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Heart className="h-4 w-4 mr-1" />
                      {report.likes}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {report.comments}
                    </div>
                  </div>
                  
                  {report.featured && (
                    <div className="flex items-center text-amber-500 text-sm">
                      <Award className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Button className="bg-tennis-blue hover:bg-tennis-blue/90">
            Read All Match Reports
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
