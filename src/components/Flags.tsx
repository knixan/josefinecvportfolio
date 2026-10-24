import { useId } from "react";

// SVG-flaggor eftersom flagg-emojis inte renderas i Windows

export function SwedishFlag({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      className={`${className} rounded-[2px]`}
      aria-hidden
    >
      <rect width="16" height="10" fill="#006aa7" />
      <rect x="5" width="2" height="10" fill="#fecc00" />
      <rect y="4" width="16" height="2" fill="#fecc00" />
    </svg>
  );
}

export function BritishFlag({ className = "h-4 w-6" }: { className?: string }) {
  const clipId = useId();
  return (
    <svg
      viewBox="0 0 60 30"
      className={`${className} rounded-[2px]`}
      aria-hidden
    >
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clipId})`}
        stroke="#c8102e"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  );
}

export const FLAGS: Record<string, typeof SwedishFlag> = {
  sv: SwedishFlag,
  en: BritishFlag,
};
