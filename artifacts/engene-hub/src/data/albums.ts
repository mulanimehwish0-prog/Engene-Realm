/**
 * Engene Hub — ENHYPEN Discography Data
 *
 * HOW TO EDIT
 * ──────────────────────────────────────
 * • Add a new album: copy an existing entry, give it a unique `imageId`, and
 *   add that same id to the AlbumId union + albumImages record in images.ts.
 * • Update a tracklist: edit the `tracks` array for the matching entry.
 * • Mark a track as the title track: set `title: true`.
 * • Mark a fan favourite: set `favorite: true`.
 * • Stub entries (tracks: []): set `tracksNote` instead of inventing tracks.
 * • Visual style: tweak `gradient`, `textMode`, `badgeMode`, `dotColor` using
 *   Tailwind utility classes.
 *
 * MARKET values
 * • "Korean"  — shown in the Korean Releases section + era timeline
 * • "Japanese" — shown in the Japanese Releases section only
 */

import type { AlbumId } from "./images";

export interface Track {
  name: string;
  /** True = title track (shown with a TITLE badge) */
  title?: boolean;
  /** True = fan favourite (shown with a heart icon) */
  favorite?: boolean;
}

export interface Album {
  /** Official album title */
  title: string;
  /** Must match a key in albumImages (images.ts) */
  imageId: AlbumId;
  /** Display date, e.g. "Oct 12, 2020" or "2025" */
  date: string;
  /** e.g. "1st Mini Album", "Repackage Album", "Japanese Release" */
  type: string;
  /** Controls which section the card appears in */
  market: "Korean" | "Japanese";
  /** Official title track name, or "TBC" if unknown */
  titleTrack: string;
  /** Short era description shown on the card */
  description: string;
  /** Tailwind gradient classes for card background, e.g. "from-red-100 to-red-300" */
  gradient: string;
  /** Tailwind text-color class for card text */
  textMode: string;
  /** Tailwind classes for the date badge */
  badgeMode: string;
  /** Tailwind class for the timeline dot */
  dotColor: string;
  /** Official tracklist — leave as [] and set tracksNote for stubs */
  tracks: Track[];
  /** Optional note shown below an empty or partial tracklist */
  tracksNote?: string;
}

// ─── Korean Discography ──────────────────────────────────────────────────────────

export const albums: Album[] = [
  {
    title: "BORDER : DAY ONE",
    imageId: "border-day-one",
    date: "Oct 12, 2020",
    type: "1st Mini Album",
    market: "Korean",
    titleTrack: "Given-Taken",
    description:
      "The debut that opened the border. Seven boys crossed the threshold between two worlds — isolation and connection — and introduced a universe unlike any other. Given-Taken became an instant fan anthem from day one.",
    gradient: "from-slate-200 to-slate-400",
    textMode: "text-slate-900",
    badgeMode: "bg-slate-800 text-white",
    dotColor: "bg-slate-700",
    tracks: [
      { name: "Intro: Walk the Line" },
      { name: "Given-Taken", title: true },
      { name: "Let Me In (20 CUBE)", favorite: true },
      { name: "10 Months" },
      { name: "Flicker" },
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
    description:
      "A twisted carnival erupts on the border. Drunk-Dazed captured a feverish, electric chaos — the euphoria and danger of crossing a line you cannot uncross. Louder, darker, and more intoxicating than the debut.",
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
    description:
      "A new dimension opens. Their first full-length album — cinematic, expansive, and restless. Tamed-Dashed captured the tension of youth caught between who you are and who you could become.",
    gradient: "from-blue-100 to-cyan-200",
    textMode: "text-blue-950",
    badgeMode: "bg-blue-900 text-white",
    dotColor: "bg-blue-700",
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
    title: "DIMENSION : ANSWER",
    imageId: "dimension-answer",
    date: "Jan 10, 2022",
    type: "Repackage Album",
    market: "Korean",
    titleTrack: "Blessed-Cursed",
    description:
      "The resolution to the dilemma. Blessed-Cursed answered what the DIMENSION era posed — is being caught between worlds a curse, or a blessing? The repackage added Polaroid Love and closed the chapter with fire.",
    gradient: "from-indigo-100 to-violet-300",
    textMode: "text-indigo-950",
    badgeMode: "bg-indigo-900 text-white",
    dotColor: "bg-indigo-600",
    tracks: [
      { name: "Intro: Whiteout" },
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
    description:
      "They declare who they are. Future Perfect (Pass the MIC) was their rallying cry — loud, proud, and unapologetically ENHYPEN. The MANIFESTO era marked the group owning their narrative on the world stage.",
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
      { name: "Foreshadow" },
    ],
  },
  {
    title: "DARK BLOOD",
    imageId: "dark-blood",
    date: "May 22, 2023",
    type: "4th Mini Album",
    market: "Korean",
    titleTrack: "Bite Me",
    description:
      "A dark romantic fantasy of sacrifice and fate. Bite Me was theatrical, vampiric, and impossible to look away from — the most cinematic era yet, where gothic storytelling met undeniable stage presence.",
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
    description:
      "Sweetly monstrous. Sweet Venom closed the blood series with warmth dipped in danger. A bittersweet farewell — the monster dissolves into orange light, leaving something strangely like hope.",
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
      { name: "Sweet Venom (English Version)" },
    ],
  },
  {
    title: "ROMANCE : UNTOLD",
    imageId: "romance-untold",
    date: "Jul 12, 2024",
    type: "2nd Full Album",
    market: "Korean",
    titleTrack: "XO (Only If You Say Yes)",
    description:
      "ENHYPEN's 2nd full album, released July 12, 2024. The group brought the heat back with their summer romance concept. A fresh chapter after the blood series, centered on love and warmth.",
    gradient: "from-rose-300 via-pink-200 to-orange-200",
    textMode: "text-rose-950",
    badgeMode: "bg-rose-700 text-white",
    dotColor: "bg-rose-500",
    tracks: [
      { name: "XO (Only If You Say Yes)", title: true },
      { name: "Brought The Heat Back", favorite: true },
      { name: "Moonstruck" },
      { name: "Fatal Trouble" },
      { name: "Serenade (I'll Be There)" },
      { name: "Your Eyes Only" },
      { name: "Hundred Broken Hearts" },
      { name: "Paranormal" },
      { name: "Royalty" },
      { name: "Highway 1009" },
    ],
  },
  {
    title: "ROMANCE : UNTOLD -daydream-",
    imageId: "romance-untold-daydream",
    date: "Sep 2024",
    type: "Repackage Album",
    market: "Korean",
    titleTrack: "No Doubt",
    description:
      "The romance continues into a daydream. The repackage edition deepens the ROMANCE era with new tracks, returning to the same warmth with a dreamy, hazy quality that feels like a memory half-remembered.",
    gradient: "from-pink-300 via-rose-200 to-orange-200",
    textMode: "text-pink-950",
    badgeMode: "bg-pink-700 text-white",
    dotColor: "bg-pink-400",
    tracks: [
      { name: "Daydream" },
      { name: "No Doubt", title: true },
      { name: "XO (Only If You Say Yes)", title: true },
      { name: "Brought The Heat Back", favorite: true },
      { name: "Moonstruck" },
      { name: "Fatal Trouble" },
      { name: "Serenade (I'll Be There)" },
      { name: "Your Eyes Only" },
      { name: "Hundred Broken Hearts" },
      { name: "Paranormal" },
      { name: "Royalty" },
      { name: "Highway 1009" },
    ],
    tracksNote: "Includes all ROMANCE : UNTOLD tracks plus new additions.",
  },
  {
    title: "MEMORABILIA",
    imageId: "memorabilia",
    date: "May 13, 2024",
    type: "Special Album",
    market: "Korean",
    titleTrack: "Fatal Trouble ",
    description:
    "DARK MOON SPECIAL ALBUM MEMORABILIA. A special chapter connected to the DARK MOON universe, exploring fate, memories, and the stories of its characters.",
    gradient: "from-teal-100 to-emerald-200",
    textMode: "text-teal-950",
    badgeMode: "bg-teal-800 text-white",
    dotColor: "bg-teal-600",
    tracks: [
      { name: "One In A Billion", favorite: true },
      { name: "Criminal Love", favorite: true },
      { name: "Fatal Trouble", title: true, favorite: true },
      { name: "Teeth" },
      { name: "Lucifer" },
      { name: "Scream" },
    ],
    tracksNote: "Tracklist updated",
  },
  {
    title: "DESIRE : UNLEASH",
    imageId: "desire-unleash",
    date: "Jun 5, 2025",
    type: "6th Mini Album",
    market: "Korean",
    titleTrack: "Bad Desire (With or Without You)",
    description:
    "Desire, unleashed. ENHYPEN explores themes of temptation, longing, and transformation through a darker and intense concept.",
    gradient: "from-violet-200 to-purple-400",
    textMode: "text-violet-950",
    badgeMode: "bg-violet-800 text-white",
    dotColor: "bg-violet-600",
    tracks: [
      { name: "Flashover" },
      { name: "Bad Desire (With or Without You)", title: true, favorite: true },
      { name: "Outside" },
      { name: "Loose (Korean Version)" },
      { name: "Helium" },
      { name: "Too Close" },
      { name: "Bad Desire (With or Without You) (English Version)" },
      { name: "Loose" },
        ],
    tracksNote: "Includes all DESIRE : UNLEASH tracks",
  },

  {
    title: "SIN : VANISH",
    imageId: "sin-vanish",
    date: "Jan 16, 2026",
    type: "7th EP",
    market: "Korean",
    titleTrack: "Knife",
    description:
      "ENHYPEN's 7th EP, released January 16, 2026 through Belift Lab. Consists of 11 tracks, with lead single \"Knife\". A significant chapter in ENHYPEN's story, representing the final OT7 era before the group's transition into a new chapter.",
    gradient: "from-zinc-900 via-slate-800 to-neutral-900",
    textMode: "text-white",
    badgeMode: "bg-zinc-700 text-white",
    dotColor: "bg-zinc-400",
    tracks: [
      { name: "The Beginning (사건의 발단)" },
      { name: "No Way Back (feat. So!YoON!)" },
      { name: "The Fugitives (도망자들)" },
      { name: "Knife", title: true, favorite: true },
      { name: "Stealer" },
      { name: "The Voice (우리가 찾던 목소리)" },
      { name: "Witnesses (목격자)" },
      { name: "Big Girls Don't Cry", favorite: true },
      { name: "Lost Island" },
      { name: "Sleep Tight" },
      { name: "The Beyond (사건의 너머)" },
    ],
    tracksNote: "A cinematic chapter exploring the group's darker storyline.", 
  },

  // ── Japanese Releases ────────────────────────────────────────────────────────

  {
    title: "SADAME",
    imageId: "sadame",
    date: "  Oct 26, 2022",
    type: "Japanese Release",
    market: "Japanese",
    titleTrack: "TBC",
    description:
      "ENHYPEN's Japanese-market release. SADAME — meaning 'fate' or 'destiny' — continues their strong presence in Japan, bringing their signature conceptual depth to a dedicated Japanese-language production.",
    gradient: "from-neutral-200 to-zinc-400",
    textMode: "text-neutral-900",
    badgeMode: "bg-neutral-800 text-white",
    dotColor: "bg-neutral-600",
    tracks: [],
    tracksNote: "Tracklist details coming soon.",
  },
  // --------UPCOMING RELEASES------------
  {
    title: "SIN : BLISS",
    imageId: "sin-bliss",
    date: "Coming Soon",
    type: "Upcoming Release",
    market: "Korean",
    titleTrack: "TBA",
    description:
      "An upcoming chapter in ENHYPEN's story. More details will be added when officially revealed.",
    gradient: "from-indigo-200 to-purple-300",
    textMode: "text-indigo-950",
    badgeMode: "bg-indigo-700 text-white",
    dotColor: "bg-indigo-500",
    tracks: [],
    tracksNote: "Tracklist and details will be updated after official release.",
  },
];
