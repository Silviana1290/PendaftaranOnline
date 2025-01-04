'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const facilityTypes = [
  { id: 'puskesmas', label: 'Puskesmas', color: '#4A90E2' },
  { id: 'pustu', label: 'Pustu', color: '#4A90E2' },
  { id: 'klinik', label: 'Klinik', color: '#F5A623' },
  { id: 'rumahsakit', label: 'Rumah Sakit', color: '#F5A623' },
  { id: 'laboratorium', label: 'Laboratorium', color: '#F5A623' },
  { id: 'apotek', label: 'Apotek', color: '#F5A623' }
]

export default function MapPage() {
  const router = useRouter()
  const [selectedTypes, setSelectedTypes] = useState(['puskesmas', 'pustu'])

  const toggleFacilityType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sarana Kesehatan</h2>
          <Button
            onClick={() => router.push('/')}
            className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
          >
            Kembali
          </Button>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg mb-4">
          <div className="flex flex-wrap gap-4">
            {facilityTypes.map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() => toggleFacilityType(type.id)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Map selectedTypes={selectedTypes} />
        </div>

        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Ket.</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilityTypes.map((type) => (
              <div key={type.id} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-sm">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

