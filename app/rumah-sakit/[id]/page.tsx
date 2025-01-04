'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SpecialtySelector from '@/components/SpecialtySelector'
import DateSelector from '@/components/DateSelector'
import PatientForm from '@/components/PatientForm'
import { Button } from '@/components/ui/button'

type Step = 'specialty' | 'date' | 'details'

export default function HospitalRegistrationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>('specialty')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleNext = () => {
    if (currentStep === 'specialty') setCurrentStep('date')
    else if (currentStep === 'date') setCurrentStep('details')
  }

  const handleBack = () => {
    if (currentStep === 'date') setCurrentStep('specialty')
    else if (currentStep === 'details') setCurrentStep('date')
    else router.push('/rumah-sakit')
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button 
            onClick={handleBack}
            className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
          >
            Kembali
          </Button>
          <h1 className="text-2xl font-bold">
            {currentStep === 'specialty' && 'Pilih Poli/Klinik'}
            {currentStep === 'date' && 'Pilih Jadwal Kunjungan'}
            {currentStep === 'details' && 'Isi Data Pasien'}
          </h1>
        </div>

        {currentStep === 'specialty' && (
          <SpecialtySelector 
            onSelect={setSelectedSpecialty} 
            selected={selectedSpecialty}
          />
        )}

        {currentStep === 'date' && (
          <DateSelector
            onSelect={setSelectedDate}
            selected={selectedDate}
          />
        )}

        {currentStep === 'details' && (
          <PatientForm 
            specialty={selectedSpecialty}
            appointmentDate={selectedDate}
          />
        )}

        {(currentStep === 'specialty' || currentStep === 'date') && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNext}
              className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
              disabled={
                (currentStep === 'specialty' && !selectedSpecialty) ||
                (currentStep === 'date' && !selectedDate)
              }
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

