import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const members = [
  {
    name: "Jungwon",
    role: "Leader, Vocalist, Dancer",
    birthDate: "Jan 9, 2004",
    nationality: "Korean",
    color: "border-blue-200",
    bg: "bg-blue-50/50",
    facts: ["Loves cats", "Enjoys drawing", "Known for his unique vocal tone"],
    vibe: "Warm earnest leader",
    quote: "Let's do our best without any regrets."
  },
  {
    name: "Heeseung",
    role: "Vocalist, Dancer, Center",
    birthDate: "Oct 15, 2001",
    nationality: "Korean",
    color: "border-purple-200",
    bg: "bg-purple-50/50",
    facts: ["Perfectionist", "Plays guitar", "Trained for 3+ years"],
    vibe: "Intense stage presence, soft off-stage",
    quote: "I want to be someone who gives positive energy."
  },
  {
    name: "Jay",
    role: "Main Rapper, Lead Dancer, Vocalist",
    birthDate: "Apr 20, 2002",
    nationality: "Korean-American",
    color: "border-orange-200",
    bg: "bg-orange-50/50",
    facts: ["Fluent in 3 languages", "Loves fashion", "Enjoys cooking for members"],
    vibe: "Outgoing and reliable rock",
    quote: "Resentment, anger, shame."
  },
  {
    name: "Jake",
    role: "Rapper, Vocalist",
    birthDate: "Nov 15, 2002",
    nationality: "Australian",
    color: "border-yellow-200",
    bg: "bg-yellow-50/50",
    facts: ["Sunshine energy", "Dog lover (Layla)", "Played soccer"],
    vibe: "Golden retriever energy",
    quote: "Just keep running."
  },
  {
    name: "Sunghoon",
    role: "Vocalist, Dancer, Visual",
    birthDate: "Dec 8, 2002",
    nationality: "Korean",
    color: "border-cyan-200",
    bg: "bg-cyan-50/50",
    facts: ["Former competitive figure skater", "Nicknamed 'Ice Prince'", "Quiet but playful"],
    vibe: "Charismatic on stage, elegant",
    quote: "I will show you a better me."
  },
  {
    name: "Sunoo",
    role: "Vocalist",
    birthDate: "Jun 24, 2003",
    nationality: "Korean",
    color: "border-pink-200",
    bg: "bg-pink-50/50",
    facts: ["Infectious smile", "Loves mint chocolate", "Takes great selfies"],
    vibe: "Cheerful mood-maker",
    quote: "Always smile!"
  },
  {
    name: "Ni-ki",
    role: "Main Dancer, Vocalist, Maknae",
    birthDate: "Dec 9, 2005",
    nationality: "Japanese",
    color: "border-slate-300",
    bg: "bg-slate-50/50",
    facts: ["Prodigious dancer", "Loves drawing", "Grew up dancing in studios"],
    vibe: "Powerhouse performer",
    quote: "I want to be an artist who touches people's hearts."
  }
];

export default function Members() {
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
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`h-full border-t-4 ${member.color} ${member.bg} shadow-sm hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-3xl font-serif font-bold">{member.name}</CardTitle>
                  <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                    {member.nationality}
                  </Badge>
                </div>
                <CardDescription className="text-sm font-medium text-primary">
                  {member.role} • {member.birthDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Vibe</h4>
                  <p className="text-sm">{member.vibe}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Fun Facts</h4>
                  <ul className="text-sm space-y-1">
                    {member.facts.map((fact, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-serif italic text-muted-foreground">
                    "{member.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
