'use client'

import { SCENES } from '@/utils/constants'
import { useContext } from 'react'
import { AnimationsContext } from '@/contexts/AnimationsContext'
import { RootUI } from './RootUI'
import { SecondUI } from './SecondUI'
import { LastUI } from './LastUI'

export function Steps() {
  const { setSceneToMove, sceneToMove } = useContext(AnimationsContext)

  function handleChangeScene(scene: string) {
    setSceneToMove(scene)
  }

  switch (sceneToMove) {
    case SCENES.default:
      return <RootUI changeScene={() => handleChangeScene('second')} />
    case SCENES.second:
      return <SecondUI changeScene={() => handleChangeScene('last')} />
    case SCENES.last:
      return <LastUI />
    default:
      return null
  }
}
