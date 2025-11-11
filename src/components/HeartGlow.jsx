import React from 'react'

function HeartGlow({ size = 200, color = '#ff4da6' }) {
  const heartStyle = {
    width: size,
    height: size,
    filter: 'drop-shadow(0 0 25px rgba(255, 105, 180, 0.75)) drop-shadow(0 0 60px rgba(255, 105, 180, 0.45))',
  }

  return (
    <div className="relative" style={{ width: size, height: size }} aria-hidden="true">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-50 animate-pulse"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}55, transparent 60%)`,
        }}
      />

      {/* Heart shape using two circles and a square rotated */}
      <div className="relative mx-auto" style={heartStyle}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* left lobe */}
            <div
              className="absolute rounded-full"
              style={{
                width: size * 0.6,
                height: size * 0.6,
                background: color,
                left: 0,
                top: size * 0.1,
              }}
            />
            {/* right lobe */}
            <div
              className="absolute rounded-full"
              style={{
                width: size * 0.6,
                height: size * 0.6,
                background: color,
                right: 0,
                top: size * 0.1,
              }}
            />
            {/* bottom point */}
            <div
              className="absolute rotate-45"
              style={{
                width: size * 0.85,
                height: size * 0.85,
                background: color,
                left: size * 0.075,
                top: size * 0.25,
                borderBottomRightRadius: size * 0.25,
              }}
            />
          </div>
        </div>

        {/* Inner shine */}
        <div
          className="pointer-events-none absolute left-0 top-0 w-full h-full"
          style={{
            background:
              'radial-gradient(120px 120px at 35% 30%, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* twinkle particles */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-70 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default HeartGlow
