interface NotFoundOverlayProps {
  onClose: () => void;
}

export default function NotFoundOverlay({ onClose }: NotFoundOverlayProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <div className="h-16 w-16 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-gray-700 text-xl">Data tidak ditemukan</p>
      </div>
    </div>
  )
}

