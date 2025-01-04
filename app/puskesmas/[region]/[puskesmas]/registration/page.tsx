'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const tribes = [
  'Jawa',
  'Sunda',
  'Madura',
  'Batak',
  'Minangkabau',
  'Bugis',
  'Betawi',
  'Banten',
  'Banjar',
  'Lainnya'
]

const languages = [
  'Indonesia',
  'Jawa',
  'Sunda',
  'Madura',
  'Minang',
  'Batak',
  'Bugis',
  'Inggris',
  'Mandarin',
  'Lainnya'
]

export default function RegistrationPage() {
  const router = useRouter()
  const [insuranceType, setInsuranceType] = useState<'umum' | 'bpjs'>('umum')
  const [formData, setFormData] = useState({
    nik: '',
    tribe: 'Jawa',
    language: 'Indonesia'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { insuranceType, ...formData })
    // Navigate to next page
    router.push('/confirmation')
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Pendaftaran</h1>
            <div className="space-x-4">
              <Button 
                onClick={handleSubmit}
                className="bg-[#3b82f6] text-white hover:bg-blue-600"
              >
                Lanjut
              </Button>
              <Button 
                onClick={() => router.back()}
                variant="destructive"
              >
                Kembali
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Tanggal Layanan</label>
              <div className="md:col-span-2">
                <p className="font-medium">Selasa, 07 Januari 2025</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Sarana Kesehatan</label>
              <div className="md:col-span-2">
                <p className="font-medium">RSUD dr. M. SOEWANDHIE</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Poli/Klinik</label>
              <div className="md:col-span-2">
                <p className="font-medium">PENYAKIT DALAM</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Penjamin</label>
              <div className="md:col-span-2 flex gap-4">
                <Button
                  type="button"
                  variant={insuranceType === 'umum' ? 'default' : 'outline'}
                  className={insuranceType === 'umum' ? 'bg-gray-600' : ''}
                  onClick={() => setInsuranceType('umum')}
                >
                  Umum/Asuransi Lain
                </Button>
                <Button
                  type="button"
                  variant={insuranceType === 'bpjs' ? 'default' : 'outline'}
                  className={insuranceType === 'bpjs' ? 'bg-[#ff4141]' : ''}
                  onClick={() => setInsuranceType('bpjs')}
                >
                  BPJS Kesehatan
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">NIK</label>
              <div className="md:col-span-2">
                <Input
                  type="text"
                  value={formData.nik}
                  onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                  placeholder="Masukan data NIK, kemudian tekan ENTER"
                  className="w-full"
                  required
                  pattern="\d{16}"
                  title="NIK harus 16 digit"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Suku</label>
              <div className="md:col-span-2">
                <Select
                  value={formData.tribe}
                  onValueChange={(value) => setFormData({ ...formData, tribe: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih suku" />
                  </SelectTrigger>
                  <SelectContent>
                    {tribes.map((tribe) => (
                      <SelectItem key={tribe} value={tribe}>
                        {tribe}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-gray-600">Bahasa</label>
              <div className="md:col-span-2">
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih bahasa" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

