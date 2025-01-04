import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Feedback</h2>
        
        <Card className="max-w-2xl mx-auto p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nama">Nama</Label>
              <Input id="nama" placeholder="Masukkan nama Anda" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Masukkan email Anda" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="kategori">Kategori</Label>
              <select 
                id="kategori" 
                className="w-full p-2 border rounded-md"
              >
                <option value="">Pilih Kategori</option>
                <option value="saran">Saran</option>
                <option value="keluhan">Keluhan</option>
                <option value="pertanyaan">Pertanyaan</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pesan">Pesan</Label>
              <Textarea 
                id="pesan" 
                placeholder="Tulis pesan Anda di sini"
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Kirim Feedback
            </Button>
          </form>
        </Card>
      </main>
    </div>
  )
}

