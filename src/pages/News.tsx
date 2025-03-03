
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LatestNews } from "@/components/LatestNews";
import { 
  Newspaper, 
  Bell, 
  Search, 
  CalendarDays, 
  Tag,
  Filter,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// News category types
type NewsCategory = "all" | "announcements" | "results" | "events" | "general";

// Extended news item interface
interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: "news" | "announcement" | "result" | "event";
  summary: string;
  content?: string;
  author?: string;
  image?: string;
  tags?: string[];
  link: string;
}

// All news items for the page
const allNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "Summer Tournament Registration Open",
    date: "May 15, 2023",
    category: "announcement",
    summary: "Registration for the annual summer tournament is now open. Sign up before June 1st to secure your spot.",
    content: "Our annual summer tournament is just around the corner, and we're excited to announce that registration is now open! This tournament is open to players of all skill levels and will feature singles and doubles brackets. The tournament will run from June 15th to June 30th, with matches scheduled on weekends. Early bird registration is available until June 1st at a discounted rate. Don't miss your chance to compete and have fun with fellow club members!",
    author: "Club Committee",
    tags: ["tournament", "registration", "summer"],
    link: "/news/summer-tournament",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "New Team Captain Announced",
    date: "May 10, 2023",
    category: "news",
    summary: "Congratulations to Sarah Johnson on being elected as the new team captain for the upcoming season.",
    content: "We are pleased to announce that Sarah Johnson has been elected as the new team captain for the upcoming season. Sarah has been a dedicated member of our club for the past 5 years and has shown exceptional leadership skills both on and off the court. The team voted unanimously to elect Sarah as captain, recognizing her passion for the sport and her commitment to fostering a supportive team environment. Sarah will be taking over from James Thompson, who has done an outstanding job leading the team for the past two seasons.",
    author: "EULTC Committee",
    tags: ["team", "captain", "announcement"],
    link: "/news/new-captain",
    image: "https://images.unsplash.com/photo-1599586120726-80211e7429e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Court Resurfacing Complete",
    date: "May 5, 2023",
    category: "news",
    summary: "All courts have been successfully resurfaced and are now open for play with improved bounce and grip.",
    content: "We're excited to announce that the court resurfacing project has been completed ahead of schedule! All six courts have been professionally resurfaced with the latest acrylic coating, providing improved ball bounce, better grip, and reduced maintenance requirements. The new surface also includes enhanced line markings for better visibility during play. The courts will be open for regular play starting this weekend. We'd like to thank all members for their patience during the resurfacing process and the university for their support in funding this important facility upgrade.",
    author: "Facilities Manager",
    tags: ["courts", "facilities", "improvement"],
    link: "/news/court-resurfacing",
    image: "https://images.unsplash.com/photo-1622279488165-a1452c3079ed?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Monthly Social Event",
    date: "May 1, 2023",
    category: "announcement",
    summary: "Join us for our monthly social mixer on May 20th. All skill levels welcome, refreshments provided.",
    content: "Mark your calendars for our popular monthly social mixer on May 20th from 6-9pm at the club courts. This is a fantastic opportunity to meet fellow members, play some casual tennis, and enjoy refreshments in a relaxed setting. Players of all skill levels are welcome to join, and we'll organize friendly matches to ensure everyone gets to play. No registration required, just show up with your racket and enthusiasm! This month's event will feature a BBQ and live music from a local band. In case of rain, the event will be moved to the indoor courts at the university sports center.",
    author: "Social Committee",
    tags: ["social", "event", "casual"],
    link: "/news/may-social",
    image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "BUCS Championship Qualification",
    date: "April 25, 2023",
    category: "result",
    summary: "Our university team has qualified for the BUCS Championship finals after a thrilling victory against St Andrews.",
    content: "We're thrilled to announce that our university tennis team has qualified for the BUCS Championship finals! The qualification comes after a nail-biting match against St Andrews University, where our team showed exceptional skill and determination to secure a 6-3 victory. The championship finals will be held in London next month, and we're calling on all club members to show their support by attending if possible. The team has been training rigorously under the guidance of Coach Williams, and this qualification is a testament to their hard work and dedication throughout the season. Congratulations to all team members on this outstanding achievement!",
    author: "Team Coach",
    tags: ["BUCS", "competition", "victory"],
    link: "/news/bucs-qualification",
    image: "https://images.unsplash.com/photo-1531315396756-905d68d21b56?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Tennis Workshop for Beginners",
    date: "April 20, 2023",
    category: "event",
    summary: "Learn the basics of tennis in our upcoming workshop designed specifically for beginners. Register now.",
    content: "Are you new to tennis or looking to refresh your skills? Join us for our comprehensive Tennis Workshop for Beginners on April 29th from 10am to 3pm. This workshop will cover all the fundamentals, including proper grip, basic strokes, serving technique, and the rules of the game. Our experienced coaches will provide personalized feedback and guidance throughout the day. Equipment will be provided for those who don't have their own rackets. The workshop is free for club members and £15 for non-members. Spaces are limited to ensure quality instruction, so register soon to secure your spot!",
    author: "Coaching Team",
    tags: ["workshop", "beginners", "coaching"],
    link: "/news/beginners-workshop",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Club Championships Scheduled",
    date: "April 15, 2023",
    category: "announcement",
    summary: "The annual club championships will take place in July. Entry is now open for all members.",
    content: "The highlight of our tennis calendar is approaching - our annual Club Championships will be held throughout July, with finals weekend scheduled for July 29-30. Competitions will include Men's and Women's Singles, Doubles, and Mixed Doubles across different skill categories. This is a fantastic opportunity to challenge yourself, showcase your skills, and potentially add your name to our hall of fame! Entry is open to all club members, and the deadline for registration is June 15th. Entry forms are available at the clubhouse or can be submitted online through our member portal. We look forward to seeing you all on the courts for what promises to be an exciting and competitive event!",
    author: "Tournament Director",
    tags: ["championship", "competition", "tournament"],
    link: "/news/club-championships",
    image: "https://images.unsplash.com/photo-1591491719565-9639be292740?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "New Club Merchandise Available",
    date: "April 10, 2023",
    category: "news",
    summary: "Check out our new range of club merchandise, including performance shirts, jackets, and accessories.",
    content: "We're excited to unveil our brand new range of club merchandise! The collection includes performance shirts, training jackets, hoodies, caps, and water bottles, all featuring our club logo and colors. The clothing items are made from high-quality, breathable materials perfect for on-court action or casual wear. All items are available to purchase from the clubhouse or through our online store. Club members receive a 15% discount on all merchandise. Show your club pride and support while looking great both on and off the court!",
    author: "Club Secretary",
    tags: ["merchandise", "clothing", "club"],
    link: "/news/new-merchandise",
    image: "https://images.unsplash.com/photo-1556172795-ecaa63edb071?q=80&w=800&auto=format&fit=crop"
  }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter news items based on active category and search query
  const filteredNews = allNewsItems.filter((item) => {
    const matchesCategory = 
      activeCategory === "all" || 
      (activeCategory === "announcements" && item.category === "announcement") ||
      (activeCategory === "results" && item.category === "result") ||
      (activeCategory === "events" && item.category === "event") ||
      (activeCategory === "general" && item.category === "news");
    
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.content && item.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-tennis-green text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Newspaper className="h-10 w-10 text-tennis-yellow" />
                <h1 className="text-4xl md:text-5xl font-bold">Club News</h1>
              </div>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                Stay updated with the latest news, announcements, match results and events from EULTC
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="py-10 bg-tennis-light">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-xl p-6 shadow-md">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                {/* Categories Filter */}
                <div className="w-full lg:w-auto">
                  <Label htmlFor="category-filter" className="mb-2 text-tennis-dark font-medium block">
                    <Filter className="h-4 w-4 inline mr-2" />
                    Filter by Category
                  </Label>
                  <Tabs 
                    defaultValue="all" 
                    value={activeCategory}
                    onValueChange={(value) => {
                      setActiveCategory(value as NewsCategory);
                      setCurrentPage(1);
                    }}
                    className="w-full"
                  >
                    <TabsList className="bg-white/50 p-1 w-full grid grid-cols-2 md:grid-cols-5 gap-1">
                      <TabsTrigger value="all" className="data-[state=active]:bg-tennis-green data-[state=active]:text-white">
                        All
                      </TabsTrigger>
                      <TabsTrigger value="announcements" className="data-[state=active]:bg-tennis-green data-[state=active]:text-white">
                        Announcements
                      </TabsTrigger>
                      <TabsTrigger value="general" className="data-[state=active]:bg-tennis-green data-[state=active]:text-white">
                        News
                      </TabsTrigger>
                      <TabsTrigger value="results" className="data-[state=active]:bg-tennis-green data-[state=active]:text-white">
                        Results
                      </TabsTrigger>
                      <TabsTrigger value="events" className="data-[state=active]:bg-tennis-green data-[state=active]:text-white">
                        Events
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Search */}
                <div className="w-full lg:w-1/3">
                  <Label htmlFor="search" className="mb-2 text-tennis-dark font-medium block">
                    <Search className="h-4 w-4 inline mr-2" />
                    Search News
                  </Label>
                  <div className="relative">
                    <Input
                      id="search"
                      placeholder="Search by title, content or tags..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-tennis-dark mb-8">
              {filteredNews.length > 0 
                ? `${filteredNews.length} ${filteredNews.length === 1 ? 'Result' : 'Results'} Found` 
                : 'No Results Found'}
            </h2>

            {filteredNews.length === 0 ? (
              <div className="text-center py-16 glass-card rounded-xl">
                <Newspaper className="h-16 w-16 mx-auto text-tennis-green/30 mb-4" />
                <h3 className="text-xl font-semibold text-tennis-dark mb-2">No News Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItems.map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card rounded-xl overflow-hidden flex flex-col h-full hover:shadow-hover"
                    >
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                      )}
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={cn(
                            "text-xs font-medium px-3 py-1 rounded-full",
                            item.category === "announcement" && "bg-yellow-100 text-yellow-800",
                            item.category === "news" && "bg-blue-100 text-blue-800",
                            item.category === "result" && "bg-green-100 text-green-800",
                            item.category === "event" && "bg-purple-100 text-purple-800",
                          )}>
                            {item.category === "announcement" && "Announcement"}
                            {item.category === "news" && "News"}
                            {item.category === "result" && "Result"}
                            {item.category === "event" && "Event"}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {item.date}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-tennis-dark">{item.title}</h3>
                        
                        <p className="text-muted-foreground mb-4 flex-1">{item.summary}</p>
                        
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map(tag => (
                              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md flex items-center">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <Button variant="outline" className="mt-auto text-tennis-green border-tennis-green hover:bg-tennis-green/10">
                          Read Full Article
                        </Button>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          className={currentPage === page ? "bg-tennis-green hover:bg-tennis-green/90" : ""}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      ))}
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Latest News Section */}
        <LatestNews />
      </main>
      
      <Footer />
    </>
  );
};

export default News;
