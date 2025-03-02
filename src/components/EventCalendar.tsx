
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

// Mock events data
const events = [
  {
    id: 1,
    title: "Men's 1st vs Glasgow University",
    date: "2023-11-12",
    time: "14:00",
    type: "match",
    location: "Meadows Tennis Courts",
    participants: 6,
  },
  {
    id: 2,
    title: "Women's Training Session",
    date: "2023-11-14",
    time: "18:00",
    type: "training",
    location: "University Sports Hall",
    participants: 12,
  },
  {
    id: 3,
    title: "End of Season Social",
    date: "2023-11-18",
    time: "20:00",
    type: "social",
    location: "University Union",
    participants: 30,
  },
  {
    id: 4,
    title: "Men's 2nd vs Heriot-Watt",
    date: "2023-11-19",
    time: "13:00",
    type: "match",
    location: "Heriot-Watt University",
    participants: 6,
  },
  {
    id: 5,
    title: "Committee Meeting",
    date: "2023-11-21",
    time: "19:00",
    type: "meeting",
    location: "Online",
    participants: 8,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "match":
      return "bg-orange-500 text-white";
    case "training":
      return "bg-tennis-green text-white";
    case "social":
      return "bg-purple-500 text-white";
    case "meeting":
      return "bg-tennis-yellow text-tennis-dark";
    default:
      return "bg-gray-500 text-white";
  }
};

// Helper to convert date strings to Date objects
const parseDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Helper to check if a date has events
const hasEventOnDate = (date: Date, eventsList: typeof events) => {
  return eventsList.some(event => {
    const eventDate = parseDate(event.date);
    return (
      eventDate.getDate() === date.getDate() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getFullYear() === date.getFullYear()
    );
  });
};

// Helper to get events for a specific date
const getEventsForDate = (date: Date, eventsList: typeof events) => {
  return eventsList.filter(event => {
    const eventDate = parseDate(event.date);
    return (
      eventDate.getDate() === date.getDate() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getFullYear() === date.getFullYear()
    );
  });
};

export function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<typeof events>([]);

  // Update selected events when date changes
  React.useEffect(() => {
    if (date) {
      setSelectedEvents(getEventsForDate(date, events));
    } else {
      setSelectedEvents([]);
    }
  }, [date]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-tennis-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-tennis-green mb-4">
            Club Calendar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay organized with our comprehensive calendar of matches, training sessions,
            social events, and important club deadlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Calendar widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle overflow-hidden col-span-full md:col-span-1"
          >
            <div className="bg-tennis-green text-white p-4 text-center">
              <h3 className="font-medium">
                {date ? format(date, 'MMMM yyyy') : 'Select a date'}
              </h3>
            </div>
            <div className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  hasEvent: (date) => hasEventOnDate(date, events)
                }}
                modifiersClassNames={{
                  hasEvent: "bg-tennis-green/10 text-tennis-green font-medium"
                }}
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-orange-500">Matches</Badge>
                <Badge className="bg-tennis-green">Training</Badge>
                <Badge className="bg-purple-500">Social</Badge>
                <Badge className="bg-tennis-yellow text-tennis-dark">Meetings</Badge>
              </div>
            </div>
          </motion.div>

          {/* Upcoming events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-subtle col-span-full md:col-span-2"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-tennis-green">
                {selectedEvents.length > 0 
                  ? `Events on ${date ? format(date, 'MMMM d, yyyy') : ''}` 
                  : "Upcoming Events"}
              </h3>
              <div className="space-y-4">
                {(selectedEvents.length > 0 ? selectedEvents : events).map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start p-4 rounded-lg border border-gray-100 hover:border-tennis-green/30 hover:bg-tennis-green/5 transition-colors animate-hover"
                  >
                    <div className="mr-4 w-16 h-16 flex flex-col items-center justify-center rounded-lg bg-muted text-center">
                      <span className="text-sm text-muted-foreground">
                        {format(parseDate(event.date), 'MMM')}
                      </span>
                      <span className="text-2xl font-bold text-tennis-dark">
                        {format(parseDate(event.date), 'd')}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge className={getTypeColor(event.type)}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarClock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {event.participants} participants
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button className="bg-tennis-green hover:bg-tennis-green/90 text-white">
                  View Full Calendar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
