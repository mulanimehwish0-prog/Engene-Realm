import { FloatingParticles } from "@/components/FloatingParticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronRight, Music2, Sparkles, Megaphone, CalendarDays, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { getLatestUpdates, type UpdateCategory } from "@/data/updates";

const CATEGORY_STYLE: Record<UpdateCategory, { borderColor: string; Icon: LucideIcon }> = {
  comebacks:     { borderColor: "border-l-pink-400",   Icon: Music2 },
  performances:  { borderColor: "border-l-violet-500", Icon: Sparkles },
  events:        { borderColor: "border-l-amber-500",  Icon: CalendarDays },
  announcements: { borderColor: "border-l-blue-500",   Icon: Megaphone },
};

const latestUpdates = getLatestUpdates(6);

export default function Home() {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)]">
      <FloatingParticles />

      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent blur-3xl pointer-events-none z-[-1]" />

      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
        >

          {/* image area */}
          <div
            className="relative h-[420px] rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url("https://www.rollingstone.com/wp-content/uploads/2026/01/enhyphen-knife-exclusive.jpg?w=1581&h=1054&crop=1")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent"></div>

          </div>


          {/* text starts after fade */}
          <div className="relative -mt-20 z-10 space-y-6">

            <Badge>
              For the fans, by the fans
            </Badge>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
              Welcome, Engene 💙
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Step into our cozy corner. Formed on I-Land in 2020 under BELIFT LAB, ENHYPEN is known for their mesmerizing border and dark conceptual storytelling. This is a dedicated space to celebrate their journey, music, and the bond we share.
            </p>

          </div>

        
        {/* Stat badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            {[
              { label: "7 Members", bg: "hsl(0, 0%, 0%)" },
              { label: "Since 2020", bg: "hsl(0, 0%, 0%)" },
              { label: "12 Releases", bg: "hsl(0, 0%, 0%)" },
              { label: "2025–2026 Active", bg: "hsl(0, 0%, 0%)" },
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center rounded-full text-white font-bold font-serif text-sm px-5 py-2 transition-transform hover:-translate-y-0.5"
                style={{
                  background: s.bg,
                  border: "2.5px solid white",
                  boxShadow: "2px 3px 0 rgba(0, 0, 128, 1)",
                }}
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 font-bold font-serif text-navy blue rounded-full px-9 py-3.5 transition-all hover:-translate-y-1"
             
              data-testid="button-home-members"
            >
              Meet the Members
            </Link>
            <Link
              href="/albums"
              className="inline-flex items-center gap-2 font-bold font-serif rounded-full px-9 py-3.5 bg-navy blue transition-all hover:-translate-y-1"
              
              data-testid="button-home-albums"
            >
              Full Discography
            </Link>
          </div>
        </motion.div>
      
        {/* ── Latest Updates ───────────────────────────────────────── */}
        <motion.div
          className="mt-32 max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold">Latest Updates</h2>
              <p className="text-sm text-muted-foreground mt-1">2024 – 2026</p>
            </div>
            <Link href="/updates" className="text-sm font-medium text-primary flex items-center hover:underline transition-all" data-testid="link-updates-all">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestUpdates.map((update, i) => {
              const { Icon, borderColor } = CATEGORY_STYLE[update.category];
              return (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className={`glass dark:glass-dark overflow-hidden border-l-4 ${borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent text-xs">
                          {update.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium ml-auto shrink-0">
                          <CalendarDays className="w-3 h-3" />
                          {update.dateDisplay}
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

        {/* ── Featured Era ─────────────────────────────────────────── */}
        <motion.div
          className="mt-8 max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold">Featured Era</h2>
            <Link href="/albums" className="text-sm font-medium text-primary flex items-center hover:underline transition-all" data-testid="link-featured-all">
              Full discography <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <Card className="overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#2a1b38] to-[#1a0f2e] text-white hover:[box-shadow:0_0_40px_rgba(220,38,38,0.2)]">
            <div className="grid md:grid-cols-2 gap-0 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit bg-red-900/40 text-red-200 border-red-800/50 mb-6 backdrop-blur-md">4th Mini Album · May 2023</Badge>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">DARK BLOOD</h3>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  A dark romantic fantasy of sacrifice and fate. Bite Me was theatrical, vampiric, and impossible to look away from — a gothic storytelling era that marked a defining moment for the group.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">01</span>
                    <span className="font-medium">Fate</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">02</span>
                    <span className="font-bold">Bite Me</span>
                    <Badge variant="outline" className="ml-auto border-red-500/30 text-red-200 bg-red-950/30 text-[10px] tracking-widest">TITLE</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">03</span>
                    <span className="font-medium">Sacrifice (Eat Me Up)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">04</span>
                    <span className="font-medium">Chaconne</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">05</span>
                    <span className="font-medium">Bills</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="w-8 text-center text-white/50 text-sm font-mono">06</span>
                    <span className="font-medium">Karma</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-red-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent opacity-80" />
                <h2 className="text-8xl md:text-9xl font-serif font-bold text-white/10 tracking-tighter rotate-[-10deg] scale-150 whitespace-nowrap select-none">DARK BLOOD</h2>
                { <img src="https://phinf.wevpstatic.net/MjAyMzA1MDhfOTIg/MDAxNjgzNTI0NTg1OTgz.rkNCyANNYxPXF7OwLRylX-NUb2Ca4TSih3228oUkbdsg.EsglN5KF6nsujVELoHR8WNMm6i4VJ5gSgj0KflCSQv0g.JPEG/06aff225-5d2f-42c3-b36b-016995a00b5c.jpeg?type=w1414" alt=".." className="w-full h-full object-cover absolute inset-  "/>}
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
