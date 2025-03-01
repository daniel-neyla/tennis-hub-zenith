
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 rounded-2xl glass-card animate-hover overflow-hidden group",
        className
      )}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
      
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-xl bg-tennis-blue/10 text-tennis-blue mb-5",
        iconClassName
      )}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-semibold text-tennis-dark mb-3">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
