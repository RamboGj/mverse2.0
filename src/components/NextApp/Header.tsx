'use client'

import Image from 'next/image'
import { List } from 'phosphor-react'
import logo from '@/assets/logo.png'
import { useContext } from 'react'
import { AnimationsContext } from '@/contexts/AnimationsContext'

export function Header() {
  const { setSceneToMove } = useContext(AnimationsContext)

  return (
    <header className="max-w-[1280px] w-full mx-auto flex justify-between items-center text-white py-10 z-40">
      <Image onClick={() => setSceneToMove('')} src={logo} alt="Logo" />
      <div className="flex gap-12 items-center">
        <button className="text-[#D0FF0D] border border-[#D0FF0D] rounded-[40px] bg-[#0F0F0F] h-[50px] flex items-center justify-center px-12 hover:shadow-[0_0_15px_rgba(208,255,13,0.4)] transition duration-300">
          <span className="mt-1 leading-none">JOIN DISCORD</span>
        </button>
        <div className="bg-[#0F0F0F] p-3 rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(208,255,13,0.4)] transition duration-300 cursor-pointer">
          <List size={24} className="text-[#D0FF0D]" />
        </div>
      </div>
    </header>
  )
}
