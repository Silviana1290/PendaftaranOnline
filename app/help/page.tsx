'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "Bagaimana cara mendaftar online?",
    answer: `1. Pilih jenis layanan kesehatan (Rumah Sakit/Puskesmas)
2. Pilih rumah sakit/puskesmas yang dituju
3. Pilih poli/klinik yang diinginkan
4. Pilih tanggal kunjungan yang tersedia
5. Isi form pendaftaran dengan data yang valid
6. Simpan nomor pendaftaran yang diberikan`
  },
  {
    question: "Apa saja dokumen yang perlu disiapkan?",
    answer: `1. Kartu Identitas (KTP)
2. Kartu BPJS (jika menggunakan BPJS)
3. Surat rujukan (jika diperlukan)
4. Nomor rekam medis (untuk pasien lama)`
  },
  {
    question: "Bagaimana cara membatalkan pendaftaran?",
    answer: `1. Pilih menu "Batal atau Reprint"
2. Masukkan NIK atau nomor pendaftaran
3. Pilih pendaftaran yang ingin dibatalkan
4. Klik tombol "Batal"
5. Konfirmasi pembatalan`
  },
  {
    question: "Apa yang harus dilakukan jika lupa nomor antrian?",
    answer: `1. Pilih menu "Batal atau Reprint"
2. Masukkan NIK
3. Pilih pendaftaran yang dimaksud
4. Klik tombol "Reprint" untuk mencetak ulang nomor antrian`
  },
  {
    question: "Berapa lama sebelumnya saya harus mendaftar?",
    answer: "Pendaftaran online dapat dilakukan 1-7 hari sebelum tanggal kunjungan yang diinginkan. Pastikan mendaftar lebih awal untuk mendapatkan slot yang diinginkan."
  }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Pusat Bantuan</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-[#ff4141]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

