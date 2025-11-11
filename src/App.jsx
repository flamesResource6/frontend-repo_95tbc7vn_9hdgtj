import React from 'react'
import { Link } from 'react-router-dom'
import HeartGlow from './components/HeartGlow'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#06000a] flex items-center justify-center">
      {/* subtle star background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,105,180,0.12),transparent_30%),_radial-gradient(circle_at_80%_0%,rgba(255,182,193,0.12),transparent_35%),_radial-gradient(circle_at_50%_100%,rgba(199,21,133,0.12),transparent_35%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <HeartGlow size={220} color="#ff4da6" />

        <Link
          to="/surat"
          className="mt-10 inline-flex items-center rounded-full bg-pink-600/90 hover:bg-pink-500 text-white px-8 py-3 text-lg font-semibold tracking-wide shadow-[0_8px_35px_rgba(255,20,147,0.45)] transition-all focus:outline-none focus:ring-2 focus:ring-pink-400/60"
        >
          UNTUKMU
        </Link>
      </div>

      {/* glow wash */}
      <div className="pointer-events-none absolute -inset-40 opacity-60" style={{
        background: 'radial-gradient(600px_600px_at_50%_45%, rgba(255,20,147,0.18), rgba(255,20,147,0.05) 50%, transparent 70%)'
      }} />
    </div>
  )
}

export default App
