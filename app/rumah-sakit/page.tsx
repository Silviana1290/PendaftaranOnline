'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const hospitals = [
  {
    id: 'soewandhie',
    name: 'RSUD dr. M. SOEWANDHIE',
    image: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayosurabaya/images/post/articles/2020/08/08/2581/images_(1).jpeg'
  },
  {
    id: 'bhakti-dharma',
    name: 'RSUD Bhakti Dharma Husada',
    image: 'https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/rsud-bhakti-dharma-husada-surabaya1.jpg'
  },
  {
    id: 'eka-candrarini',
    name: 'RSUD Eka Candrarini',
    image: 'https://asset-2.tstatic.net/mataraman/foto/bank/images/RSUD-Eka-Candrarini-Surabaya.jpg'
  },
  {
    id: 'soetomo',
    name: 'RSUD dr. Soetomo',
    image: 'https://upload.wikimedia.org/wikipedia/id/a/a9/Rsudrsoetomo1.jpg'
  }
]

export default function HospitalPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="outline" className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]">
              Kembali
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Pilih Rumah Sakit</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              onClick={() => router.push(`/rumah-sakit/${hospital.id}/poli`)}
              className="bg-white rounded-lg shadow transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
            >
              <Image
                src={hospital.image}
                alt={hospital.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center">{hospital.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

