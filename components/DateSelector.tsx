'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { Calendar } from '@/components/ui/calendar'

interface DateSelectorProps {
  onSelect: (date: Date | null) => void
  selected: Date | null
}

export default function DateSelector({ onSelect, selected }: DateSelectorProps) {
  const [selectedTime, setSelectedTime] = useState<string>('')
  const availableSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (selected) {
      const newDate = new Date(selected)
      const [hours, minutes] = time.split(':')
      newDate.setHours(parseInt(hours), parseInt(minutes))
      onSelect(newDate)
    }
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Pilih Tanggal</h2>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect}
          locale={id}
          className="rounded-md border"
          disabled={(date) => {
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const day = date.getDay()
            return date < today || day === 0 || day === 6
          }}
        />
      </div>

      {selected && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            Jadwal Tersedia - {format(selected, 'EEEE, d MMMM yyyy', { locale: id })}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleTimeSelect(slot)}
                className={`
                  p-2 rounded-md text-center transition-colors
                  ${selectedTime === slot
                    ? 'bg-[#ff4141] text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

