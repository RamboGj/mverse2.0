/* eslint-disable no-useless-computed-key */
export const SCENES = {
  ['default']: '',
  ['root']: 'root',
  ['second']: 'second',
  ['last']: 'last',
}

export const modalAnimations = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 2,
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    scale: 0,
  },
}

export const modalAnimationsWithoutDelay = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    scale: 0,
  },
}

export const mintSteps = {
  ConnectWallet: 0,
  CreateWalletWithEmailAndMint: 1,
  MintWithWalletConnect: 2,
  Review: 2,
}
