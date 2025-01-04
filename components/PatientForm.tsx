'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PatientFormProps {
  specialty: string
  appointmentDate: Date | null
}

const tribes = [
  'Jawa', 'Sunda', 'Madura', 'Batak', 'Minangkabau',
  'Bugis', 'Betawi', 'Banten', 'Banjar', 'Lainnya'
]

const languages = [
  'Indonesia', 'Jawa', 'Sunda', 'Madura', 'Minang',
  'Batak', 'Bugis', 'Inggris', 'Mandarin', 'Lainnya'
]

export default function PatientForm({ specialty, appointmentDate }: PatientFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nik: '',
    insuranceType: '',
    tribe: '',
    language: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    router.push('/confirmation')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">NIK</label>
          <Input
            required
            type="text"
            placeholder="Masukkan NIK"
            value={formData.nik}
            onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
            pattern="\d{16}"
            title="NIK harus 16 digit"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Jenis Penjamin</label>
          <Select
            required
            value={formData.insuranceType}
            onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih jenis penjamin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="umum">Umum</SelectItem>
              <SelectItem value="bpjs">BPJS Kesehatan</SelectItem>
              <SelectItem value="asuransi">Asuransi Lain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Suku</label>
          <Select
            required
            value={formData.tribe}
            onValueChange={(value) => setFormData({ ...formData, tribe: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih suku" />
            </SelectTrigger>
            <SelectContent>
              {tribes.map((tribe) => (
                <SelectItem key={tribe} value={tribe.toLowerCase()}>
                  {tribe}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bahasa</label>
          <Select
            required
            value={formData.language}
            onValueChange={(value) => setFormData({ ...formData, language: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih bahasa" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language.toLowerCase()}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit"
          className="w-full bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
        >
          Daftar
        </Button>
      </form>
    </div>
  )
}

