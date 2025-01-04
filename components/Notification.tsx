'use client'

import { useState, useEffect } from 'react'

export default function Notification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const hasSeenNotification = localStorage.getItem('hasSeenNotification')
    if (!hasSeenNotification) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    if (isChecked) {
      localStorage.setItem('hasSeenNotification', 'true')
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[450px] bg-white border-4 border-black rounded-lg p-6">
        <div className="flex items-center gap-4 border-b-3 border-black pb-4">
          <div className="bg-black rounded-full p-2">
            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
          </div>
          <div className="font-black text-xl uppercase">Dalam rangka tertib administrasi dan pelayanan :</div>
        </div>
        <div className="my-4 mx-2 text-base font-semibold border-b-2 border-black pb-4">
          <p className="mb-2">1. Pasien dapat melakukan pembatalan, apabila tidak dapat hadir sesuai tanggal yang sudah dipilih pada aplikasi.</p>
          <p className="mb-2">2. Akun pendaftaran pasien akan diblokir, apabila pasien tidak hadir sesuai pendaftaran sebanyak 3 kali.</p>
          <p>3. Untuk membuka blokir, dapat menghubungi petugas admin pada fasilitas kesehatan yang ditunjuk.</p>
        </div>
        <label className="flex items-center mb-4 cursor-pointer mx-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="sr-only"
          />
          <span className="w-5 h-5 border-2 border-black rounded mr-3 flex items-center justify-center">
            {isChecked && (
              <span className="w-3 h-3 bg-[#037cec]"></span>
            )}
          </span>
          <span className="text-sm font-semibold">Tandai Telah Dibaca</span>
        </label>
        <button
          onClick={handleDismiss}
          className="w-full py-3 text-center font-bold uppercase border-3 border-black bg-black text-white hover:bg-[#037cec] transition-colors duration-300 shadow-[5px_5px_0_0_#000] hover:shadow-[7px_7px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Okay
        </button>
      </div>
    </div>
  )
}

