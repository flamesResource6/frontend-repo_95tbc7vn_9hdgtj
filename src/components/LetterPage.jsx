import React from 'react'
import { Link } from 'react-router-dom'

function LetterPage() {
  return (
    <div className="min-h-screen bg-[#0b0010] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <p className="text-pink-300/80 text-sm tracking-widest">UNTUKMU</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-200 mt-2">
            Sebuah surat cinta
          </h2>
        </div>

        <div className="relative bg-[#120016]/60 border border-pink-500/20 rounded-2xl p-6 sm:p-10 text-left shadow-[0_0_60px_rgba(255,20,147,0.25)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
          <div className="prose prose-invert max-w-none">
            <p className="text-pink-100/90 leading-relaxed">
              Aku menulis ini dengan hati yang berpendar lembut, seperti cahaya yang diam-diam
              menemani malam. Kamu adalah rumah yang selalu ingin kutuju, tempat segala rindu
              menemukan pulang.
            </p>
            <p className="text-pink-100/90 leading-relaxed mt-4">
              Terima kasih sudah menjadi hangat di hari-hari yang dingin, menjadi tenang di
              saat pikiranku berisik. Setiap detik bersamamu rasanya sederhana, tapi indah—
              seperti bintang yang tidak berisik, namun hadirnya membuat langit terasa lengkap.
            </p>
            <p className="text-pink-100/90 leading-relaxed mt-4">
              Jika boleh jujur, aku tidak butuh apa-apa yang mewah. Cukup kamu—tetap ada,
              dengan tawa yang kutahu, dengan tatap yang membuatku yakin: aku ingin menetap.
            </p>
            <p className="text-pink-200 font-medium leading-relaxed mt-6">
              Dengan segenap rasa, aku mencintaimu. Hari ini, besok, dan seterusnya.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
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
