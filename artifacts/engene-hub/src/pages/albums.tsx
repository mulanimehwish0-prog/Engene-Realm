import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumImage, hasImage } from "@/data/images";
import { albums, type Album } from "@/data/albums";

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
                <div className={`w-5 h-5 rounded-full ${album.dotColor} ring-4 ring-background shadow-md transition-all duration-300 group-hover:scale-125 group-hover:ring-primary/30 shrink-0`} />
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
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-black/30 text-white border-white/20 backdrop-blur-md text-[10px] tracking-wider">
                    {album.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 md:p-7">
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

                <p className="text-sm opacity-80 leading-relaxed mb-5 line-clamp-3">
                  {album.description}
                </p>

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
