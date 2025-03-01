
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-tennis-blue/5 to-tennis-green/5 z-0" />
      
      {/* Tennis court lines - decorative background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full border-4 border-tennis-dark m-auto">
          <div className="h-full w-1/2 border-r-4 border-tennis-dark relative">
            <div className="absolute w-[30%] h-full right-0 border-l-4 border-tennis-dark" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-tennis-dark sm:text-5xl md:text-6xl mb-6">
              <span className="block">One platform for all your</span>
              <span className="block text-tennis-blue mt-2">
                tennis club needs
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            EULTC's comprehensive hub centralizing match sign-ups, results, reports, and 
            reimbursements—simplifying communication and administration for players, 
            captains, and committee members.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="px-8 bg-tennis-blue hover:bg-tennis-blue/90">
              Sign Up for Matches
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
            >
              View Match Results
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Tennis ball decoration */}
      <motion.div 
        className="absolute bottom-[10%] right-[8%] w-16 h-16 rounded-full bg-tennis-yellow opacity-80 z-0"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-[15%] left-[12%] w-8 h-8 rounded-full bg-tennis-yellow opacity-60 z-0"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
}
