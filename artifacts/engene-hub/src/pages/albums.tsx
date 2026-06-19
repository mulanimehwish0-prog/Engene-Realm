import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumImage, hasImage, type AlbumId } from "@/data/images";

const albums = [
  {
    title: "BORDER: DAY ONE",
    imageId: "border-day-one" as AlbumId,
    date: "Oct 2020",
    gradient: "from-gray-100 to-gray-300",
    textMode: "text-gray-900",
    badgeMode: "bg-gray-900 text-white",
    tracks: [
      { name: "Intro: Walk the Line" },
      { name: "Given-Taken", title: true },
      { name: "Let Me In (20 CUBE)", favorite: true },
      { name: "10 Months" },
      { name: "Foreshadow" }
    ]
  },
  {
    title: "BORDER: CARNIVAL",
    imageId: "border-carnival" as AlbumId,
    date: "Apr 2021",
    gradient: "from-red-100 to-red-200",
    textMode: "text-red-950",
    badgeMode: "bg-red-900 text-white",
    tracks: [
      { name: "Intro: The Invitation" },
      { name: "Drunk-Dazed", title: true },
      { name: "FEVER", favorite: true },
      { name: "Not For Sale" },
      { name: "Mixed Up" },
      { name: "Outro: The Wormhole" }
    ]
  },
  {
    title: "DIMENSION: DILEMMA",
    imageId: "dimension-dilemma" as AlbumId,
    date: "Oct 2021",
    gradient: "from-blue-100 to-cyan-100",
    textMode: "text-blue-950",
    badgeMode: "bg-blue-900 text-white",
    tracks: [
      { name: "Intro: Whiteout" },
      { name: "Tamed-Dashed", title: true },
      { name: "Upper Side Dreamin'" },
      { name: "Just A Little Bit" },
      { name: "Go Big or Go Home" },
      { name: "Blockbuster" },
      { name: "Attention, please!" },
      { name: "Interlude: Question" }
    ]
  },
  {
    title: "MANIFESTO: DAY 1",
    imageId: "manifesto-day-1" as AlbumId,
    date: "Jul 2022",
    gradient: "from-orange-100 to-yellow-100",
    textMode: "text-orange-950",
    badgeMode: "bg-orange-900 text-white",
    tracks: [
      { name: "WALK THE LINE" },
      { name: "Future Perfect (Pass the MIC)", title: true },
      { name: "ParadoXXX Invasion" },
      { name: "TFW (That Feeling When)" },
      { name: "Shout Out", favorite: true },
      { name: "Foreshadow" }
    ]
  },
  {
    title: "DARK BLOOD",
    imageId: "dark-blood" as AlbumId,
    date: "May 2023",
    gradient: "from-slate-900 to-red-950",
    textMode: "text-white",
    badgeMode: "bg-red-600 text-white border-red-500",
    tracks: [
      { name: "Fate" },
      { name: "Bite Me", title: true, favorite: true },
      { name: "Sacrifice (Eat Me Up)" },
      { name: "Chaconne" },
      { name: "Bills" },
      { name: "Karma" }
    ]
  },
  {
    title: "ORANGE BLOOD",
    imageId: "orange-blood" as AlbumId,
    date: "Nov 2023",
    gradient: "from-orange-400 to-red-400",
    textMode: "text-white",
    badgeMode: "bg-orange-950 text-white border-orange-800",
    tracks: [
      { name: "Mortal" },
      { name: "Sweet Venom", title: true },
      { name: "Still Monster" },
      { name: "Blind" },
      { name: "Orange Flower (You Complete Me)", favorite: true }
    ]
  },
  {
    title: "ROMANCE : UNTOLD",
    imageId: "romance-untold" as AlbumId,
    date: "Jul 2024",
    gradient: "from-rose-300 via-pink-200 to-orange-200",
    textMode: "text-rose-950",
    badgeMode: "bg-rose-700 text-white",
    tracks: [
      { name: "Brought the Boys Out", title: true },
      { name: "XO (Only If You Say Yes)", favorite: true },
      { name: "Moonstruck" },
      { name: "Fatal Trouble" },
      { name: "Serenade (I'll Be There)" },
      { name: "Polaroid Love (Re-Edited)" }
    ]
  }
];

export default function Albums() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Discography
        </h1>
        <p className="text-lg text-muted-foreground">
          Journey through the eras. From the border to the blood series, explore the musical evolution of ENHYPEN.
        </p>
      </div>

      {/* Era Timeline */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest font-bold text-muted-foreground text-center mb-8">
          ENHYPEN Through the Eras
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4">
            {albums.map((album, index) => (
              <motion.div
                key={album.title}
                className="flex flex-col items-center justify-center min-w-[160px] snap-center relative z-10 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4 text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {album.date.split(" ")[1]}
                </div>
                <div className={`w-4 h-4 rounded-full ${album.badgeMode.split(" ")[0]} ring-4 ring-background shadow-sm transition-transform duration-300 group-hover:scale-150`} />
                <div className="mt-4 text-center">
                  <div className="text-sm font-serif font-bold max-w-[120px] truncate px-2 group-hover:text-primary transition-colors">
                    {album.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                    {album.date.split(" ")[0]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        {albums.map((album, index) => {
          const imgRecord = getAlbumImage(album.imageId);
          const showRealImage = hasImage(imgRecord);

          return (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br ${album.gradient} ${album.textMode}`}
                data-testid={`card-album-${album.imageId}`}
              >
                {/* ── Cover art panel ───────────────────────────── */}
                <div className={`relative h-40 w-full overflow-hidden border-b border-white/10`}>
                  {showRealImage ? (
                    /* Real cover art — set placeholder: false in src/data/images.ts to enable */
                    <img
                      src={imgRecord.src}
                      alt={imgRecord.alt}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  ) : (
                    /* Gradient art panel placeholder */
                    <div className={`w-full h-full bg-gradient-to-br ${album.gradient} flex items-center justify-center`}>
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)]" />
                      <h3 className="text-5xl md:text-6xl font-serif font-bold text-white/40 tracking-widest text-center px-4 leading-none z-10 select-none">
                        {album.title.split(":").map((part, i) => (
                          <span key={i} className="block">{part}</span>
                        ))}
                      </h3>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className={`mb-3 ${album.badgeMode} border-transparent shadow-sm`}>
                        {album.date}
                      </Badge>
                      <h3 className="text-2xl font-serif font-bold tracking-tight">
                        {album.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mt-8 bg-black/5 dark:bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-70 mb-4">Tracklist</h4>
                    {album.tracks.map((track, i) => (
                      <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <span className="text-xs opacity-50 w-4 font-mono">{i + 1}</span>
                          <span className={`text-sm ${track.title ? "font-bold" : "font-medium opacity-90"}`}>
                            {track.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {track.title && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 bg-black/10 hover:bg-black/20 dark:bg-white/20 dark:hover:bg-white/30 text-current border-0">
                              TITLE
                            </Badge>
                          )}
                          {track.favorite && (
                            <Tooltip content="Fan Favorite">
                              <Heart className="w-3.5 h-3.5 fill-current opacity-70" />
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
