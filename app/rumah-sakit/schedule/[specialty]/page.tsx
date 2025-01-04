'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { format, addDays, isSameDay } from 'date-fns'
import { id } from 'date-fns/locale'

interface DateSlot {
  date: Date
  available: boolean
  slots: number
}

export default function SchedulePage() {
  const router = useRouter()
  const [dates, setDates] = useState<DateSlot[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  useEffect(() => {
    // Generate next 33 days
    const generateDates = () => {
      const today = new Date()
      const slots: DateSlot[] = []
      
      for (let i = 0; i < 33; i++) {
        const date = addDays(today, i)
        const dayOfWeek = date.getDay()
        
        // Skip Sundays (0) and Saturdays (6)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          // Simulate some dates being unavailable
          const isAvailable = Math.random() > 0.3
          slots.push({
            date,
            available: isAvailable,
            slots: isAvailable ? Math.floor(Math.random() * 5) + 1 : 0 // 1-5 slots if available
          })
        }
      }
      
      setDates(slots)
    }

    generateDates()
  }, [])

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const getButtonColor = (slot: DateSlot) => {
    if (!slot.available) return 'bg-[#ff4141] opacity-50 cursor-not-allowed' // Red for unavailable
    if (selectedDate && isSameDay(selectedDate, slot.date)) return 'bg-yellow-400' // Yellow for selected
    return 'bg-blue-400 hover:bg-blue-500' // Blue for available
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
          <h1 className="text-2xl font-bold">Pilih Tanggal Layanan</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {dates.map((slot, index) => (
            <button
              key={index}
              onClick={() => slot.available && handleDateSelect(slot.date)}
              disabled={!slot.available}
              className={`
                p-4 rounded-lg text-center transition-all duration-300
                ${getButtonColor(slot)}
                ${selectedDate && isSameDay(selectedDate, slot.date) ? 'ring-4 ring-black' : ''}
              `}
            >
              <div className="text-white">
                <div className="text-sm font-medium">
                  {format(slot.date, 'EEEE', { locale: id })}
                </div>
                <div className="text-2xl font-bold">
                  {format(slot.date, 'dd')}
                </div>
                <div className="text-sm">
                  {format(slot.date, 'MMMM yyyy', { locale: id })}
                </div>
                <div className="mt-2 text-lg font-bold">
                  {slot.slots}
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => router.push('/registration-form')}
              className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
            >
              Lanjut
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

