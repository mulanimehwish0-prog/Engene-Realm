import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarDays, Megaphone, Music2, Sparkles, type LucideIcon } from "lucide-react";
import { updates as allUpdates, type Update, type UpdateCategory } from "@/data/updates";

const CATEGORY_STYLE: Record<UpdateCategory, {
  Icon: LucideIcon;
  badgeClass: string;
  borderClass: string;
  iconClass: string;
}> = {
  comebacks:     { Icon: Music2,       badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200",     borderClass: "border-l-rose-500",   iconClass: "text-rose-600 dark:text-rose-300" },
  performances:  { Icon: Sparkles,     badgeClass: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-200", borderClass: "border-l-violet-500", iconClass: "text-violet-600 dark:text-violet-300" },
  events:        { Icon: CalendarDays, badgeClass: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200",     borderClass: "border-l-pink-500",   iconClass: "text-pink-600 dark:text-pink-300" },
  announcements: { Icon: Megaphone,    badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200", borderClass: "border-l-amber-500",  iconClass: "text-amber-600 dark:text-amber-300" },
};

const updates = [...allUpdates].sort((a, b) => b.date.localeCompare(a.date));

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

function UpdateList({ items }: { items: Update[] }) {
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
        const { Icon, badgeClass, borderClass, iconClass } = CATEGORY_STYLE[update.category];
        return (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className={`glass dark:glass-dark border-l-4 ${borderClass} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 rounded-2xl shrink-0 bg-muted/40">
                  <Icon className={`w-7 h-7 ${iconClass}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className={`${badgeClass} border-transparent`}>
                      {update.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 opacity-70" />
                      {update.dateDisplay}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-foreground">
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
