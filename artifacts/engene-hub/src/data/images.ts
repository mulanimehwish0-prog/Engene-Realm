/**
 * Engene Hub — Image Data Structure
 *
 * HOW TO ADD REAL IMAGES
 * ──────────────────────
 * 1. Drop the image file into `src/assets/` (e.g. `src/assets/albums/dark-blood.jpg`)
 *    OR use an absolute URL (CDN link).
 * 2. Find the matching entry below.
 * 3. Replace the `src` value:
 *      - Local file:  import img from "@assets/albums/dark-blood.jpg"
 *                     then set  src: img
 *      - Remote URL:  src: "https://example.com/dark-blood.jpg"
 * 4. Set `placeholder: false` — the component will render the real image.
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
  enchin?: string;
  alt: string;
  placeholder: boolean;
}

export const memberImages: Record<MemberId, MemberImage> = {
  jungwon:   { id: "jungwon",   name: "Jungwon",   src: "https://suaragong.com/wp-content/uploads/2025/03/Yang-Jungwoon.webp", enchin:undefined, alt: "Yang Jungwon — ENHYPEN leader",                          placeholder: false },
  heeseung:  { id: "heeseung",  name: "Heeseung",  src: "https://assets.teenvogue.com/photos/69aff74dece51f0f059d051e/16:9/w_1600,c_limit/2257528816", enchin:undefined, alt: "Lee Heeseung — ENHYPEN vocalist and dancer",             placeholder: false },
  jay:       { id: "jay",       name: "Jay",       src: "https://nolae.eu/cdn/shop/articles/jay-enhypen-profil-662196.jpg?v=1720447969&width=1920", enchin:undefined, alt: "Park Jongseong (Jay) — ENHYPEN rapper and vocalist",     placeholder: false },
  jake:      { id: "jake",      name: "Jake",      src: "https://pbs.twimg.com/media/G8_spDabsAAy2lz.jpg",enchin:undefined, alt: "Sim Jaeyun (Jake) — ENHYPEN rapper and vocalist",       placeholder: false },
  sunghoon:  { id: "sunghoon",  name: "Sunghoon",  src: "https://www.musicmundial.com/en/wp-content/uploads/2025/12/ENHYPENs-Sunghoon-visuals-spark-debate-and-divide-fans-online.jpg", enchin:undefined, alt: "Park Sunghoon — ENHYPEN vocalist and visual",           placeholder: false },
  sunoo:     { id: "sunoo",     name: "Sunoo",     src: "https://media.assettype.com/tribune%2F2024-12-18%2Fuvocyjpq%2Fviberimage2024-12-1812-11-40-202.jpg?w=480&auto=format%2Ccompress", enchin:undefined, alt: "Kim Sunoo — ENHYPEN vocalist",                          placeholder: false },
  "ni-ki":   { id: "ni-ki",    name: "Ni-ki",     src:"https://staticg.sportskeeda.com/editor/2026/02/877e2-17698923773893-1920.jpg?w=640",enchin:"https://cdn.shopify.com/s/files/1/0673/0707/7942/files/puni.png?v=1779293692", alt: "Nishimura Riki (Ni-ki) — ENHYPEN main dancer",          placeholder: false },
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
  | "romance-untold-daydream"
  | "memorabilia"
  | "desire-unleash"
  | "sadame"
  | "sin-vanish"
  | "sin-bliss";

export interface AlbumImage {
  id: AlbumId;
  title: string;
  src?: string;
  alt: string;
  placeholder: boolean;
}

export const albumImages: Record<AlbumId, AlbumImage> = {
  "border-day-one":           { id: "border-day-one",           title: "BORDER : DAY ONE",              src: "https://kpopreviewed.com/wp-content/uploads/2021/01/enhypen-borderdayone-1.jpg?w=1200&h=800&crop=1" , alt: "ENHYPEN BORDER : DAY ONE album cover",              placeholder: false },
  "border-carnival":          { id: "border-carnival",          title: "BORDER : CARNIVAL",             src:"https://kpopreviewed.com/wp-content/uploads/2021/07/enhypen-bordercarnival-1.jpg?w=1200&h=801&crop=1", alt: "ENHYPEN BORDER : CARNIVAL album cover",             placeholder: false },
  "dimension-dilemma":        { id: "dimension-dilemma",        title: "DIMENSION : DILEMMA",           src: "https://phinf.wevpstatic.net/MjAyMjA2MTdfMyAg/MDAxNjU1NDQ2NjYyMDI3.3yG0j1xyb1p-0cTdXFEmHo5gDxXN_eynB4wdi0kbNZwg.JAwwrRzWEcKki21z0OyEatCwkHKHvwFsSoOIRE-DCuQg.JPEG/b06bc7e8a34746d79919f9c80b7f9a4a820.jpg", alt: "ENHYPEN DIMENSION : DILEMMA album cover",           placeholder: false },
  "dimension-answer":         { id: "dimension-answer",         title: "DIMENSION : ANSWER",            src: "https://imgix.bustle.com/uploads/image/2021/12/10/6df6f09f-82f0-41f3-be83-f6bff80d1d56-enhypen_photo-courtesy-of-belift-lab.jpg?w=414&h=394&fit=crop&crop=focalpoint&dpr=2&fp-x=0.5213&fp-y=0.4927", alt: "ENHYPEN DIMENSION : ANSWER album cover",            placeholder: false },
  "manifesto-day-1":          { id: "manifesto-day-1",          title: "MANIFESTO : DAY 1",             src: "https://6.soompi.io/wp-content/uploads/image/df7b2ba74ca04f9c8bc938c0179cb9d1/dummy.jpeg?s=900x600&e=t", alt: "ENHYPEN MANIFESTO : DAY 1 album cover",             placeholder: false },
  "dark-blood":               { id: "dark-blood",               title: "DARK BLOOD",                   src: "https://www.nme.com/wp-content/uploads/2023/05/enhypen-dark-blood-review.jpg", alt: "ENHYPEN DARK BLOOD album cover",                   placeholder: false },
  "orange-blood":             { id: "orange-blood",             title: "ORANGE BLOOD",                 src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoNlyj0SPvjpFuBmbAdbNASKCBsLmgem_mg&s", alt: "ENHYPEN ORANGE BLOOD album cover",                 placeholder: false },
  "romance-untold":           { id: "romance-untold",           title: "ROMANCE : UNTOLD",             src: "https://www.billboard.com/wp-content/uploads/2024/07/ENHYPEN-Romance-untold-cr-Courtesy-of-BELIFT-LAB-press-2024-01-a-billboard-1548.jpg?w=942&h=628&crop=1", alt: "ENHYPEN ROMANCE : UNTOLD album cover",             placeholder: false },
  "romance-untold-daydream":  { id: "romance-untold-daydream",  title: "ROMANCE : UNTOLD -daydream-",  src: "https://i0.wp.com/www.poptokki.com/wp-content/uploads/2024/11/ENHYPEN-DAYDREAM.png?w=1200&ssl=1",  placeholder: false },
  "memorabilia":              { id: "memorabilia",              title: "MEMORABILIA",                  src:"https://i.pinimg.com/736x/9a/8c/19/9a8c193176b1d56a004293640bc7a797.jpg", alt: "ENHYPEN MEMORABILIA album cover",                  placeholder: false },
  "desire-unleash":           { id: "desire-unleash",           title: "DESIRE : UNLEASH",             src: "https://www.billboard.com/wp-content/uploads/2025/06/enhypen-pr-cr-BELIFT-LAB-2025-billboard-1548.jpg", alt: "ENHYPEN DESIRE : UNLEASH album cover",             placeholder: false },
  "sadame":                   { id: "sadame",                   title: "SADAME",                       src: "https://www.allkpop.com/upload/2022/11/content/010255/1667285734-img-20221101-145359.jpg", alt: "ENHYPEN SADAME album cover",                       placeholder: false },
  "sin-vanish":               { id: "sin-vanish",               title: "SIN : VANISH",                 src:"https://www.chosun.com/resizer/v2/GEYTQOLGMEZTQYJWMI4GEODCMY.jpg?auth=915c6f859f92cbb1ca0f6712167496254638394ac16c12c5492bc0b8c3f6d23a&width=616", alt: "ENHYPEN SIN : VANISH album cover",                 placeholder: false },
  "sin-bliss":               { id: "sin-bliss",               title: "SIN : BLISS",                   src: "https://i.scdn.co/image/ab67616d00001e024772ad7815623fc74d6c154e", alt: "ENHYPEN SIN : BLISS album cover",                   placeholder: false },
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
