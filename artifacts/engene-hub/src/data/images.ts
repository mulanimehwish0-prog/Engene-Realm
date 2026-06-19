/**
 * Engene Hub — Image Data Structure
 *
 * HOW TO ADD REAL IMAGES
 * ──────────────────────
 * 1. Drop the image file into `src/assets/` (e.g. `src/assets/members/jungwon.jpg`)
 *    OR use an absolute URL (e.g. a CDN link).
 * 2. Find the matching entry below.
 * 3. Replace the `src` value:
 *      - Local file:  import jungwonImg from "@assets/members/jungwon.jpg"
 *                     then set  src: jungwonImg
 *      - Remote URL:  src: "https://example.com/jungwon.jpg"
 * 4. Delete the `placeholder: true` flag — the component will render the real image.
 *
 * All images are optional. When `src` is undefined or `placeholder` is true,
 * the component falls back to the styled gradient placeholder.
 */

// ─── Member Images ────────────────────────────────────────────────────────────

export type MemberId =
  | "jungwon"
  | "heeseung"
  | "jay"
  | "jake"
  | "sunghoon"
  | "sunoo"
  | "ni-ki";

export interface MemberImage {
  id: MemberId;
  name: string;
  src?: string;
  alt: string;
  placeholder: boolean;
}

export const memberImages: Record<MemberId, MemberImage> = {
  jungwon: {
    id: "jungwon",
    name: "Jungwon",
    src: undefined,
    alt: "Yang Jungwon — ENHYPEN leader",
    placeholder: true,
  },
  heeseung: {
    id: "heeseung",
    name: "Heeseung",
    src: undefined,
    alt: "Lee Heeseung — ENHYPEN vocalist and dancer",
    placeholder: true,
  },
  jay: {
    id: "jay",
    name: "Jay",
    src: undefined,
    alt: "Park Jongseong (Jay) — ENHYPEN rapper and vocalist",
    placeholder: true,
  },
  jake: {
    id: "jake",
    name: "Jake",
    src: undefined,
    alt: "Sim Jaeyun (Jake) — ENHYPEN rapper and vocalist",
    placeholder: true,
  },
  sunghoon: {
    id: "sunghoon",
    name: "Sunghoon",
    src: undefined,
    alt: "Park Sunghoon — ENHYPEN vocalist and visual",
    placeholder: true,
  },
  sunoo: {
    id: "sunoo",
    name: "Sunoo",
    src: undefined,
    alt: "Kim Sunoo — ENHYPEN vocalist",
    placeholder: true,
  },
  "ni-ki": {
    id: "ni-ki",
    name: "Ni-ki",
    src: undefined,
    alt: "Nishimura Riki (Ni-ki) — ENHYPEN main dancer",
    placeholder: true,
  },
};

// ─── Album / Era Images ───────────────────────────────────────────────────────

export type AlbumId =
  | "border-day-one"
  | "border-carnival"
  | "dimension-dilemma"
  | "dimension-answer"
  | "manifesto-day-1"
  | "dark-blood"
  | "orange-blood"
  | "romance-untold"
  | "sin-vanish";

export interface AlbumImage {
  id: AlbumId;
  title: string;
  src?: string;
  alt: string;
  placeholder: boolean;
}

export const albumImages: Record<AlbumId, AlbumImage> = {
  "border-day-one": {
    id: "border-day-one",
    title: "BORDER: DAY ONE",
    src: undefined,
    alt: "ENHYPEN BORDER: DAY ONE album cover",
    placeholder: true,
  },
  "border-carnival": {
    id: "border-carnival",
    title: "BORDER: CARNIVAL",
    src: undefined,
    alt: "ENHYPEN BORDER: CARNIVAL album cover",
    placeholder: true,
  },
  "dimension-dilemma": {
    id: "dimension-dilemma",
    title: "DIMENSION: DILEMMA",
    src: undefined,
    alt: "ENHYPEN DIMENSION: DILEMMA album cover",
    placeholder: true,
  },
  "dimension-answer": {
    id: "dimension-answer",
    title: "DIMENSION: ANSWER",
    src: undefined,
    alt: "ENHYPEN DIMENSION: ANSWER album cover",
    placeholder: true,
  },
  "manifesto-day-1": {
    id: "manifesto-day-1",
    title: "MANIFESTO: DAY 1",
    src: undefined,
    alt: "ENHYPEN MANIFESTO: DAY 1 album cover",
    placeholder: true,
  },
  "dark-blood": {
    id: "dark-blood",
    title: "DARK BLOOD",
    src: undefined,
    alt: "ENHYPEN DARK BLOOD album cover",
    placeholder: true,
  },
  "orange-blood": {
    id: "orange-blood",
    title: "ORANGE BLOOD",
    src: undefined,
    alt: "ENHYPEN ORANGE BLOOD album cover",
    placeholder: true,
  },
  "romance-untold": {
    id: "romance-untold",
    title: "ROMANCE : UNTOLD",
    src: undefined,
    alt: "ENHYPEN ROMANCE : UNTOLD album cover",
    placeholder: true,
  },
  "sin-vanish": {
    id: "sin-vanish",
    title: "SIN : VANISH",
    src: undefined,
    alt: "ENHYPEN SIN : VANISH album cover",
    placeholder: true,
  },
};

// ─── Helper utilities ─────────────────────────────────────────────────────────

export function getMemberImage(id: MemberId): MemberImage {
  return memberImages[id];
}

export function getAlbumImage(id: AlbumId): AlbumImage {
  return albumImages[id];
}

export function hasImage(entry: MemberImage | AlbumImage): boolean {
  return !entry.placeholder && entry.src !== undefined;
}
