
import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { MatchResults } from "@/components/MatchResults";
import { SignUpSystem } from "@/components/SignUpSystem";
import { MatchReports } from "@/components/MatchReports";
import { EventCalendar } from "@/components/EventCalendar";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";
import { 
  CalendarRange, 
  Trophy, 
  ClipboardList, 
  Receipt, 
  CreditCard, 
  MessageSquare, 
  Bell, 
  Vote 
} from "lucide-react";

const features = [
  {
    title: "Match Sign-Ups",
    description: "Simplify the process with our ranking-based system for efficient, fair team selection.",
    icon: ClipboardList,
  },
  {
    title: "Match Results & Stats",
    description: "Track team performance with comprehensive statistics and historical data.",
    icon: Trophy,
  },
  {
    title: "Interactive Match Reports",
    description: "Share your match experience, with comments, likes, and rewards for top reports.",
    icon: MessageSquare,
  },
  {
    title: "Reimbursement System",
    description: "Submit travel expenses easily with automatic verification for away matches.",
    icon: Receipt,
  },
  {
    title: "Membership Fee Tracking",
    description: "Monitor your payment status and upload proof of payment directly on the platform.",
    icon: CreditCard,
  },
  {
    title: "Visual Calendar",
    description: "Never miss a match, training session, or social event with our comprehensive calendar.",
    icon: CalendarRange,
  },
  {
    title: "Notifications",
    description: "Stay updated with important club announcements and match information.",
    icon: Bell,
  },
  {
    title: "Club Polls",
    description: "Have your say in club decisions with our integrated polling system.",
    icon: Vote,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-tennis-green mb-4">
              One Platform for Everything Tennis
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive hub brings together all the features you need to make
              your club experience more organized, engaging, and enjoyable.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest News & Announcements */}
      <LatestNews />
      
      {/* Match Results Section */}
      <MatchResults />
      
      {/* Sign-Up System */}
      <SignUpSystem />
      
      {/* Match Reports */}
      <MatchReports />
      
      {/* Event Calendar */}
      <EventCalendar />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
