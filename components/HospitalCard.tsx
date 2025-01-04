import Image from 'next/image'

interface Hospital {
  id: number
  name: string
  image: string
}

interface HospitalCardProps {
  hospital: Hospital
  isSelected: boolean
  onSelect: () => void
}

export default function HospitalCard({ hospital, isSelected, onSelect }: HospitalCardProps) {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-4 ring-[#ff4141] transform scale-105' : 'hover:shadow-lg'
      }`}
      onClick={onSelect}
    >
      <div className="relative h-48">
        <Image
          src={hospital.image}
          alt={hospital.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{hospital.name}</h3>
      </div>
    </div>
  )
}

