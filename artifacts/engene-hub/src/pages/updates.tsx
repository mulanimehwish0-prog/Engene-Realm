import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarDays, Megaphone, Music2, Sparkles } from "lucide-react";

const updates = [
  {
    id: 7,
    type: "Comeback",
    category: "comebacks",
    date: "Jul 12, 2024",
    title: "ROMANCE : UNTOLD Full Album",
    description: "Summer romance era launched with warm pastel aesthetics and irresistible title track Brought the Boys Out.",
    icon: Music2,
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200 border-l-rose-500"
  },
  {
    id: 8,
    type: "Performance",
    category: "performances",
    date: "Aug 2024",
    title: "FATE PLUS World Tour — Seoul Encore",
    description: "Two encore shows in Seoul sold out in minutes. Fans gathered in the rain and sang every word.",
    icon: Sparkles,
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-200 border-l-violet-500"
  },
  {
    id: 9,
    type: "Announcement",
    category: "announcements",
    date: "2024",
    title: "ENHYPEN 4th Anniversary",
    description: "Four years since debut. The group celebrated with a special fan event on Weverse and released a heartfelt message.",
    icon: Megaphone,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border-l-amber-500"
  },
  {
    id: 1,
    type: "Comeback",
    category: "comebacks",
    date: "July 12, 2024",
    title: "ROMANCE : UNTOLD Release",
    description: "ENHYPEN returns with their highly anticipated album 'ROMANCE : UNTOLD'. Stream now on all platforms!",
    icon: Music2,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 border-l-blue-500"
  },
  {
    id: 2,
    type: "Performance",
    category: "performances",
    date: "June 30, 2024",
    title: "KCON LA 2024 Headline",
    description: "ENHYPEN will be headlining KCON LA this year! Get ready for an unforgettable performance.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 border-l-purple-500"
  },
  {
    id: 3,
    type: "Event",
    category: "events",
    date: "June 24, 2024",
    title: "Happy Sunoo Day!",
    description: "Happy Birthday to our sunshine, Sunoo! Join the Weverse live tonight to celebrate together.",
    icon: CalendarDays,
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200 border-l-pink-500"
  },
  {
    id: 4,
    type: "Announcement",
    category: "announcements",
    date: "May 15, 2024",
    title: "FATE PLUS World Tour Encore",
    description: "Additional dates have been added to the FATE PLUS World Tour due to overwhelming demand.",
    icon: Megaphone,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border-l-amber-500"
  },
  {
    id: 5,
    type: "Comeback",
    category: "comebacks",
    date: "Nov 17, 2023",
    title: "ORANGE BLOOD Era Begins",
    description: "The music video for 'Sweet Venom' is out now. Dive into the new chapter of the blood series.",
    icon: Music2,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 border-l-orange-500"
  },
  {
    id: 6,
    type: "Performance",
    category: "performances",
    date: "Oct 28, 2023",
    title: "Music Bank Special Stage",
    description: "Don't miss a special Halloween themed performance on this week's Music Bank.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 border-l-purple-500"
  }
];

export default function Updates() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Latest Updates
        </h1>
        <p className="text-lg text-muted-foreground">
          Stay in the loop with comebacks, performances, and everything ENHYPEN.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center h-auto p-2 bg-transparent gap-2 mb-10">
            <TabsTrigger value="all" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all" data-testid="tab-all">All</TabsTrigger>
            <TabsTrigger value="comebacks" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all" data-testid="tab-comebacks">Comebacks</TabsTrigger>
            <TabsTrigger value="performances" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all" data-testid="tab-performances">Performances</TabsTrigger>
            <TabsTrigger value="events" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all" data-testid="tab-events">Events</TabsTrigger>
            <TabsTrigger value="announcements" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all" data-testid="tab-announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <UpdateList items={updates} />
          </TabsContent>
          <TabsContent value="comebacks" className="mt-0">
            <UpdateList items={updates.filter(u => u.category === "comebacks")} />
          </TabsContent>
          <TabsContent value="performances" className="mt-0">
            <UpdateList items={updates.filter(u => u.category === "performances")} />
          </TabsContent>
          <TabsContent value="events" className="mt-0">
            <UpdateList items={updates.filter(u => u.category === "events")} />
          </TabsContent>
          <TabsContent value="announcements" className="mt-0">
            <UpdateList items={updates.filter(u => u.category === "announcements")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function UpdateList({ items }: { items: typeof updates }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
        No updates found in this category.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((update, index) => {
        const Icon = update.icon;
        const colorClassMatch = update.color.match(/bg-[a-z]+-100/);
        const iconBg = colorClassMatch ? colorClassMatch[0].replace('100', '200') : 'bg-primary/20';
        
        return (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className={`glass dark:glass-dark border-l-4 ${update.color.match(/border-l-[a-z]+-[0-9]+/) || 'border-l-primary'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className={`p-4 rounded-2xl shrink-0 bg-gradient-to-br from-background to-${iconBg} shadow-inner`}>
                  <Icon className={`w-7 h-7 ${update.color.match(/text-[a-z]+-[0-9]+/) || 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className={`${update.color.replace(/border-l-[a-z]+-[0-9]+/, '')} bg-opacity-20 border-transparent`}>
                      {update.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 opacity-70" />
                      {update.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors text-foreground">
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {update.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
