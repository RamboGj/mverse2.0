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
            </Dialog.Overlay>
          </Dialog.Root>
        </div>
      </div>
    </>
  )
}
