export function ClawFriendLogo({ width = 129, height = 40 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 129 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8C8 8 4 14 4 20C4 26 8 32 14 32C18 32 21 29 22 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 8C14 8 10 14 10 20C10 24 12 28 16 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="16" r="2" fill="#D2FF55" />
      <circle cx="12" cy="18" r="1.5" fill="#D2FF55" />
      <path
        d="M20 12L24 8M18 10L20 6M22 14L28 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="34"
        y="26"
        fill="white"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="-0.02em"
      >
        ClawFriend
      </text>
    </svg>
  );
}
