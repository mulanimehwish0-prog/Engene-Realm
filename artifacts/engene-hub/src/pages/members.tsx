import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { getMemberImage, hasImage, type MemberId } from "@/data/images";

const members = [
  {
    name: "Jungwon",
    imageId: "jungwon" as MemberId,
    enchin: "https://i.pinimg.com/736x/3d/ce/58/3dce58507118234c65746e1f240b4ce1.jpg",
    role: "Leader, Vocalist, Dancer",
    birthDate: "Feb 9, 2004",
    nationality: "Korean",
    color: "border-indigo-400",
    gradient: "from-blue-400 to-indigo-500",
    glowColor: "rgba(99,102,241,0.35)",
    facts: ["Loves cats", "Loves Jay Hyung ", "Known for his unique vocal tone"],
    vibe: "Warm earnest leader",
    quote: "WE LIVE BECAUSE ENGENES EXIST."
  },
  {
    name: "Heeseung",
    imageId: "heeseung" as MemberId,
    enchin: "https://i.pinimg.com/736x/be/cf/c1/becfc19b26797c32b965c2190419252f.jpg",
    role: "Vocalist, Dancer, Center, Soloist",
    birthDate: "Oct 15, 2001",
    nationality: "Korean",
    color: "border-purple-400",
    gradient: "from-purple-400 to-violet-600",
    glowColor: "rgba(139,92,246,0.35)",
    facts: ["Fake Maknae", "Loves to flirt with ENGENES", "Eldest Member of the group"],
    vibe: "Intense stage presence, soft off-stage",
    quote: "BIG GIRLS DON'T CRY, ENGENES !!"
  },
  {
    name: "Jay",
    imageId: "jay" as MemberId,
    enchin: "https://i.pinimg.com/736x/05/3d/37/053d3759dd7bde0cda8aac1b734d0bfa.jpg",
    role: "Main Rapper, Lead Dancer, Vocalist",
    birthDate: "Apr 20, 2002",
    nationality: "Korean-American",
    color: "border-orange-400",
    gradient: "from-orange-400 to-amber-500",
    glowColor: "rgba(249,115,22,0.35)",
    facts: ["Fluent in 3 languages", "Loves fashion, F1 and Guitars", "Enjoys cooking for members"],
    vibe: "Outgoing and reliable rock",
    quote: "Light is always by your side in any situations. Always try to find it. If you still can't see it, I'll be the part of your light."
  },
  {
    name: "Jake",
    imageId: "jake" as MemberId,
    enchin: "https://i.pinimg.com/736x/0b/f2/cc/0bf2cc6b8889819f18b6522eaa19ff7e.jpg",
    role: "Rapper, Vocalist",
    birthDate: "Nov 15, 2002",
    nationality: "Australian",
    color: "border-yellow-400",
    gradient: "from-yellow-400 to-lime-400",
    glowColor: "rgba(234,179,8,0.35)",
    facts: ["Sunshine energy", "Dog lover (Layla)", "Played soccer"],
    vibe: "Golden retriever energy",
    quote: "ITS OKAY TO NOT TO BE OKAY SOMETIMES"
  },
  {
    name: "Sunghoon",
    imageId: "sunghoon" as MemberId,
    enchin: "https://i.pinimg.com/736x/e1/83/c8/e183c8201a59e331907f3a6182759d07.jpg",
    role: "Vocalist, Dancer, Visual",
    birthDate: "Dec 8, 2002",
    nationality: "Korean",
    color: "border-cyan-400",
    gradient: "from-cyan-400 to-sky-500",
    glowColor: "rgba(6,182,212,0.35)",
    facts: ["Former competitive figure skater", "Nicknamed 'Ice Prince'", "Quiet but playful"],
    vibe: "Charismatic on stage, elegant",
    quote: "And Most Of All I Think ENGENE Is The Cutest And Lovliest When They Look At Me And Are Happy To See Us. "
  },
  {
    name: "Sunoo",
    imageId: "sunoo" as MemberId,
    enchin: "https://i.pinimg.com/736x/02/71/1f/02711fcf3a8961b8f8d80947be2ae21e.jpg",
    role: "Vocalist",
    birthDate: "Jun 24, 2003",
    nationality: "Korean",
    color: "border-rose-400",
    gradient: "from-pink-400 to-rose-400",
    glowColor: "rgba(244,63,94,0.35)",
    facts: ["Infectious smile", "Loves mint chocolate", "Takes great selfies"],
    vibe: "Cheerful mood-maker",
    quote: "Don't keep listening to what other people say, instead believe in yourself."
  },
  {
    name: "Ni-ki",
    imageId: "ni-ki" as MemberId,
    enchin: "https://i.pinimg.com/736x/2b/23/3f/2b233f9859d98f28bc90c65a5f1c8325.jpg",
    role: "Main Dancer, Vocalist, Maknae",
    birthDate: "Dec 9, 2005",
    nationality: "Japanese",
    color: "border-slate-400",
    gradient: "from-slate-400 to-zinc-600",
    glowColor: "rgba(100,116,139,0.35)",
    facts: ["Prodigious dancer", "Loves drawing", "Grew up dancing in studios"],
    vibe: "Powerhouse performer",
    quote: "I BELIEVE IN YOU !!."
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

                <CardContent className="relative space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Vibe</h4>
                    <p className="text-sm text-foreground/80">{member.vibe}</p>
                  </div>
                  {/* Enchin mascot */}
                  {member.enchin && (
                    <img
                      src={member.enchin}
                      alt={`${member.name} Enchin`}
                      className="
                        absolute
                        right-2
                        top-25
                        w-25
                        z-10
                    
                        pointer-events-none
                      "
                    />
                  )}
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
