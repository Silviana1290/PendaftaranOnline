'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

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
      <div className="bg-white rounded-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Reprint</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSearch}>
          <div className="mb-6">
            <input
              type="text"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              placeholder="Masukan data NIK, kemudian tekan ENTER"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </form>

        {hasSearched && (
          <>
            <div className="overflow-x-auto">
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

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Menampilkan {searchResults.length} s/d {searchResults.length} dari {searchResults.length} data
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded text-gray-600" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded" disabled>
                  1
                </button>
                <button className="px-3 py-1 border rounded text-gray-600" disabled>
                  Next
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Cari Antrean
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Tutup
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

