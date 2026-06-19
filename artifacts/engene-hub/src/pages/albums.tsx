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
  market: "Korean" | "Japanese";
  titleTrack: string;
  description: string;
  gradient: string;
  textMode: string;
  badgeMode: string;
  dotColor: string;
  tracks: Track[];
  tracksNote?: string;
}

const albums: Album[] = [
  // ── Korean Releases ──────────────────────────────────────────────────────
  {
    title: "BORDER : DAY ONE",
    imageId: "border-day-one",
    date: "Oct 12, 2020",
    type: "1st Mini Album",
    market: "Korean",
    titleTrack: "Given-Taken",
    description: "The debut that opened the border. Seven boys crossed the threshold between two worlds — isolation and connection — and introduced a universe unlike any other. Given-Taken became an instant fan anthem from day one.",
    gradient: "from-slate-200 to-slate-400",
    textMode: "text-slate-900",
    badgeMode: "bg-slate-800 text-white",
    dotColor: "bg-slate-700",
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
    title: "BORDER : CARNIVAL",
    imageId: "border-carnival",
    date: "Apr 26, 2021",
    type: "2nd Mini Album",
    market: "Korean",
    titleTrack: "Drunk-Dazed",
    description: "A twisted carnival erupts on the border. Drunk-Dazed captured a feverish, electric chaos — the euphoria and danger of crossing a line you cannot uncross. Louder, darker, and more intoxicating than the debut.",
    gradient: "from-red-100 to-rose-300",
    textMode: "text-red-950",
    badgeMode: "bg-red-900 text-white",
    dotColor: "bg-red-700",
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
    title: "DIMENSION : DILEMMA",
    imageId: "dimension-dilemma",
    date: "Oct 12, 2021",
    type: "1st Full Album",
    market: "Korean",
    titleTrack: "Tamed-Dashed",
    description: "A new dimension opens. Their first full-length album — cinematic, expansive, and restless. Tamed-Dashed captured the tension of youth caught between who you are and who you could become.",
    gradient: "from-blue-100 to-cyan-200",
    textMode: "text-blue-950",
    badgeMode: "bg-blue-900 text-white",
    dotColor: "bg-blue-700",
    tracks: [
      { name: "Intro: Cosmos" },
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
    title: "DIMENSION : ANSWER",
    imageId: "dimension-answer",
    date: "Jan 10, 2022",
    type: "Repackage Album",
    market: "Korean",
    titleTrack: "Blessed-Cursed",
    description: "The resolution to the dilemma. Blessed-Cursed answered what the DIMENSION era posed — is being caught between worlds a curse, or a blessing? The repackage added Polaroid Love and closed the chapter with fire.",
    gradient: "from-indigo-100 to-violet-300",
    textMode: "text-indigo-950",
    badgeMode: "bg-indigo-900 text-white",
    dotColor: "bg-indigo-600",
    tracks: [
      { name: "Intro: Cosmos" },
      { name: "Tamed-Dashed" },
      { name: "Upper Side Dreamin'" },
      { name: "Just A Little Bit" },
      { name: "Go Big or Go Home" },
      { name: "Blockbuster" },
      { name: "Attention, please!" },
      { name: "Interlude: Question" },
      { name: "Polaroid Love", favorite: true },
      { name: "Outro: Day 2" },
      { name: "Blessed-Cursed", title: true, favorite: true },
    ],
  },
  {
    title: "MANIFESTO : DAY 1",
    imageId: "manifesto-day-1",
    date: "Jul 4, 2022",
    type: "3rd Mini Album",
    market: "Korean",
    titleTrack: "Future Perfect (Pass the MIC)",
    description: "They declare who they are. Future Perfect (Pass the MIC) was their rallying cry — loud, proud, and unapologetically ENHYPEN. The MANIFESTO era marked the group owning their narrative on the world stage.",
    gradient: "from-orange-100 to-amber-300",
    textMode: "text-orange-950",
    badgeMode: "bg-orange-800 text-white",
    dotColor: "bg-orange-600",
    tracks: [
      { name: "WALK THE LINE" },
      { name: "Future Perfect (Pass the MIC)", title: true },
      { name: "ParadoXXX Invasion" },
      { name: "TFW (That Feeling When)" },
      { name: "Shout Out", favorite: true },
    ],
  },
  {
    title: "DARK BLOOD",
    imageId: "dark-blood",
    date: "May 22, 2023",
    type: "4th Mini Album",
    market: "Korean",
    titleTrack: "Bite Me",
    description: "A dark romantic fantasy of sacrifice and fate. Bite Me was theatrical, vampiric, and impossible to look away from — the most cinematic era yet, where gothic storytelling met undeniable stage presence.",
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
    date: "Nov 20, 2023",
    type: "5th Mini Album",
    market: "Korean",
    titleTrack: "Sweet Venom",
    description: "Sweetly monstrous. Sweet Venom closed the blood series with warmth dipped in danger. A bittersweet farewell — the monster dissolves into orange light, leaving something strangely like hope.",
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
    date: "Jul 12, 2024",
    type: "2nd Full Album",
    market: "Korean",
    titleTrack: "Brought the Boys Out",
    description: "A story not yet written. Brought the Boys Out launched ENHYPEN's sunniest chapter — romantic, playful, full of summer nostalgia. Their warmest era, radiating the charm of an untold love story.",
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
    ],
  },
  {
    title: "ROMANCE : UNTOLD -daydream-",
    imageId: "romance-untold-daydream",
    date: "Sep 2024",
    type: "Repackage Album",
    market: "Korean",
    titleTrack: "No Doubt",
    description: "The romance continues into a daydream. The repackage edition deepens the ROMANCE era with new tracks, returning to the same warmth with a dreamy, hazy quality that feels like a memory half-remembered.",
    gradient: "from-pink-300 via-rose-200 to-peach-200",
    textMode: "text-pink-950",
    badgeMode: "bg-pink-700 text-white",
    dotColor: "bg-pink-400",
    tracks: [
      { name: "Brought the Boys Out" },
      { name: "XO (Only If You Say Yes)" },
      { name: "Moonstruck" },
      { name: "Fatal Trouble" },
      { name: "Serenade (I'll Be There)" },
      { name: "No Doubt", title: true, favorite: true },
    ],
    tracksNote: "Includes all ROMANCE : UNTOLD tracks plus new additions.",
  },
  {
    title: "MEMORABILIA",
    imageId: "memorabilia",
    date: "2025",
    type: "Mini Album",
    market: "Korean",
    titleTrack: "TBC",
    description: "A new chapter in the ENHYPEN story. MEMORABILIA continues the group's evolution with a fresh concept, deepening their artistic identity and connection with Engenes worldwide.",
    gradient: "from-teal-100 to-emerald-200",
    textMode: "text-teal-950",
    badgeMode: "bg-teal-800 text-white",
    dotColor: "bg-teal-600",
    tracks: [],
    tracksNote: "Tracklist details coming soon.",
  },
  {
    title: "DESIRE : UNLEASH",
    imageId: "desire-unleash",
    date: "2025",
    type: "Mini Album",
    market: "Korean",
    titleTrack: "TBC",
    description: "Desire, unleashed. ENHYPEN's latest Korean-market release explores themes of longing and release, pushing the boundaries of their sonic and visual identity further than ever before.",
    gradient: "from-violet-200 to-purple-400",
    textMode: "text-violet-950",
    badgeMode: "bg-violet-800 text-white",
    dotColor: "bg-violet-600",
    tracks: [],
    tracksNote: "Tracklist details coming soon.",
  },
  // ── Japanese Releases ──────────────────────────────────────────────────────
  {
    title: "SADAME",
    imageId: "sadame",
    date: "2025",
    type: "Japanese Release",
    market: "Japanese",
    titleTrack: "TBC",
    description: "ENHYPEN's Japanese-market release. SADAME — meaning 'fate' or 'destiny' — continues their strong presence in Japan, bringing their signature conceptual depth to a dedicated Japanese-language production.",
    gradient: "from-neutral-200 to-zinc-400",
    textMode: "text-neutral-900",
    badgeMode: "bg-neutral-800 text-white",
    dotColor: "bg-neutral-600",
    tracks: [],
    tracksNote: "Tracklist details coming soon.",
  },
];

export default function Albums() {
  const koreanAlbums = albums.filter((a) => a.market === "Korean");
  const japaneseAlbums = albums.filter((a) => a.market === "Japanese");

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Discography
        </h1>
        <p className="text-lg text-muted-foreground">
          From the border to beyond. Journey through every official ENHYPEN release — Korean and Japanese — in chronological order.
        </p>
      </div>

      {/* ── Era Timeline ─────────────────────────────────────────── */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest font-bold text-muted-foreground text-center mb-10">
          ENHYPEN Through the Eras
        </h2>
        <div className="relative">
          <div className="absolute top-[52px] left-0 right-0 h-px bg-border" />
          <div className="flex overflow-x-auto pb-6 pt-2" style={{ scrollbarWidth: "none" }}>
            {koreanAlbums.map((album, index) => (
              <motion.div
                key={album.title}
                className="flex flex-col items-center min-w-[140px] relative z-10 group cursor-default px-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors mb-2 tracking-wider">
                  {album.date.split(" ").pop()}
                </div>
                <div
                  className={`w-5 h-5 rounded-full ${album.dotColor} ring-4 ring-background shadow-md transition-all duration-300 group-hover:scale-125 group-hover:ring-primary/30 shrink-0`}
                />
                <div className="mt-4 text-center px-1">
                  <div className="text-xs font-serif font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 max-w-[120px]">
                    {album.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 font-medium">
                    {album.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Korean Releases ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm uppercase tracking-widest font-bold text-muted-foreground px-4">Korean Releases</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <AlbumGrid albums={koreanAlbums} />
      </div>

      {/* ── Japanese Releases ─────────────────────────────────────── */}
      {japaneseAlbums.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm uppercase tracking-widest font-bold text-muted-foreground px-4">Japanese Releases</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <AlbumGrid albums={japaneseAlbums} />
        </div>
      )}
    </div>
  );
}

function AlbumGrid({ albums }: { albums: Album[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
              {/* ── Cover art panel ─────────────────────────────── */}
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
                    <h3 className="text-4xl font-serif font-bold text-white/25 tracking-widest text-center px-4 leading-tight z-10 select-none">
                      {album.title.split(":").map((part, i) => (
                        <span key={i} className="block">{part.trim()}</span>
                      ))}
                    </h3>
                    {/* Swap in: <img src={imgRecord.src} … /> when placeholder: false */}
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-black/30 text-white border-white/20 backdrop-blur-md text-[10px] tracking-wider">
                    {album.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 md:p-7">
                {/* Header */}
                <div className="mb-4">
                  <Badge variant="outline" className={`mb-3 ${album.badgeMode} border-transparent shadow-sm text-xs`}>
                    {album.date}
                  </Badge>
                  <h3 className="text-xl font-serif font-bold tracking-tight leading-tight mb-1">
                    {album.title}
                  </h3>
                  {album.titleTrack !== "TBC" && (
                    <p className="text-[11px] opacity-60 font-medium tracking-wider uppercase">
                      Title Track: {album.titleTrack}
                    </p>
                  )}
                </div>

                {/* Era Description */}
                <p className="text-sm opacity-80 leading-relaxed mb-5 line-clamp-3">
                  {album.description}
                </p>

                {/* Tracklist */}
                <div className="bg-black/5 dark:bg-white/[0.08] p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">Tracklist</h4>

                  {album.tracks.length > 0 ? (
                    <div className="space-y-2.5">
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
                              <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-4 bg-black/10 dark:bg-white/20 text-current border-0 tracking-wider">
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
                  ) : (
                    <p className="text-xs opacity-50 italic">
                      {album.tracksNote ?? "Details coming soon."}
                    </p>
                  )}

                  {album.tracks.length > 0 && album.tracksNote && (
                    <p className="text-[10px] opacity-45 italic mt-3 border-t border-current/10 pt-3">
                      {album.tracksNote}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
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
