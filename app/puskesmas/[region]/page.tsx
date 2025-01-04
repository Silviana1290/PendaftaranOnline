'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const puskesmasData = {
  'pusat': [
    'Puskesmas Dr. Soetomo',
    'Puskesmas Gundih',
    'Puskesmas Kedungdoro',
    'Puskesmas Ketabang',
    'Puskesmas Peneleh',
    'Puskesmas Simolawang',
    'Puskesmas Tambakrejo',
    'Puskesmas Tembok Dukuh'
  ],
  'barat': [
    'Puskesmas Asemrowo',
    'Puskesmas Balongsari',
    'Puskesmas Bangkingan',
    'Puskesmas Benowo',
    'Puskesmas Jeruk',
    'Puskesmas Lidah Kulon',
    'Puskesmas Lontar',
    'Puskesmas Made',
    'Puskesmas Manukan Kulon',
    'Puskesmas Sememi',
    'Puskesmas Simomulyo',
    'Puskesmas Tanjungsari'
  ]
  // Add other regions as needed
}

interface PuskesmasCardProps {
  name: string
  onClick: () => void
}

function PuskesmasCard({ name, onClick }: PuskesmasCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4">
          <svg viewBox="0 0 24 24" fill="#ff4791" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    </div>
  )
}

export default function PuskesmasRegionPage({ params }: { params: { region: string } }) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const regionTitle = {
    'pusat': 'Wilayah PUSAT',
    'barat': 'Wilayah BARAT',
    'timur': 'Wilayah TIMUR',
    'utara': 'Wilayah UTARA',
    'selatan': 'Wilayah SELATAN'
  }[params.region] || ''

  const puskesmasList = puskesmasData[params.region as keyof typeof puskesmasData] || []
  const filteredPuskesmas = puskesmasList.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => router.push('/puskesmas')}
              className="bg-[#ff4791] text-white hover:bg-[#d10065]"
            >
              Kembali
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-[#d10065]">Puskesmas {regionTitle}</h1>
        </div>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Cari Puskesmas"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPuskesmas.map((name, index) => (
            <PuskesmasCard
              key={index}
              name={name}
              onClick={() => router.push(`/puskesmas/${params.region}/${encodeURIComponent(name)}`)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

