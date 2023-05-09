import { modalAnimations } from '@/utils/constants'
import * as Dialog from '@radix-ui/react-dialog'

import { motion } from 'framer-motion'

export function ConnectWallet({ action }: { action: () => void }) {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      variants={modalAnimations}
      initial="hidden"
      whileInView="visible"
      exit="exit"
    >
      <Dialog.Content className="p-[122px] w-[530px] rounded-[40px] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F]/95 shadow-lg">
        <div className="flex flex-col gap-7 items-center">
          <button className="w-[240px] h-[50px] flex justify-center items-center leading-none text-black px-12 bg-[#D0FF0D] border border-[#B3BF80] rounded-[40px] shadow-[0_0_15px_rgba(208,255,13,0.4)] hover:shadow-[0_0_25px_rgba(208,255,13,0.4)] transition duration-300">
            <span className="mt-1">Connect wallet</span>
          </button>
          <button
            onClick={action}
            className="w-[290px] text-white border border-[#D0FF0D] rounded-[40px] bg-[#0F0F0F] h-[50px] flex items-center justify-center px-12 hover:shadow-[0_0_15px_rgba(208,255,13,0.4)] transition duration-300"
          >
            <span className="mt-1 leading-none">{"Don't "} have a wallet?</span>
          </button>
        </div>
      </Dialog.Content>
    </motion.div>
  )
}
