import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarDays, Megaphone, Music2, Sparkles } from "lucide-react";

const updates = [
  {
    id: 1,
    type: "Comeback",
    category: "comebacks",
    date: "July 12, 2024",
    title: "ROMANCE : UNTOLD Release",
    description: "ENHYPEN returns with their highly anticipated album 'ROMANCE : UNTOLD'. Stream now on all platforms!",
    icon: Music2,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    type: "Performance",
    category: "performances",
    date: "June 30, 2024",
    title: "KCON LA 2024 Headline",
    description: "ENHYPEN will be headlining KCON LA this year! Get ready for an unforgettable performance.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 3,
    type: "Event",
    category: "events",
    date: "June 24, 2024",
    title: "Happy Sunoo Day!",
    description: "Happy Birthday to our sunshine, Sunoo! Join the Weverse live tonight to celebrate together.",
    icon: CalendarDays,
    color: "bg-pink-100 text-pink-800"
  },
  {
    id: 4,
    type: "Announcement",
    category: "announcements",
    date: "May 15, 2024",
    title: "FATE PLUS World Tour Encore",
    description: "Additional dates have been added to the FATE PLUS World Tour due to overwhelming demand.",
    icon: Megaphone,
    color: "bg-amber-100 text-amber-800"
  },
  {
    id: 5,
    type: "Comeback",
    category: "comebacks",
    date: "Nov 17, 2023",
    title: "ORANGE BLOOD Era Begins",
    description: "The music video for 'Sweet Venom' is out now. Dive into the new chapter of the blood series.",
    icon: Music2,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 6,
    type: "Performance",
    category: "performances",
    date: "Oct 28, 2023",
    title: "Music Bank Special Stage",
    description: "Don't miss a special Halloween themed performance on this week's Music Bank.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-800"
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
          <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-1 bg-muted/50 rounded-xl mb-8">
            <TabsTrigger value="all" className="rounded-lg py-2.5" data-testid="tab-all">All</TabsTrigger>
            <TabsTrigger value="comebacks" className="rounded-lg py-2.5" data-testid="tab-comebacks">Comebacks</TabsTrigger>
            <TabsTrigger value="performances" className="rounded-lg py-2.5" data-testid="tab-performances">Performances</TabsTrigger>
            <TabsTrigger value="events" className="rounded-lg py-2.5" data-testid="tab-events">Events</TabsTrigger>
            <TabsTrigger value="announcements" className="rounded-lg py-2.5" data-testid="tab-announcements">Announcements</TabsTrigger>
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
    <div className="space-y-4">
      {items.map((update, index) => {
        const Icon = update.icon;
        return (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-md transition-shadow group border-primary/10">
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className={`p-3 rounded-xl shrink-0 ${update.color} bg-opacity-20`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="secondary" className={`${update.color} bg-opacity-10 border-transparent hover:bg-opacity-20`}>
                      {update.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {update.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
