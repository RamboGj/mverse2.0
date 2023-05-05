'use client'

import { Header } from '../Header'
import { motion } from 'framer-motion'

interface RootUIProps {
  changeScene: () => void
}

export function RootUI({ changeScene }: RootUIProps) {
  return (
    <>
      <div
        className={`max-w-screen h-screen w-full absolute z-20 top-0 left-0 text-white mx-auto`}
      >
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-screen z-20">
          <Header />
          <main className="w-full mb-[220px] flex justify-end z-40">
            <div className="max-w-[860px] w-full flex flex-col justify-end">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl uppercase font-semibold"
              >
                TYPE IN A TOPIC TO GENERATE A RAP
              </motion.h1>
              <input
                placeholder="EDGY LYRICS ABOUT DISLIKING PUMP AND DUMPS"
                type="text"
                className="mt-4 rounded-[40px] border border-transparent bg-[#292929] placeholder:text-sm placeholder:text-[#ADADAD] px-12 py-3  focus:outline-none focus:border-[#D0FF0D] transition duration-300"
              />
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full flex justify-end"
              >
                <button
                  onClick={changeScene}
                  className="w-[240px] h-[50px] flex items-center leading-none mt-8 text-black px-12 bg-[#D0FF0D] border border-[#B3BF80] rounded-[40px] shadow-[0_0_15px_rgba(208,255,13,0.4)] hover:shadow-[0_0_25px_rgba(208,255,13,0.4)] transition duration-300"
                >
                  <span className="mt-1">Generate Song</span>
                </button>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-gradient-to-br from-transparent via-transparent to-black h-screen w-full z-10 absolute top-0 left-0 pointer-events-none select-none"></div>
    </>
  )
}
