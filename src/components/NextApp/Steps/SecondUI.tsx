/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Header } from '../Header'
import placeholderCover from '@/assets/placeholder.png'

import { motion } from 'framer-motion'

interface RootUIProps {
  changeScene: () => void
}

export function SecondUI({ changeScene }: RootUIProps) {
  return (
    <>
      <div
        className={`max-w-screen h-screen w-full absolute z-20 top-0 left-0 text-white mx-auto`}
      >
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-screen z-20 px-4">
          <Header />
          <motion.main
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.7 }}
            className="w-full mb-24 flex justify-end z-40"
          >
            <div className="max-w-[585px] w-full flex flex-col justify-end rounded-[40px] bg-[#0F0F0F] px-12 py-7">
              <div className="flex items-center gap-5">
                <Image
                  className="rounded-[20px] overflow-hidden w-[112px] h-[112px]"
                  src={placeholderCover}
                  alt="NFT Song Cover Image"
                />
                <div className="flex flex-col gap-3 font-semibold text-[1.25rem]">
                  <span>Now playing</span>
                  <span>[song name generate by promp]</span>
                </div>
              </div>
              <p className="w-[513p] leading-loose text-base mt-10">
                I'm getting sick of these crypto scams, Pump and dump schemes,
                they're all just shams, Making false promises to prey on the
                naive, Taking their hard-earned cash, it's hard to believe.
              </p>
              <div className="w-full flex justify-end">
                <button
                  onClick={changeScene}
                  className="w-[202px] h-[50px] flex items-center leading-none mt-10  text-black px-12 bg-[#D0FF0D] border border-[#B3BF80] rounded-[40px] shadow-[0_0_15px_rgba(208,255,13,0.4)] hover:shadow-[0_0_25px_rgba(208,255,13,0.4)] transition duration-300"
                >
                  <span className="mt-1">FREE MINT</span>
                </button>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-transparent to-black h-screen w-full z-10 absolute top-0 left-0 pointer-events-none select-none"></div>
    </>
  )
}
