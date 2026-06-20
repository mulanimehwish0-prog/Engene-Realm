// ─── Update data ─────────────────────────────────────────────────────────────
//
// Structure is intentionally flat so it can be swapped for a Supabase fetch:
//
//   const { data } = await supabase
//     .from("updates")
//     .select("*")
//     .order("date", { ascending: false });
//
// When connecting to Supabase:
//  - Replace `id: number` with `id: string` (uuid)
//  - `image` maps to a Supabase Storage public URL
//  - `date` maps to a Postgres `date` column (ISO string "YYYY-MM-DD")
//  - `dateDisplay` can be derived client-side or stored as a separate column
// ─────────────────────────────────────────────────────────────────────────────

export type UpdateCategory =
  | "comebacks"
  | "performances"
  | "events"
  | "announcements";

export interface Update {
  id: number;
  title: string;
  /** ISO date string "YYYY-MM-DD" — used for sort order */
  date: string;
  /** Human-readable date shown in the UI */
  dateDisplay: string;
  category: UpdateCategory;
  /** Short display label shown as a badge (e.g. "Comeback", "Performance") */
  type: string;
  /** Optional cover image URL; maps to Supabase Storage when connected */
  image?: string;
  description: string;
}

// Sorted newest-first by `date`.
export const updates: Update[] = [
  {
    id: 10,
    title: "SIN : VANISH",
    date: "2026-01-16",
    dateDisplay: "Jan 16, 2026",
    category: "comebacks",
    type: "Comeback",
    image: undefined,
    description:
      "ENHYPEN's 7th EP released through Belift Lab, consisting of 11 tracks with lead single Knife. The group's final release as a seven-piece ensemble.",
  },
  {
    id: 11,
    title: "ENHYPEN World Tour 2026",
    date: "2026-01-01",
    dateDisplay: "2026",
    category: "announcements",
    type: "World Tour",
    image: undefined,
    description:
      "ENHYPEN announces their 2026 world tour spanning Asia, North America, and Europe. Engenes around the world, get ready.",
  },
  {
    id: 12,
    title: "5th Debut Anniversary",
    date: "2025-11-30",
    dateDisplay: "Nov 2025",
    category: "announcements",
    type: "Milestone",
    image: undefined,
    description:
      "ENHYPEN celebrated five years since debut in November 2025. From I-Land trainees to world-touring artists — a journey Engenes have shared every step of the way.",
  },
  {
    id: 13,
    title: "DESIRE : UNLEASH",
    date: "2025-09-01",
    dateDisplay: "2025",
    category: "comebacks",
    type: "Release",
    image: undefined,
    description:
      "ENHYPEN returns with DESIRE : UNLEASH, their latest release. A bold new era exploring themes of longing and release, pushing their sonic identity further.",
  },
  {
    id: 14,
    title: "MEMORABILIA",
    date: "2025-06-01",
    dateDisplay: "2025",
    category: "comebacks",
    type: "Release",
    image: undefined,
    description:
      "ENHYPEN's newest Korean-market mini album. MEMORABILIA marks another chapter in their ever-evolving artistic journey, with a fresh concept and signature storytelling.",
  },
  {
    id: 15,
    title: "SADAME",
    date: "2025-03-01",
    dateDisplay: "2025",
    category: "comebacks",
    type: "Japanese Release",
    image: undefined,
    description:
      "ENHYPEN's Japanese release SADAME — meaning 'fate' or 'destiny' — continues their strong presence in the Japanese market with a dedicated Japanese-language production.",
  },
  {
    id: 16,
    title: "ROMANCE : UNTOLD -daydream-",
    date: "2024-09-01",
    dateDisplay: "Sep 2024",
    category: "comebacks",
    type: "Comeback",
    image: undefined,
    description:
      "The repackage edition of their 2nd full album. ROMANCE : UNTOLD -daydream- expanded the romantic narrative with new tracks including No Doubt.",
  },
  {
    id: 8,
    title: "FATE PLUS World Tour — Seoul Encore",
    date: "2024-08-01",
    dateDisplay: "Aug 2024",
    category: "performances",
    type: "Performance",
    image: undefined,
    description:
      "Two encore shows in Seoul sold out in minutes. Fans gathered in the rain and sang every word.",
  },
  {
    id: 7,
    title: "ROMANCE : UNTOLD Full Album",
    date: "2024-07-12",
    dateDisplay: "Jul 12, 2024",
    category: "comebacks",
    type: "Comeback",
    image: undefined,
    description:
      "Summer romance era launched with warm pastel aesthetics and title track Brought the heat back.",
  },
  {
    id: 9,
    title: "ENHYPEN 4th Anniversary",
    date: "2024-11-30",
    dateDisplay: "Nov 2024",
    category: "announcements",
    type: "Announcement",
    image: undefined,
    description:
      "Four years since debut. The group celebrated with a special fan event on Weverse and released a heartfelt message.",
  },
  {
    id: 2,
    title: "KCON LA 2024 Headline",
    date: "2024-06-30",
    dateDisplay: "Jun 30, 2024",
    category: "performances",
    type: "Performance",
    image: undefined,
    description:
      "ENHYPEN headlined KCON LA 2024, delivering an unforgettable performance for fans across North America.",
  },
  {
    id: 3,
    title: "Happy Sunoo Day!",
    date: "2024-06-24",
    dateDisplay: "Jun 24, 2024",
    category: "events",
    type: "Event",
    image: undefined,
    description:
      "Happy Birthday to our sunshine, Sunoo! Fans celebrated across Weverse and social platforms.",
  },
  {
    id: 4,
    title: "FATE PLUS World Tour Encore",
    date: "2024-05-15",
    dateDisplay: "May 15, 2024",
    category: "announcements",
    type: "Announcement",
    image: undefined,
    description:
      "Additional dates were added to the FATE PLUS World Tour due to overwhelming demand.",
  },
  {
    id: 5,
    title: "ORANGE BLOOD Era Begins",
    date: "2023-11-17",
    dateDisplay: "Nov 17, 2023",
    category: "comebacks",
    type: "Comeback",
    image: undefined,
    description:
      "The music video for Sweet Venom is out now. Dive into the new chapter of the blood series.",
  },
  {
    id: 6,
    title: "Music Bank Special Stage",
    date: "2023-10-28",
    dateDisplay: "Oct 28, 2023",
    category: "performances",
    type: "Performance",
    image: undefined,
    description:
      "A special Halloween-themed performance on Music Bank.",
  },
];

/** Returns the 3 newest updates for the homepage preview. */
export function getLatestUpdates(count = 3): Update[] {
  return [...updates]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
