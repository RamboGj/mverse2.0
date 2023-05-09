import { modalAnimationsWithoutDelay } from '@/utils/constants'
import * as Dialog from '@radix-ui/react-dialog'

import { motion } from 'framer-motion'
import Image from 'next/image'

import placeholder from '@/assets/placeholder.png'
import Link from 'next/link'

export function NFTReview() {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      variants={modalAnimationsWithoutDelay}
      initial="hidden"
      whileInView="visible"
      exit="exit"
    >
      <Dialog.Content className="px-10 py-8 w-[530px] rounded-[40px] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F]/95 shadow-lg">
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={placeholder}
            alt="NFT"
            width={453}
            height={268}
            className="rounded-[20px] overflow-hidden h-[268px] w-full"
          />
          <p className="font-semibold text-center">
            Help us spread the word of improving the music ecosystem for
            artists.
          </p>
          <Link className="text-[#D0FF0D] underline" href="">
            link to minted NFT
          </Link>

          <button className="mt-8 w-full h-[50px] flex justify-center items-center leading-none text-black px-12 bg-[#D0FF0D] border border-[#B3BF80] rounded-[40px] shadow-[0_0_15px_rgba(208,255,13,0.4)] hover:shadow-[0_0_25px_rgba(208,255,13,0.4)] transition duration-300">
            <span className="mt-1">SHARE ON TWITTER</span>
          </button>
        </div>
      </Dialog.Content>
    </motion.div>
  )
}
