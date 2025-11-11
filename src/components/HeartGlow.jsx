import React from 'react'

function HeartGlow({ size = 220, color = '#ff4da6', className = '', onClick }) {
  const glowColorStrong = 'rgba(255, 20, 147, 0.55)'
  const glowColorSoft = 'rgba(255, 105, 180, 0.35)'

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Buka surat' : undefined}
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColorStrong}, transparent 60%)`,
        }}
      />

      {/* Precise heart using SVG path for perfect shape */}
      <svg
        viewBox="0 0 100 100"
        className="relative z-10 w-full h-full drop-shadow-[0_0_30px_rgba(255,20,147,0.55)]"
      >
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff7abf" />
            <stop offset="60%" stopColor={color} />
            <stop offset="100%" stopColor="#ff2f9a" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* subtle inner bloom */}
        <ellipse
          cx="50"
          cy="42"
          rx="22"
          ry="14"
          fill="rgba(255,255,255,0.22)"
          filter="url(#softGlow)"
        />

        {/* perfect heart path */}
        <path
          d="M50 86s-3.7-3-7.5-5.8C28 71.5 10 59.9 10 40.5 10 26.8 21 16 34.2 16 42.3 16 48 20 50 24c2-4 7.7-8 15.8-8C79 16 90 26.8 90 40.5c0 19.4-18 31-32.5 39.7C53.7 83 50 86 50 86z"
          fill="url(#heartGrad)"
          style={{
            filter: `drop-shadow(0 0 18px ${glowColorStrong}) drop-shadow(0 0 42px ${glowColorSoft})`,
          }}
        />

        {/* shine highlight */}
        <path
          d="M30 35c3-6 10-10 18-8"
          fill="none"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* twinkling particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-pink-300/80"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 57) % 100}%`,
              top: `${(i * 37) % 100}%`,
              boxShadow: `0 0 10px ${glowColorStrong}`,
              animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* local styles for tiny twinkle */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { transform: scale(0.9); opacity: .6 }
            50% { transform: scale(1.3); opacity: 1 }
          }
        `}
      </style>
    </div>
  )
}

export default HeartGlow
