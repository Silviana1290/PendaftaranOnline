'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface Appointment {
  id: number
  noAntrean: string
  unitKerja: string
  poli: string
  nik: string
  namaLengkap: string
  tanggal: string
}

const mockAppointments: Appointment[] = [
  {
    id: 1,
    noAntrean: '1',
    unitKerja: 'Puskesmas Peneleh',
    poli: 'UMUM',
    nik: '3578****0001',
    namaLengkap: 'ROFI BARBIE SILVIANA PUTRI',
    tanggal: '01-01-2025 07:00:00'
  }
]

export default function ReprintModal({ onClose }: { onClose: () => void }) {
  const [nik, setNik] = useState('')
  const [searchResults, setSearchResults] = useState<Appointment[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = mockAppointments.filter(apt => apt.nik.includes(nik))
    setSearchResults(results)
    setHasSearched(true)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-lg ${hasSearched ? 'w-[90%] max-w-6xl' : 'w-[400px]'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Reprint</h2>
          <button 
            onClick={onClose}
            className="text-red-500 hover:text-red-700"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="Masukan data NIK"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <Search className="w-5 h-5" />
                Cari Antrean
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Tutup
              </button>
            </div>
          </form>

          {hasSearched && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 text-left border">No Antrean</th>
                    <th className="p-2 text-left border">Unit Kerja</th>
                    <th className="p-2 text-left border">Poli</th>
                    <th className="p-2 text-left border">NIK</th>
                    <th className="p-2 text-left border">Nama Lengkap</th>
                    <th className="p-2 text-left border">Tanggal</th>
                    <th className="p-2 text-left border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((appointment) => (
                    <tr key={appointment.id} className="border-t">
                      <td className="p-2 border">{appointment.noAntrean}</td>
                      <td className="p-2 border">{appointment.unitKerja}</td>
                      <td className="p-2 border">{appointment.poli}</td>
                      <td className="p-2 border">{appointment.nik}</td>
                      <td className="p-2 border">{appointment.namaLengkap}</td>
                      <td className="p-2 border">{appointment.tanggal}</td>
                      <td className="p-2 border">
                        <div className="flex gap-2">
                          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                            Reprint
                          </button>
                          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                            Batal
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
