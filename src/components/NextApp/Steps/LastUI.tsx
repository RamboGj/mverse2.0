'use client'

import { Header } from '../Header'

import * as Dialog from '@radix-ui/react-dialog'
import { mintSteps } from '@/utils/constants'
import { useState } from 'react'
import { ConnectWallet } from '../Modals/ConnetWallet'
import { CreateWalletWithEmailAndMint } from '../Modals/CreateWalletWithEmailAndMint'
import { NFTReview } from '../Modals/NFTReview'

export function LastUI() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const [currentStep, setCurrentStep] = useState<number>(
    mintSteps.ConnectWallet,
  )

  function handleChangeStep(step: number) {
    setCurrentStep(step)
  }

  function onCloseModal() {
    setIsOpen(false)
  }

  function onOpenModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className={`max-w-screen h-screen w-full absolute top-0 left-0 text-white mx-auto`}
      >
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-screen z-40">
          <Dialog.Root open={isOpen}>
            <Dialog.Overlay className="bg-[#0F0F0F]/80 inset-0 fixed z-20 backdrop-blur">
              <Header />
              {currentStep === mintSteps.ConnectWallet ? (
                <ConnectWallet
                  onClose={onCloseModal}
                  onOpen={onOpenModal}
                  action={() => {
                    handleChangeStep(mintSteps.CreateWalletWithEmailAndMint)
                    onOpenModal()
                  }}
                />
              ) : currentStep === mintSteps.CreateWalletWithEmailAndMint ? (
                <CreateWalletWithEmailAndMint
                  onClose={onCloseModal}
                  onOpen={onOpenModal}
                  action={() => {
                    handleChangeStep(mintSteps.Review)
                    onOpenModal()
                  }}
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
