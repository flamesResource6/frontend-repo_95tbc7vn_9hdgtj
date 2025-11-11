import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function FadeInParagraphs({ children, delay = 400 }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div
      className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}

function CurtainReveal({ onDone, duration = 1200 }) {
  const [animate, setAnimate] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimate(false)
      onDone?.()
    }, duration)
    return () => clearTimeout(t)
  }, [duration, onDone])

  if (!animate) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* two curtains */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[#0b0010]" style={{
        boxShadow: 'inset -40px 0 80px rgba(255,20,147,0.25)'
      }} />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#0b0010]" style={{
        boxShadow: 'inset 40px 0 80px rgba(255,20,147,0.25)'
      }} />
      <style>
        {`
          .reveal-left { animation: slideLeft ${duration}ms cubic-bezier(.22,.61,.36,1) forwards; }
          .reveal-right { animation: slideRight ${duration}ms cubic-bezier(.22,.61,.36,1) forwards; }
          @keyframes slideLeft { from { transform: translateX(0) } to { transform: translateX(-100%) } }
          @keyframes slideRight { from { transform: translateX(0) } to { transform: translateX(100%) } }
        `}
      </style>
      <div className="absolute inset-y-0 left-0 w-1/2 reveal-left" />
      <div className="absolute inset-y-0 right-0 w-1/2 reveal-right" />
    </div>
  )
}

function LetterPage() {
  const location = useLocation()
  const [revealDone, setRevealDone] = useState(false)

  useEffect(() => {
    // Trigger curtain when arriving from heart click
    setRevealDone(false)
  }, [location.key])

  return (
    <div className="min-h-screen bg-[#0b0010] flex items-center justify-center p-6 overflow-hidden">
      {!revealDone && <CurtainReveal onDone={() => setRevealDone(true)} />}

      <div className="max-w-2xl w-full text-center relative">
        {/* header */}
        <div className={`mb-8 transition-all duration-700 ${revealDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <p className="text-pink-300/80 text-sm tracking-widest">UNTUKMU</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-200 mt-2">
            Sebuah surat cinta
          </h2>
        </div>

        <div className={`relative bg-[#120016]/60 border border-pink-500/20 rounded-2xl p-6 sm:p-10 text-left shadow-[0_0_60px_rgba(255,20,147,0.25)] transition-all duration-700 ${revealDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
          <div className="prose prose-invert max-w-none">
            <FadeInParagraphs delay={revealDone ? 200 : 1200}>
              <p className="text-pink-100/90 leading-relaxed">
                Aku menulis ini dengan hati yang berpendar lembut, seperti cahaya yang diam-diam
                menemani malam. Kamu adalah rumah yang selalu ingin kutuju, tempat segala rindu
                menemukan pulang.
              </p>
            </FadeInParagraphs>
            <FadeInParagraphs delay={revealDone ? 600 : 1600}>
              <p className="text-pink-100/90 leading-relaxed mt-4">
                Terima kasih sudah menjadi hangat di hari-hari yang dingin, menjadi tenang di
                saat pikiranku berisik. Setiap detik bersamamu rasanya sederhana, tapi indah—
                seperti bintang yang tidak berisik, namun hadirnya membuat langit terasa lengkap.
              </p>
            </FadeInParagraphs>
            <FadeInParagraphs delay={revealDone ? 1000 : 2000}>
              <p className="text-pink-100/90 leading-relaxed mt-4">
                Jika boleh jujur, aku tidak butuh apa-apa yang mewah. Cukup kamu—tetap ada,
                dengan tawa yang kutahu, dengan tatap yang membuatku yakin: aku ingin menetap.
              </p>
            </FadeInParagraphs>
            <FadeInParagraphs delay={revealDone ? 1400 : 2400}>
              <p className="text-pink-200 font-medium leading-relaxed mt-6">
                Dengan segenap rasa, aku mencintaimu. Hari ini, besok, dan seterusnya.
              </p>
            </FadeInParagraphs>
          </div>

          <div className={`mt-8 flex justify-center transition-opacity duration-700 ${revealDone ? 'opacity-100' : 'opacity-0'}`}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 text-sm font-semibold shadow-[0_8px_30px_rgba(255,20,147,0.35)] transition-colors"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetterPage
