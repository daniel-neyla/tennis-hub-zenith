
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0" />
      
      {/* Tennis court lines - detailed version */}
      <div className="absolute inset-0 z-0">
        {/* Outer border */}
        <div className="h-full w-full border-4 border-tennis-green/30 m-auto relative">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-tennis-green/20 transform -translate-x-1/2" />
          
          {/* Service boxes */}
          <div className="absolute top-1/4 bottom-1/4 left-0 right-0 border-2 border-tennis-green/20">
            {/* Center service line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-tennis-green/20 transform -translate-x-1/2" />
            
            {/* Horizontal service line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-tennis-green/20 transform -translate-y-1/2" />
          </div>
          
          {/* Baseline extras */}
          <div className="absolute bottom-0 left-1/3 right-1/3 h-4 border-l-2 border-r-2 border-tennis-green/20" />
          <div className="absolute top-0 left-1/3 right-1/3 h-4 border-l-2 border-r-2 border-tennis-green/20" />
        </div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-tennis-green sm:text-5xl md:text-6xl mb-6">
              <span className="block">One platform for all your</span>
              <span className="block text-tennis-yellow mt-2 drop-shadow-sm">
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
            <Button size="lg" className="px-8 bg-tennis-green hover:bg-tennis-green/90 text-white">
              Sign Up for Matches
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-tennis-green text-tennis-green hover:bg-tennis-green/10"
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
