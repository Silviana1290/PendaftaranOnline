'use client'

import { useState } from 'react'

interface ReprintFormProps {
  onClose: () => void
}

export default function ReprintForm({ onClose }: ReprintFormProps) {
  const [nik, setNik] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate NIK validation
    const validNIKs = ["1234567890123456", "2345678901234567", "3456789012345678"]
    if (validNIKs.includes(nik)) {
      setError('NIK ditemukan! Silakan lanjutkan.')
    } else {
      setError('NIK tidak ditemukan. Silakan cek kembali NIK Anda.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Reprint</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nik" className="block text-gray-700 text-sm font-bold mb-2">
              Masukan data NIK
            </label>
            <input
              type="text"
              id="nik"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {error && <p className={error.includes('ditemukan') ? 'text-green-500' : 'text-red-500'}>{error}</p>}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cari Antrean
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Tutup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

