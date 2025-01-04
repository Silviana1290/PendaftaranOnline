"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-red-500 text-white">
      <div className="container flex h-16 items-center px-4">
        <Image 
          src="/surabaya-logo.png" 
          alt="Logo Surabaya" 
          width={40} 
          height={40}
          className="mr-4"
        />
        <h1 className="text-xl font-bold hidden md:block">
          PENDAFTARAN PASIEN ONLINE PEMERINTAH KOTA SURABAYA
        </h1>
        <h1 className="text-xl font-bold md:hidden">
          E-HEALTH SURABAYA
        </h1>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-200">
            <Home className="h-5 w-5" />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/help">Bantuan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/feedback">Feedback</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

