'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReprintModal from './ReprintModal'

interface MenuOptionProps {
  href?: string
  imgSrc: string
  title: string
  description: string
  isReprintOption?: boolean
}

export default function MenuOption({
  href,
  imgSrc,
  title,
  description,
  isReprintOption
}: MenuOptionProps) {
  const [showReprintModal, setShowReprintModal] = useState(false)

  const content = (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
      <div className="flex flex-col items-center text-center">
        <Image 
          src={imgSrc} 
          alt={title}
          width={180}
          height={160}
          className="mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )

  if (isReprintOption) {
    return (
      <>
        <div onClick={() => setShowReprintModal(true)} className="cursor-pointer">
          {content}
        </div>
        {showReprintModal && <ReprintModal onClose={() => setShowReprintModal(false)} />}
      </>
    )
  }

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return <div>{content}</div>
}

