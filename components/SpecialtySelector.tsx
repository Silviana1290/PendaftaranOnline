'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SpecialtySelectorProps {
  onSelect: (specialty: string) => void
  selected: string
}

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
  { id: 'bedah-onkologi', name: 'BEDAH ONKOLOGI', icon: '🔬' },
  { id: 'gigi', name: 'GIGI', icon: '🦷' },
  { id: 'mata', name: 'MATA', icon: '👁️' },
  { id: 'orthopedi', name: 'ORTHOPEDI', icon: '🦴' },
  { id: 'paru', name: 'PARU', icon: '🫁' },
  { id: 'kb', name: 'KB', icon: '👨‍👩‍👦' },
  { id: 'usg', name: 'USG DV', icon: '🔊' }
]

export default function SpecialtySelector({ onSelect, selected }: SpecialtySelectorProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
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
            onClick={() => onSelect(specialty.id)}
            className={`
              bg-[#ff4141] text-white p-4 rounded-lg text-center cursor-pointer
              transition-transform hover:scale-105
              ${selected === specialty.id ? 'ring-4 ring-black' : ''}
            `}
          >
            <div className="text-4xl mb-2">{specialty.icon}</div>
            <div className="font-semibold text-sm">{specialty.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

