import React from 'react'

function HeartGlow({ size = 240, color = '#ff4da6', className = '', onClick }) {
  const glowColorStrong = 'rgba(255, 20, 147, 0.55)'
  const glowColorSoft = 'rgba(255, 105, 180, 0.35)'

  const ringParticles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * 360
    const radius = 48
    return { angle, radius, size: 3 + (i % 3), delay: (i % 6) * 0.2 }
  })

  return (
    <div
      className={`group relative select-none ${className}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 76%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse at center, black 76%, transparent 100%)',
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Buka surat' : undefined}
    >
      {/* Ambient multi-layer glow to avoid boxy edges */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70 animate-[pulse_2.8s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(520px_520px_at_50%_50%, ${glowColorStrong}, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-60"
        style={{
          background: `radial-gradient(closest-side, ${glowColorSoft}, transparent 85%)`,
        }}
      />

      {/* Heart container with gentle float + sway + heartbeat */}
      <div className="relative z-10 w-full h-full flex items-center justify-center"
           style={{
             animation: 'floatY 6s ease-in-out infinite, sway 7s ease-in-out infinite, heartbeat 2.4s ease-in-out infinite',
           }}
      >
        {/* Precise heart using SVG path for perfect shape */}
        <svg
          viewBox="0 0 100 100"
          className="w-[82%] h-[82%] drop-shadow-[0_0_30px_rgba(255,20,147,0.55)] transition-transform duration-300 group-active:scale-[0.98]"
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
              filter: `drop-shadow(0 0 22px ${glowColorStrong}) drop-shadow(0 0 52px ${glowColorSoft})`,
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
      </div>

      {/* Orbiting particle ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: '84%', height: '84%', animation: 'spinSlow 24s linear infinite' }}>
          {ringParticles.map((p, i) => (
            <span
              key={`ring-${i}`}
              className="absolute rounded-full bg-pink-300/80"
              style={{
                width: p.size,
                height: p.size,
                left: '50%',
                top: '50%',
                transform: `rotate(${p.angle}deg) translate(${p.radius}px) rotate(-${p.angle}deg)`,
                boxShadow: `0 0 10px ${glowColorStrong}`,
                animation: `twinkle ${2 + (i % 5)}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Twinkling drifting particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-pink-300/80"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              boxShadow: `0 0 10px ${glowColorStrong}`,
              animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.2}s infinite, drift ${6 + (i % 4)}s ease-in-out ${(i % 9) * 0.15}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Local styles */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { transform: scale(0.9); opacity: .6 }
            50% { transform: scale(1.3); opacity: 1 }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
          }
          @keyframes floatY {
            0%, 100% { transform: translateY(2px) }
            50% { transform: translateY(-6px) }
          }
          @keyframes sway {
            0%, 100% { transform: rotate(-1.2deg) }
            50% { transform: rotate(1.2deg) }
          }
          @keyframes heartbeat {
            0%, 100% { transform: scale(1) }
            15% { transform: scale(1.06) }
            30% { transform: scale(0.98) }
            45% { transform: scale(1.04) }
            60% { transform: scale(0.99) }
            75% { transform: scale(1.03) }
          }
          @keyframes drift {
            0%   { transform: translateY(0px) translateX(0px) }
            50%  { transform: translateY(-8px) translateX(6px) }
            100% { transform: translateY(0px) translateX(-4px) }
          }
        `}
      </style>
    </div>
  )
}

export default HeartGlow
