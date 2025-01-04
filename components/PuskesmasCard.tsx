import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

interface PuskesmasRegion {
  id: string
  name: string
  icon: string
  puskesmas: string
}

interface PuskesmasCardProps {
  region: PuskesmasRegion
  isSelected: boolean
  onSelect: () => void
}

const iconMap = {
  'fa-circle': faCircle,
  'fa-arrow-circle-left': faArrowCircleLeft,
  'fa-arrow-circle-right': faArrowCircleRight,
  'fa-arrow-circle-up': faArrowCircleUp,
  'fa-arrow-circle-down': faArrowCircleDown,
}

export default function PuskesmasCard({ region, isSelected, onSelect }: PuskesmasCardProps) {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-4 ring-[#ff4141] transform scale-105' : 'hover:shadow-lg'
      }`}
      onClick={onSelect}
    >
      <div className="p-6">
        <div className="text-4xl text-[#f44336] mb-4">
          <FontAwesomeIcon icon={iconMap[region.icon as keyof typeof iconMap]} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{region.name}</h3>
        <p className="text-sm text-gray-600">{region.puskesmas}</p>
      </div>
    </div>
  )
}

