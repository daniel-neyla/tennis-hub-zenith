
import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: "news" | "announcement";
  summary: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Summer Tournament Registration Open",
    date: "May 15, 2023",
    category: "announcement",
    summary: "Registration for the annual summer tournament is now open. Sign up before June 1st to secure your spot.",
    link: "#",
  },
  {
    id: 2,
    title: "New Team Captain Announced",
    date: "May 10, 2023",
    category: "news",
    summary: "Congratulations to Sarah Johnson on being elected as the new team captain for the upcoming season.",
    link: "#",
  },
  {
    id: 3,
    title: "Court Resurfacing Complete",
    date: "May 5, 2023",
    category: "news",
    summary: "All courts have been successfully resurfaced and are now open for play with improved bounce and grip.",
    link: "#",
  },
  {
    id: 4,
    title: "Monthly Social Event",
    date: "May 1, 2023",
    category: "announcement",
    summary: "Join us for our monthly social mixer on May 20th. All skill levels welcome, refreshments provided.",
    link: "#",
  },
];

export function LatestNews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tennis-green text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="h-8 w-8 text-tennis-yellow" />
            <h2 className="text-3xl font-bold">
              Latest News & Announcements
            </h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay up to date with the latest news, events, and important announcements from our tennis club.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-tennis-yellow/20 text-tennis-yellow">
                  {item.category === "news" ? (
                    <Newspaper className="h-5 w-5" />
                  ) : (
                    <Bell className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20">
                      {item.category === "news" ? "News" : "Announcement"}
                    </span>
                    <span className="text-sm text-white/70">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.summary}</p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-tennis-yellow hover:underline"
                  >
                    Read more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tennis-yellow text-tennis-green font-medium hover:bg-opacity-90 transition-colors"
          >
            View All News & Announcements
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
