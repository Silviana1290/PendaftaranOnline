'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NotFoundOverlay from '@/components/NotFoundOverlay'

// Mock data for dropdowns
const puskesmasList = [
  'Puskesmas Peneleh',
  'Puskesmas Ketabang',
  'Puskesmas Gundih',
  'Puskesmas Tambakrejo',
]

const specialistList = [
  'Penyakit Dalam',
  'Bedah',
  'Anak',
  'Kandungan',
]

const subSpecialistList = [
  'Gastroenterologi',
  'Kardiologi',
  'Pulmonologi',
  'Reumatologi',
]

export default function RujukanPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [searchTerm, setSearchTerm] = useState('')
  const [showNotFound, setShowNotFound] = useState(false)
  const [formData, setFormData] = useState({
    puskesmas: '',
    specialist: '',
    subSpecialist: '',
  })

  const handleSearch = () => {
    setShowNotFound(true)
    console.log('Searching with:', { ...formData, date, searchTerm })
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => router.push('/')}
              className="bg-[#ff4141] text-white hover:bg-[#ff6b6b]"
            >
              Kembali
            </Button>
            <h1 className="text-2xl font-bold">Rumah Sakit Rujukan</h1>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Puskesmas</label>
              <Select
                value={formData.puskesmas}
                onValueChange={(value) => setFormData({ ...formData, puskesmas: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Puskesmas" />
                </SelectTrigger>
                <SelectContent>
                  {puskesmasList.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Spesialis</label>
              <Select
                value={formData.specialist}
                onValueChange={(value) => setFormData({ ...formData, specialist: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Spesialis" />
                </SelectTrigger>
                <SelectContent>
                  {specialistList.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Sub Spesialis</label>
              <Select
                value={formData.subSpecialist}
                onValueChange={(value) => setFormData({ ...formData, subSpecialist: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Sub Spesialis" />
                </SelectTrigger>
                <SelectContent>
                  {subSpecialistList.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tanggal</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'dd/MM/yyyy') : 'DD/MM/YYYY'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleSearch}
              className="bg-[#3b82f6] text-white hover:bg-blue-600"
            >
              Cari
            </Button>
            <Button
              onClick={() => router.push('/')}
              variant="destructive"
            >
              Kembali
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-end mb-4">
              <Input
                placeholder="Pencarian..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">No</TableHead>
                    <TableHead>Kode</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>Alamat</TableHead>
                    <TableHead>Telp</TableHead>
                    <TableHead>Kelas</TableHead>
                    <TableHead>Jarak</TableHead>
                    <TableHead>Jadwal</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Kapasitas</TableHead>
                    <TableHead>Persentase</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={11} className="text-center py-4 text-muted-foreground">
                      Data Kosong
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="text-sm text-muted-foreground mt-4">
              Menampilkan 0 s/d 0 dari 0 data
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {showNotFound && (
        <NotFoundOverlay onClose={() => setShowNotFound(false)} />
      )}
    </div>
  )
}

