import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { getMemberImage, hasImage, type MemberId } from "@/data/images";

const members = [
  {
    name: "Jungwon",
    imageId: "jungwon" as MemberId,
    role: "Leader, Vocalist, Dancer",
    birthDate: "Jan 9, 2004",
    nationality: "Korean",
    color: "border-indigo-400",
    gradient: "from-blue-400 to-indigo-500",
    glowColor: "rgba(99,102,241,0.35)",
    facts: ["Loves cats", "Enjoys drawing", "Known for his unique vocal tone"],
    vibe: "Warm earnest leader",
    quote: "Let's do our best without any regrets."
  },
  {
    name: "Heeseung",
    imageId: "heeseung" as MemberId,
    role: "Vocalist, Dancer, Center",
    birthDate: "Oct 15, 2001",
    nationality: "Korean",
    color: "border-purple-400",
    gradient: "from-purple-400 to-violet-600",
    glowColor: "rgba(139,92,246,0.35)",
    facts: ["Perfectionist", "Plays guitar", "Trained for 3+ years"],
    vibe: "Intense stage presence, soft off-stage",
    quote: "I want to be someone who gives positive energy."
  },
  {
    name: "Jay",
    imageId: "jay" as MemberId,
    role: "Main Rapper, Lead Dancer, Vocalist",
    birthDate: "Apr 20, 2002",
    nationality: "Korean-American",
    color: "border-orange-400",
    gradient: "from-orange-400 to-amber-500",
    glowColor: "rgba(249,115,22,0.35)",
    facts: ["Fluent in 3 languages", "Loves fashion", "Enjoys cooking for members"],
    vibe: "Outgoing and reliable rock",
    quote: "Resentment, anger, shame."
  },
  {
    name: "Jake",
    imageId: "jake" as MemberId,
    role: "Rapper, Vocalist",
    birthDate: "Nov 15, 2002",
    nationality: "Australian",
    color: "border-yellow-400",
    gradient: "from-yellow-400 to-lime-400",
    glowColor: "rgba(234,179,8,0.35)",
    facts: ["Sunshine energy", "Dog lover (Layla)", "Played soccer"],
    vibe: "Golden retriever energy",
    quote: "Just keep running."
  },
  {
    name: "Sunghoon",
    imageId: "sunghoon" as MemberId,
    role: "Vocalist, Dancer, Visual",
    birthDate: "Dec 8, 2002",
    nationality: "Korean",
    color: "border-cyan-400",
    gradient: "from-cyan-400 to-sky-500",
    glowColor: "rgba(6,182,212,0.35)",
    facts: ["Former competitive figure skater", "Nicknamed 'Ice Prince'", "Quiet but playful"],
    vibe: "Charismatic on stage, elegant",
    quote: "I will show you a better me."
  },
  {
    name: "Sunoo",
    imageId: "sunoo" as MemberId,
    role: "Vocalist",
    birthDate: "Jun 24, 2003",
    nationality: "Korean",
    color: "border-rose-400",
    gradient: "from-pink-400 to-rose-400",
    glowColor: "rgba(244,63,94,0.35)",
    facts: ["Infectious smile", "Loves mint chocolate", "Takes great selfies"],
    vibe: "Cheerful mood-maker",
    quote: "Always smile!"
  },
  {
    name: "Ni-ki",
    imageId: "ni-ki" as MemberId,
    role: "Main Dancer, Vocalist, Maknae",
    birthDate: "Dec 9, 2005",
    nationality: "Japanese",
    color: "border-slate-400",
    gradient: "from-slate-400 to-zinc-600",
    glowColor: "rgba(100,116,139,0.35)",
    facts: ["Prodigious dancer", "Loves drawing", "Grew up dancing in studios"],
    vibe: "Powerhouse performer",
    quote: "I want to be an artist who touches people's hearts."
  }
];

export default function Members() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          The Members
        </h1>
        <p className="text-lg text-muted-foreground">
          Seven unique individuals, one perfect team. Discover the personalities that make ENHYPEN so special.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((member, index) => {
          const imgRecord = getMemberImage(member.imageId);
          const showRealImage = hasImage(imgRecord);

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(member.name)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card
                className={`h-full overflow-hidden border-t-4 border-x border-b border-x-white/40 border-b-white/40 ${member.color} bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-md transition-all duration-500`}
                style={{
                  boxShadow: hoveredId === member.name
                    ? `0 20px 40px -10px ${member.glowColor}, 0 0 20px -5px ${member.glowColor}`
                    : undefined,
                  transform: hoveredId === member.name ? "translateY(-4px)" : "translateY(0)"
                }}
                data-testid={`card-member-${member.imageId}`}
              >
                {/* ── Photo panel ──────────────────────────────────── */}
                <div className={`relative h-48 md:h-52 overflow-hidden`}>
                  {showRealImage ? (
                    /* Real photo — set placeholder: false in src/data/images.ts to enable */
                    <img
                      src={imgRecord.src}
                      alt={imgRecord.alt}
                      className="w-full h-full object-cover object-top absolute inset-0"
                    />
                  ) : (
                    /* Gradient placeholder */
                    <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex flex-col items-center justify-center`}>
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)]" />
                      <span className="text-8xl font-serif font-bold text-white/30 z-10 select-none">
                        {member.name.charAt(0)}
                      </span>
                      <span className="text-[10px] text-white/60 mt-2 z-10 uppercase tracking-widest font-medium">
                        Photo coming soon
                      </span>
                    </div>
                  )}

                  {/* Role badge row — always visible */}
                  <div className="absolute bottom-3 left-3 z-20 flex gap-1.5 flex-wrap max-w-[85%]">
                    {member.role.split(", ").map((r) => (
                      <Badge
                        key={r}
                        variant="secondary"
                        className="bg-black/20 hover:bg-black/30 text-white border-white/20 backdrop-blur-md text-[10px] py-0 px-2 h-5"
                      >
                        {r}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardHeader className="pb-4 pt-5">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-3xl font-serif font-bold">{member.name}</CardTitle>
                    <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-border/50 text-xs">
                      {member.nationality}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm font-medium text-foreground/70">
                    Born • {member.birthDate}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Vibe</h4>
                    <p className="text-sm text-foreground/80">{member.vibe}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Fun Facts</h4>
                    <ul className="text-sm space-y-2">
                      {member.facts.map((fact, i) => (
                        <li key={i} className="flex items-start text-foreground/80">
                          <span className="mr-2.5 mt-0.5 text-[10px] opacity-60">✦</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <p className="text-sm font-serif italic text-muted-foreground leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
