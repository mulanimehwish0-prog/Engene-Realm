import { FloatingParticles } from "@/components/FloatingParticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronRight, Music2, Sparkles, Megaphone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const latestUpdates = [
  { 
    id: 1, 
    type: 'Comeback', 
    date: 'July 12, 2024', 
    title: 'ROMANCE : UNTOLD', 
    description: 'Their summer romance chapter. Fresh concept, warm vibes, new chapter begins.',
    icon: Music2,
    borderColor: 'border-l-rose-500'
  },
  { 
    id: 2, 
    type: 'Performance', 
    date: 'June 2024', 
    title: 'KCON LA 2024', 
    description: 'ENHYPEN headlined KCON LA with an unforgettable setlist.',
    icon: Sparkles,
    borderColor: 'border-l-violet-500'
  },
  { 
    id: 3, 
    type: 'Announcement', 
    date: '2024', 
    title: 'FATE PLUS World Tour', 
    description: 'Additional encore dates added across Asia and North America due to overwhelming demand.',
    icon: Megaphone,
    borderColor: 'border-l-amber-500'
  }
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)]">
      <FloatingParticles />
      
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent blur-3xl pointer-events-none z-[-1]" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20 glass">
            For the fans, by the fans
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Welcome, Engene <span className="inline-block">💙</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-4">
            Step into our cozy corner. Formed on I-Land in 2020 under BELIFT LAB, ENHYPEN is known for their mesmerizing border and dark conceptual storytelling. This is a dedicated space to celebrate their journey, music, and the bond we share.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20">7 Members</Badge>
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20">Since 2020</Badge>
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20">6 Eras</Badge>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/members" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5" data-testid="button-home-members">
              Meet the Members
            </Link>
            <Link href="/albums" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5" data-testid="button-home-albums">
              Explore Era
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="mt-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold">Featured Era</h2>
            <Link href="/albums" className="text-sm font-medium text-primary flex items-center hover:underline transition-all" data-testid="link-featured-all">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <Card className="overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#2a1b38] to-[#1a0f2e] text-white hover:[box-shadow:0_0_40px_rgba(220,38,38,0.2)]">
            <div className="grid md:grid-cols-2 gap-0 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit bg-red-900/40 text-red-200 border-red-800/50 mb-6 backdrop-blur-md">May 2023</Badge>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">DARK BLOOD</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  A romantic and dark fantasy concept centered around sacrifice and destiny. 
                  Featuring the hit title track "Bite Me", this era showcased a more mature and 
                  theatrical side of the group.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">01</span>
                    <span className="font-medium">Bite Me</span>
                    <Badge variant="outline" className="ml-auto border-red-500/30 text-red-200 bg-red-950/30 text-[10px] tracking-widest">TITLE</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">02</span>
                    <span className="font-medium">Sacrifice (Eat Me Up)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">03</span>
                    <span className="font-medium">Chaconne</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-red-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
                {/* Decorative image placeholder panel */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent opacity-80" />
                <h2 className="text-8xl md:text-9xl font-serif font-bold text-white/10 tracking-tighter rotate-[-10deg] scale-150 whitespace-nowrap select-none">DARK BLOOD</h2>
                {/* <img src="cover-image-url" alt="DARK BLOOD" className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-60" /> */}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-32 max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold">Latest News</h2>
            <Link href="/updates" className="text-sm font-medium text-primary flex items-center hover:underline transition-all">
              View all updates <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestUpdates.map((update, i) => {
              const Icon = update.icon;
              return (
                <Card key={update.id} className={`glass dark:glass-dark overflow-hidden border-l-4 ${update.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent text-xs">
                        {update.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                        <CalendarDays className="w-3 h-3" />
                        {update.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2 text-foreground">{update.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{update.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
