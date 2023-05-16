import { modalAnimationsWithoutDelay } from '@/utils/constants'
import * as Dialog from '@radix-ui/react-dialog'

import { motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { paperSdk } from '@/services/paper'
import { ModalProps } from '@/utils/types'

const schema = zod.object({
  email: zod.string().email('Invalid e-mail'),
})

type Schema = zod.infer<typeof schema>

export function CreateWalletWithEmailAndMint({
  action,
  onClose,
  onOpen,
}: ModalProps) {
  const ConnectForm = useForm<Schema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

  const { register, handleSubmit } = ConnectForm

  async function connectWithEmail(data: Schema) {
    try {
      onClose()
      await paperSdk?.auth.loginWithPaperEmailOtp({
        email: data.email,
      })
      action()
    } catch (err) {
      console.log('err', err)
      onOpen()
    }
  }

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      variants={modalAnimationsWithoutDelay}
      initial="hidden"
      whileInView="visible"
      exit="exit"
    >
      <Dialog.Content className="p-12 w-[530px] rounded-[40px] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F]/95 shadow-lg">
        <form
          onSubmit={handleSubmit(connectWithEmail)}
          className="flex flex-col gap-5 items-center"
        >
          <h1 className="font-bold text-[1.25rem]">Create wallet with Email</h1>
          <p className="font-regular text-sm">
            Claim instructions will be sent to your inbox.
          </p>
          <input
            {...register('email')}
            placeholder="Email Address"
            type="text"
            className="w-full mt-1 rounded-[40px] border border-transparent bg-[#292929] placeholder:text-sm placeholder:text-[#ADADAD] px-12 py-3  focus:outline-none focus:border-[#D0FF0D] transition duration-300"
          />
          <button
            type="submit"
            className="mt-20 w-[240px] h-[50px] flex justify-center items-center leading-none text-black px-12 bg-[#D0FF0D] border border-[#B3BF80] rounded-[40px] shadow-[0_0_15px_rgba(208,255,13,0.4)] hover:shadow-[0_0_25px_rgba(208,255,13,0.4)] transition duration-300"
          >
            <span className="mt-1">FREE MINT</span>
          </button>
        </form>
      </Dialog.Content>
    </motion.div>
  )
}
