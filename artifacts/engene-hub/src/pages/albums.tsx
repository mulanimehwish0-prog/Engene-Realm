import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumImage, hasImage, type AlbumId } from "@/data/images";

interface Track {
  name: string;
  title?: boolean;
  favorite?: boolean;
}

interface Album {
  title: string;
  imageId: AlbumId;
  date: string;
  type: string;
  titleTrack: string;
  description: string;
  gradient: string;
  textMode: string;
  badgeMode: string;
  dotColor: string;
  tracks: Track[];
}

const albums: Album[] = [
  {
    title: "BORDER: DAY ONE",
    imageId: "border-day-one",
    date: "Oct 2020",
    type: "Mini Album",
    titleTrack: "Given-Taken",
    description: "The debut era. ENHYPEN crossed the border between two worlds — isolation and connection, human and something more. Given-Taken introduced seven boys and a universe unlike any other.",
    gradient: "from-slate-100 to-slate-300",
    textMode: "text-slate-900",
    badgeMode: "bg-slate-800 text-white",
    dotColor: "bg-slate-800",
    tracks: [
      { name: "Intro: Walk the Line" },
      { name: "Given-Taken", title: true },
      { name: "Let Me In (20 CUBE)", favorite: true },
      { name: "10 Months" },
      { name: "Foreshadow" },
      { name: "Outro: Cross the Line" },
    ],
  },
  {
    title: "BORDER: CARNIVAL",
    imageId: "border-carnival",
    date: "Apr 2021",
    type: "Mini Album",
    titleTrack: "Drunk-Dazed",
    description: "A twisted carnival on the border. Drunk-Dazed captured a feverish, electric chaos — the euphoria and danger of crossing a line you cannot uncross. Louder, darker, and more intoxicating.",
    gradient: "from-red-100 to-rose-200",
    textMode: "text-red-950",
    badgeMode: "bg-red-900 text-white",
    dotColor: "bg-red-800",
    tracks: [
      { name: "Intro: The Invitation" },
      { name: "Drunk-Dazed", title: true },
      { name: "FEVER", favorite: true },
      { name: "Not For Sale" },
      { name: "Mixed Up" },
      { name: "Outro: The Wormhole" },
    ],
  },
  {
    title: "DIMENSION: DILEMMA",
    imageId: "dimension-dilemma",
    date: "Oct 2021",
    type: "Full Album",
    titleTrack: "Tamed-Dashed",
    description: "A new dimension opens. Their first full-length album — cinematic, expansive, and restless. Tamed-Dashed captured the tension of youth caught between who you are and who you could become.",
    gradient: "from-blue-100 to-cyan-200",
    textMode: "text-blue-950",
    badgeMode: "bg-blue-900 text-white",
    dotColor: "bg-blue-800",
    tracks: [
      { name: "Intro: Whiteout" },
      { name: "Tamed-Dashed", title: true },
      { name: "Upper Side Dreamin'" },
      { name: "Just A Little Bit" },
      { name: "Go Big or Go Home" },
      { name: "Blockbuster", favorite: true },
      { name: "Attention, please!" },
      { name: "Interlude: Question" },
    ],
  },
  {
    title: "DIMENSION: ANSWER",
    imageId: "dimension-answer",
    date: "Jan 2022",
    type: "Repackage",
    titleTrack: "Blessed-Cursed",
    description: "The resolution to the dilemma. Blessed-Cursed answered the dimension era — is being caught between worlds a curse, or a blessing? An exhilarating repackage that closed the chapter with fire.",
    gradient: "from-indigo-100 to-violet-200",
    textMode: "text-indigo-950",
    badgeMode: "bg-indigo-900 text-white",
    dotColor: "bg-indigo-700",
    tracks: [
      { name: "Blessed-Cursed", title: true, favorite: true },
      { name: "Polaroid Love", favorite: true },
      { name: "Outro: Day 2" },
      { name: "Upper Side Dreamin' (Acoustic Ver.)" },
      { name: "Interlude: Question (Alternative Ver.)" },
    ],
  },
  {
    title: "MANIFESTO: DAY 1",
    imageId: "manifesto-day-1",
    date: "Jul 2022",
    type: "Mini Album",
    titleTrack: "Future Perfect (Pass the MIC)",
    description: "They declare who they are. Future Perfect was their rallying cry — loud, proud, unapologetically ENHYPEN. The MANIFESTO era marked the group owning their narrative on the world stage.",
    gradient: "from-orange-100 to-amber-200",
    textMode: "text-orange-950",
    badgeMode: "bg-orange-800 text-white",
    dotColor: "bg-orange-700",
    tracks: [
      { name: "WALK THE LINE" },
      { name: "Future Perfect (Pass the MIC)", title: true },
      { name: "ParadoXXX Invasion" },
      { name: "TFW (That Feeling When)" },
      { name: "Shout Out", favorite: true },
      { name: "Foreshadow" },
    ],
  },
  {
    title: "DARK BLOOD",
    imageId: "dark-blood",
    date: "May 2023",
    type: "Mini Album",
    titleTrack: "Bite Me",
    description: "A dark romantic fantasy of sacrifice and fate. Bite Me was theatrical, vampiric, and impossible to look away from. The most cinematic era yet — gothic storytelling at its most seductive.",
    gradient: "from-slate-900 to-red-950",
    textMode: "text-white",
    badgeMode: "bg-red-700 text-white",
    dotColor: "bg-red-600",
    tracks: [
      { name: "Fate" },
      { name: "Bite Me", title: true, favorite: true },
      { name: "Sacrifice (Eat Me Up)" },
      { name: "Chaconne" },
      { name: "Bills" },
      { name: "Karma" },
    ],
  },
  {
    title: "ORANGE BLOOD",
    imageId: "orange-blood",
    date: "Nov 2023",
    type: "Mini Album",
    titleTrack: "Sweet Venom",
    description: "Sweetly monstrous. Sweet Venom closed the blood series with warmth dipped in danger. A bittersweet farewell — the monster dissolves into orange light and something like hope.",
    gradient: "from-orange-400 to-red-400",
    textMode: "text-white",
    badgeMode: "bg-orange-900 text-white",
    dotColor: "bg-orange-500",
    tracks: [
      { name: "Mortal" },
      { name: "Sweet Venom", title: true },
      { name: "Still Monster" },
      { name: "Blind" },
      { name: "Orange Flower (You Complete Me)", favorite: true },
    ],
  },
  {
    title: "ROMANCE : UNTOLD",
    imageId: "romance-untold",
    date: "Jul 2024",
    type: "Full Album",
    titleTrack: "Brought the Boys Out",
    description: "A story not yet written. Brought the Boys Out launched ENHYPEN's sunniest chapter — romantic, playful, and full of summer nostalgia. Their most charming era, radiating warmth in every frame.",
    gradient: "from-rose-300 via-pink-200 to-orange-200",
    textMode: "text-rose-950",
    badgeMode: "bg-rose-700 text-white",
    dotColor: "bg-rose-500",
    tracks: [
      { name: "Brought the Boys Out", title: true },
      { name: "XO (Only If You Say Yes)", favorite: true },
      { name: "Moonstruck" },
      { name: "Fatal Trouble" },
      { name: "Serenade (I'll Be There)" },
      { name: "Polaroid Love (Re-Edited)" },
    ],
  },
  {
    title: "SIN : VANISH",
    imageId: "sin-vanish",
    date: "2025",
    type: "Mini Album",
    titleTrack: "SIN : VANISH",
    description: "The latest chapter. ENHYPEN's most haunting era — gothic, introspective, and cinematic in every frame. An exploration of sin, consequence, and the weight of disappearing without a trace.",
    gradient: "from-violet-950 via-indigo-950 to-slate-900",
    textMode: "text-white",
    badgeMode: "bg-violet-700 text-white",
    dotColor: "bg-violet-500",
    tracks: [
      { name: "SIN : VANISH", title: true, favorite: true },
      { name: "Pray 4 U" },
      { name: "Criminal Mind" },
      { name: "Lucifer's Call" },
      { name: "Vanishing Act" },
    ],
  },
];

export default function Albums() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Discography
        </h1>
        <p className="text-lg text-muted-foreground">
          Nine eras. Five years. One universe. Journey through the complete musical evolution of ENHYPEN from debut to now.
        </p>
      </div>

      {/* ── Era Timeline ───────────────────────────────────────── */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest font-bold text-muted-foreground text-center mb-10">
          ENHYPEN Through the Eras
        </h2>

        {/* Horizontal scrollable timeline */}
        <div className="relative">
          <div className="absolute top-[52px] left-0 right-0 h-px bg-border" />
          <div className="flex overflow-x-auto pb-6 pt-2 gap-0" style={{ scrollbarWidth: "none" }}>
            {albums.map((album, index) => (
              <motion.div
                key={album.title}
                className="flex flex-col items-center min-w-[148px] relative z-10 group cursor-default px-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                {/* Year above the line */}
                <div className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors mb-2 tracking-wider">
                  {album.date.split(" ").pop()}
                </div>

                {/* Dot on the line */}
                <div className={`w-5 h-5 rounded-full ${album.dotColor} ring-4 ring-background shadow-md transition-all duration-300 group-hover:scale-125 group-hover:ring-primary/30 shrink-0`} />

                {/* Label below the line */}
                <div className="mt-4 text-center px-1">
                  <div className="text-xs font-serif font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 max-w-[120px]">
                    {album.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 font-medium">
                    {album.date.split(" ")[0]}
                  </div>
                  <div className="text-[9px] text-muted-foreground/70 mt-0.5 italic">
                    {album.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Album Grid ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        {albums.map((album, index) => {
          const imgRecord = getAlbumImage(album.imageId);
          const showRealImage = hasImage(imgRecord);

          return (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Card
                className={`h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br ${album.gradient} ${album.textMode}`}
                data-testid={`card-album-${album.imageId}`}
              >
                {/* ── Cover art / era image panel ──────────────── */}
                <div className="relative h-44 w-full overflow-hidden border-b border-white/10">
                  {showRealImage ? (
                    <img
                      src={imgRecord.src}
                      alt={imgRecord.alt}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${album.gradient} flex items-center justify-center relative`}>
                      <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]" />
                      <h3 className="text-4xl md:text-5xl font-serif font-bold text-white/30 tracking-widest text-center px-4 leading-tight z-10 select-none">
                        {album.title.split(":").map((part, i) => (
                          <span key={i} className="block">{part.trim()}</span>
                        ))}
                      </h3>
                      {/* Replace with: <img src={imgRecord.src} alt={imgRecord.alt} className="w-full h-full object-cover absolute inset-0" /> */}
                    </div>
                  )}

                  {/* Type badge overlay */}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-black/30 text-white border-white/20 backdrop-blur-md text-[10px] tracking-wider">
                      {album.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 md:p-7">
                  {/* Header */}
                  <div className="mb-5">
                    <Badge variant="outline" className={`mb-3 ${album.badgeMode} border-transparent shadow-sm text-xs`}>
                      {album.date}
                    </Badge>
                    <h3 className="text-2xl font-serif font-bold tracking-tight leading-tight mb-1">
                      {album.title}
                    </h3>
                    <p className="text-[11px] opacity-60 font-medium tracking-wider uppercase">
                      Title Track: {album.titleTrack}
                    </p>
                  </div>

                  {/* Era Description */}
                  <p className="text-sm opacity-80 leading-relaxed mb-6 line-clamp-3">
                    {album.description}
                  </p>

                  {/* Tracklist */}
                  <div className="space-y-2.5 bg-black/5 dark:bg-white/8 p-4 rounded-xl backdrop-blur-sm">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">Tracklist</h4>
                    {album.tracks.map((track, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs opacity-40 w-4 font-mono shrink-0">{i + 1}</span>
                          <span className={`text-sm leading-snug ${track.title ? "font-bold" : "font-medium opacity-85"}`}>
                            {track.name}
                          </span>
                        </div>
                        <div className="flex gap-1.5 shrink-0 ml-2">
                          {track.title && (
                            <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-4 bg-black/10 hover:bg-black/20 dark:bg-white/20 text-current border-0 tracking-wider">
                              TITLE
                            </Badge>
                          )}
                          {track.favorite && (
                            <Tooltip content="Fan Favorite">
                              <Heart className="w-3 h-3 fill-current opacity-60" />
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    ))}
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

function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  return (
    <div className="relative group/tooltip flex items-center">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-[10px] font-medium text-white bg-gray-900 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {content}
      </div>
    </div>
  );
}
