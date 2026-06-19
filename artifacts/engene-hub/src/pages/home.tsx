import { FloatingParticles } from "@/components/FloatingParticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)]">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            For the fans, by the fans
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Welcome, Engene <span className="inline-block">💙</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-4">
            Step into our cozy corner. Formed on I-Land in 2020 under BELIFT LAB, ENHYPEN is known for their mesmerizing border and dark conceptual storytelling. This is a dedicated space to celebrate their journey, music, and the bond we share.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link href="/members" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8 shadow-sm hover:shadow-md" data-testid="button-home-members">
              Meet the Members
            </Link>
            <Link href="/albums" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-8 shadow-sm" data-testid="button-home-albums">
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
            <Link href="/albums" className="text-sm font-medium text-primary flex items-center hover:underline" data-testid="link-featured-all">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-[#2a1b38] to-[#1a0f2e] text-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit bg-red-900/40 text-red-200 border-red-800/50 mb-6">May 2023</Badge>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">DARK BLOOD</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  A romantic and dark fantasy concept centered around sacrifice and destiny. 
                  Featuring the hit title track "Bite Me", this era showcased a more mature and 
                  theatrical side of the group.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 text-center text-white/50 text-sm">01</span>
                    <span className="font-medium">Bite Me</span>
                    <Badge variant="outline" className="ml-auto border-white/20 text-xs">Title</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 text-center text-white/50 text-sm">02</span>
                    <span className="font-medium">Sacrifice (Eat Me Up)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 text-center text-white/50 text-sm">03</span>
                    <span className="font-medium">Chaconne</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40">
                {/* Decorative background element replacing actual photo for copyright reasons */}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
