import { PaperEmbeddedWalletSdk } from '@paperxyz/embedded-wallet-service-sdk'

const clientId = '7998e90e-62f7-4d9a-a303-6330e559b7d6'
const chain = 'Mumbai'

export const paperSdk =
  typeof window !== 'undefined'
    ? new PaperEmbeddedWalletSdk({
        clientId: clientId as string,
        chain,

        styles: {
          colorPrimary: '#D0FF0D',
          colorBackground: '#0F0F0F',
          borderRadius: '24px',
          colorText: '#D0FF0D',
        },
      })
    : null
