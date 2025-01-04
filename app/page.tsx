'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuOption from '@/components/MenuOption'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!showContent) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#ff4141] mb-4">Selamat Datang di Puskesmas eHealth</h1>
          <p className="text-xl text-gray-600">Silakan pilih sarana kesehatan yang Anda butuhkan di bawah ini:</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuOption
            href="/rumah-sakit"
            imgSrc="https://i.pinimg.com/736x/c7/1f/a0/c71fa0ca10f8ae718891f45a1aedebb2.jpg"
            title="Rumah Sakit"
            description="Pelayanan kesehatan terbaik dengan fasilitas lengkap."
          />
          <MenuOption
            href="/puskesmas"
            imgSrc="https://i.pinimg.com/736x/74/65/ae/7465aefb3fa5c5b35c6371635f920a17.jpg"
            title="Puskesmas"
            description="Layanan kesehatan dasar untuk masyarakat sekitar."
          />
          <MenuOption
            imgSrc="https://i.pinimg.com/736x/a0/57/ea/a057eabfc6910acc9de96f3670e714c2.jpg"
            title="Batal atau Reprint"
            description="Pembatalan antrean atau Reprint tiket antrean."
            isReprintOption={true}
          />
          <MenuOption
            href="/rujukan"
            imgSrc="https://i.pinimg.com/736x/2e/96/9c/2e969c6d1f2f281abd432d7ceef6a221.jpg"
            title="Rumah Sakit Rujukan"
            description="Pengecekan tentang rumah sakit rujukan untuk puskesmas."
          />
          <MenuOption
            href="/pendaftaran-catin"
            imgSrc="https://i.pinimg.com/736x/ce/05/97/ce05979932786f7739d1ce990f4bd3c5.jpg"
            title="Pendaftaran Catin"
            description="Pendaftaran untuk pemeriksaan kesehatan calon pengantin."
          />
          <MenuOption
            href="/peta"
            imgSrc="https://i.pinimg.com/736x/81/a6/d3/81a6d38b21f12af788d74a45c3df4d59.jpg"
            title="Peta"
            description="Lihat lokasi fasilitas kesehatan terdekat di daerah Anda."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

