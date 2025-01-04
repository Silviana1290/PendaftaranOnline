'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const regions = [
  {
    id: 'pusat',
    name: 'Surabaya Pusat',
    puskesmas: 'Dr. Soetomo, Gundih, Kedungdoro, Ketabang, Peneleh, Simolawang, Tambakrejo, Tembok Dukuh'
  },
  {
    id: 'barat',
    name: 'Surabaya Barat',
    puskesmas: 'Asemrowo, Balongsari, Bangkingan, Benowo, Jeruk, Lidah Kulon, Lontar, Made, Manukan Kulon, Sememi, Simomulyo, Tanjungsari'
  },
  {
    id: 'timur',
    name: 'Surabaya Timur',
    puskesmas: 'Gading, Gunung Anyar, Kalijudan, Kalirungkut, Keputih, Klampis Ngasem, Medokan Ayu, Menur, Mojo, Mulyorejo, Pacarkeling, Pucangsewu, Rangkah, Tenggilis'
  },
  {
    id: 'utara',
    name: 'Surabaya Utara',
    puskesmas: 'Bulak Banteng, Dupak, Kenjeran, Krembangan Selatan, Moro Krembangan, Pegirian, Perak Timur, Sawah Pulo, Sidotropo, Tanah Kali Kedindi, Wonokusumo'
  },
  {
    id: 'selatan',
    name: 'Surabaya Selatan',
    puskesmas: 'Balas Klumprik, Banyu Urip, Dukuh Kupang, Gayungan, Jagir, Kebonsari, Ngagel, Putat Jaya, Sidosermo, Siwalankerto, Wiyung'
  }
]

const RegionCard = ({ region, isSelected, onClick }: {
  region: typeof regions[0]
  isSelected: boolean
  onClick: () => void
}) => {
  const getArrowDirection = (id: string) => {
    switch (id) {
      case 'pusat': return 'animate-spin'
      case 'barat': return 'rotate-180'
      case 'timur': return 'rotate-0'
      case 'utara': return '-rotate-90'
      case 'selatan': return 'rotate-90'
      default: return ''
    }
  }

  return (
    <div 
      onClick={onClick}
      className={`
        relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden
        ${isSelected ? 'border-4 border-[#ff4791]' : ''}
      `}
    >
      <div className="p-6">
        <button className="w-20 h-20 mx-auto mb-4 relative group">
          <div className={`absolute inset-[7px] border-[6px] border-[#ff4791] rounded-full transition-all duration-500 
            ${getArrowDirection(region.id)}`}>
            <svg 
              viewBox="0 0 46 40" 
              fill="#ff4791" 
              className={`w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                ${region.id === 'pusat' ? 'hidden' : ''}`}
            >
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
            </svg>
          </div>
        </button>

        <h2 className="text-xl font-semibold text-center text-[#d10065] mb-2">{region.name}</h2>
        <p className="text-sm text-gray-500 text-center mb-4">List of Puskesmas Centers</p>
        <p className="text-sm text-gray-600">{region.puskesmas}</p>
      </div>
    </div>
  )
}

export default function PuskesmasPage() {
  const router = useRouter()
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId)
    router.push(`/puskesmas/${regionId}`)
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button className="bg-[#ff4791] text-white hover:bg-[#d10065]">
              Kembali
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#d10065]">Pilih Wilayah Puskesmas</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <RegionCard
              key={region.id}
              region={region}
              isSelected={selectedRegion === region.id}
              onClick={() => handleRegionSelect(region.id)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

