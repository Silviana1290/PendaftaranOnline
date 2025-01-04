'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#ff4141] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://i.pinimg.com/736x/91/46/f8/9146f8e390b9732368aa2f63a061f44c.jpg"
            alt="Logo Puskesmas"
            width={60}
            height={60}
            className="mr-4"
          />
          <span className="text-2xl font-bold">Pendaftaran Online</span>
        </div>
        <nav className="relative">
          <div className="flex items-center">
            <Link href="/" className="mr-6 text-lg font-semibold">
              Home
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8"
            >
              <span className="w-6 h-0.5 bg-white mb-1"></span>
              <span className="w-6 h-0.5 bg-white mb-1"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <li>
                <Link href="/help" className="block px-4 py-2 text-gray-800 hover:bg-[#ff796f] hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="block px-4 py-2 text-gray-800 hover:bg-[#ff796f] hover:text-white">
                  Feedback
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

