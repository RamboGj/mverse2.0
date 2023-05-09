'use client'

import { Header } from '../Header'

import * as Dialog from '@radix-ui/react-dialog'
import { mintSteps } from '@/utils/constants'
import { useState } from 'react'
import { ConnectWallet } from '../Modals/ConnetWallet'
import { CreateWalletWithEmailAndMint } from '../Modals/CreateWalletWithEmailAndMint'
import { NFTReview } from '../Modals/NFTReview'

export function LastUI() {
  const [currentStep, setCurrentStep] = useState<number>(
    mintSteps.ConnectWallet,
  )

  function handleChangeStep(step: number) {
    setCurrentStep(step)
  }

  return (
    <>
      <div
        className={`max-w-screen h-screen w-full absolute top-0 left-0 text-white mx-auto`}
      >
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-screen z-40">
          <Dialog.Root open>
            <Dialog.Overlay className="bg-[#0F0F0F]/80 inset-0 fixed z-20 backdrop-blur">
              <Header />
              {currentStep === mintSteps.ConnectWallet ? (
                <ConnectWallet
                  action={() =>
                    handleChangeStep(mintSteps.CreateWalletWithEmailAndMint)
                  }
                />
              ) : currentStep === mintSteps.CreateWalletWithEmailAndMint ? (
                <CreateWalletWithEmailAndMint
                  action={() => handleChangeStep(mintSteps.Review)}
                />
              ) : (
                <NFTReview />
              )}
              {currentStep === mintSteps.Review ? (
                <footer className="max-w-[1280px] w-full text-white z-40 absolute bottom-12 left-0">
                  <div className="flex flex-col items-center gap-4">
                    <button className="w-[248px] text-white border border-greenyellow rounded-[40px] bg-[#0F0F0F] h-[50px] flex items-center justify-center hover:shadow-[0_0_15px_rgba(208,255,13,0.4)] transition duration-300">
                      <span className="mt-1 leading-none">GO TO PROFILE</span>
                    </button>
                    <button className="w-[215px] text-white border border-greenyellow rounded-[40px] bg-[#0F0F0F] h-[50px] flex items-center justify-center hover:shadow-[0_0_15px_rgba(208,255,13,0.4)] transition duration-300">
                      <span className="mt-1 leading-none">PLAY AGAIN</span>
                    </button>
                  </div>
                </footer>
              ) : null}
            </Dialog.Overlay>
          </Dialog.Root>
        </div>
      </div>
    </>
  )
}
