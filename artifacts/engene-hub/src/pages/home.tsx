import { FloatingParticles } from "@/components/FloatingParticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronRight, Music2, Sparkles, Megaphone, CalendarDays, Globe } from "lucide-react";
import { motion } from "framer-motion";

const latestUpdates = [
  {
    id: 1,
    type: "Comeback",
    date: "2025",
    title: "SIN : VANISH Era Begins",
    description: "ENHYPEN returns with their most cinematic era yet. A darker, more mature concept exploring the weight of sin and the act of vanishing.",
    icon: Music2,
    borderColor: "border-l-violet-500",
  },
  {
    id: 2,
    type: "World Tour",
    date: "2026",
    title: "ENHYPEN World Tour 2026",
    description: "ENHYPEN announces their 2026 world tour spanning Asia, North America, and Europe. Tickets on sale now — Engenes, get ready.",
    icon: Globe,
    borderColor: "border-l-blue-500",
  },
  {
    id: 3,
    type: "Performance",
    date: "Jan 2026",
    title: "Golden Disc Awards 2026",
    description: "ENHYPEN took home Daesang at the Golden Disc Awards, cementing their place as one of the defining acts of their generation.",
    icon: Sparkles,
    borderColor: "border-l-amber-500",
  },
  {
    id: 4,
    type: "Announcement",
    date: "Feb 2026",
    title: "5th Debut Anniversary Event",
    description: "To celebrate five years since debut, BELIFT LAB announced a special fan meeting and exclusive merchandise drop for Engenes worldwide.",
    icon: Megaphone,
    borderColor: "border-l-rose-500",
  },
  {
    id: 5,
    type: "Performance",
    date: "Mar 2026",
    title: "Coachella 2026 Stage",
    description: "ENHYPEN made history performing at Coachella 2026, delivering a stunning set that trended worldwide and introduced them to a whole new audience.",
    icon: Sparkles,
    borderColor: "border-l-green-500",
  },
  {
    id: 6,
    type: "Release",
    date: "Apr 2026",
    title: "Special Fan Song Release",
    description: "A surprise gift to Engenes — a heartfelt self-composed fan song released ahead of the world tour, written by the members themselves.",
    icon: Music2,
    borderColor: "border-l-pink-500",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)]">
      <FloatingParticles />

      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent blur-3xl pointer-events-none z-[-1]" />

      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* ── Hero ───────────────────────────────────────────── */}
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
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20">9 Eras</Badge>
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/20">Active 2026</Badge>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/members" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5" data-testid="button-home-members">
              Meet the Members
            </Link>
            <Link href="/albums" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5" data-testid="button-home-albums">
              Explore Eras
            </Link>
          </div>
        </motion.div>

        {/* ── Latest Updates ──────────────────────────────────── */}
        <motion.div
          className="mt-32 max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold">Latest News</h2>
              <p className="text-sm text-muted-foreground mt-1">2025 – 2026 updates</p>
            </div>
            <Link href="/updates" className="text-sm font-medium text-primary flex items-center hover:underline transition-all" data-testid="link-updates-all">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestUpdates.map((update, i) => {
              const Icon = update.icon;
              return (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className={`glass dark:glass-dark overflow-hidden border-l-4 ${update.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 rounded-lg bg-primary/10">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent text-xs">
                          {update.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium ml-auto">
                          <CalendarDays className="w-3 h-3" />
                          {update.date}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-serif mb-2 text-foreground leading-snug">{update.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{update.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Featured Era ────────────────────────────────────── */}
        <motion.div
          className="mt-8 max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold">Latest Era</h2>
            <Link href="/albums" className="text-sm font-medium text-primary flex items-center hover:underline transition-all" data-testid="link-featured-all">
              Full discography <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <Card className="overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#0d0d1a] via-[#1a0e2e] to-[#0a1628] text-white" style={{ boxShadow: "0 0 60px rgba(99,60,180,0.18)" }}>
            <div className="grid md:grid-cols-2 gap-0 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit bg-violet-900/50 text-violet-200 border-violet-700/40 mb-6 backdrop-blur-md">Latest Era · 2025</Badge>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">SIN : VANISH</h3>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  ENHYPEN's most cinematic era. A haunting exploration of sin, consequence, and the act of disappearing — blending gothic storytelling with their signature conceptual depth. Darker, bolder, and more theatrical than anything before.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">01</span>
                    <span className="font-bold">SIN : VANISH</span>
                    <Badge variant="outline" className="ml-auto border-violet-500/30 text-violet-200 bg-violet-950/30 text-[10px] tracking-widest">TITLE</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">02</span>
                    <span className="font-medium">Pray 4 U</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">03</span>
                    <span className="font-medium">Criminal Mind</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-violet-900 via-indigo-950 to-slate-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-transparent to-transparent opacity-70" />
                {/* Decorative glow orbs */}
                <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-indigo-500/15 blur-2xl" />
                <h2 className="text-7xl md:text-8xl font-serif font-bold text-white/10 tracking-tighter rotate-[-8deg] scale-125 whitespace-nowrap select-none z-10">SIN</h2>
                {/* <img src="sin-vanish-cover-url" alt="SIN : VANISH" className="w-full h-full object-cover absolute inset-0" /> */}
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
