'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const specialties = [
  { id: 'penyakit-dalam', name: 'PENYAKIT DALAM', icon: '🫁' },
  { id: 'bedah-digestif', name: 'BEDAH DIGESTIF', icon: '👨‍⚕️' },
  { id: 'penyakit-dalam-sore', name: 'PENYAKIT DALAM KLINIK SORE', icon: '🫁' },
  { id: 'jantung', name: 'JANTUNG', icon: '❤️' },
  { id: 'rehab-medik', name: 'REHAB MEDIK', icon: '🏥' },
  { id: 'bedah', name: 'BEDAH', icon: '🔪' },
  { id: 'syaraf', name: 'SYARAF', icon: '🧠' },
  { id: 'periodonti', name: 'PERIODONTI', icon: '🦷' },
  { id: 'endodonsi', name: 'ENDODONSI', icon: '🦷' },
  { id: 'orthodonti', name: 'ORTHODONTI', icon: '🦷' },
  { id: 'risti', name: 'RISTI DAN PREEKLAMSIA (HAMIL)', icon: '🤰' },
  { id: 'bedah-onkologi', name: 'BEDAH ONKOLOGI', icon: '🔬' }
]

export default function PoliPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSpecialtySelect = (id: string) => {
    setSelectedSpecialty(id)
    router.push(`/rumah-sakit/schedule/${id}`)
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Demi kecepatan dan kenyamanan mengakses layanan ehealth, kami sampaikan bahwa untuk pendaftaran ke RSUD diberikan waktu hingga 33 hari kedepan (diatas jam 12:00 WIB).
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <Button 
            onClick={() => router.back()}
            className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
          >
            Kembali
          </Button>
          <h1 className="text-2xl font-bold">Pilih Poli/Klinik</h1>
        </div>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Cari Poli/Klinik"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              onClick={() => handleSpecialtySelect(specialty.id)}
              className="bg-[#ff4141] text-white p-4 rounded-lg text-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-2">{specialty.icon}</div>
              <div className="font-semibold text-sm">{specialty.name}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

