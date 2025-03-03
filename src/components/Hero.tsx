
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-tennis-green z-0" />
      
      {/* Tennis court T-line cross only */}
      <div className="absolute inset-0 z-0 hidden md:block">
  {/* Center line (vertical part of T) */}
  <div className="absolute top-0 bottom-0 left-[22%] w-6 bg-white/30 transform -translate-x-1/2" />
  
  {/* Horizontal part of T */}
  <div className="absolute top-[28%] left-0 right-0 h-6 bg-white/30 transform -translate-y-1/2" />
</div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
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
            className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
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
            <Link to="/login">
              <Button size="lg" className="px-8 bg-tennis-yellow hover:bg-tennis-yellow/90 text-tennis-green font-medium">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-white text-white hover:text-white hover:bg-white/10"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Register
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Tennis ball decoration */}
      <motion.div 
        className="absolute bottom-[10%] right-[8%] w-16 h-16 rounded-full bg-tennis-yellow opacity-80 z-0 overflow-hidden"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        {/* Curved lines for the tennis ball */}
  <div className="absolute inset-0">
    <div className="absolute w-full h-full before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-4 before:border-white before:left-[-65%]"></div>
    <div className="absolute w-full h-full after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:border-4 after:border-white after:right-[-65%]"></div>
  </div>
  </motion.div>
      
      <motion.div 
        className="absolute top-[15%] left-[12%] w-8 h-8 rounded-full bg-tennis-yellow opacity-60 z-0 overflow-hidden"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
         {/* Curved lines for the tennis ball */}
  <div className="absolute inset-0">
    <div className="absolute w-full h-full before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-2 before:border-white before:left-[-65%]"></div>
    <div className="absolute w-full h-full after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:border-2 after:border-white after:right-[-65%] "></div>
  </div>
  </motion.div>

    </div>
  );
}
