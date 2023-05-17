/* eslint-disable react/no-unknown-property */
import { AnimationsContext } from '@/contexts/AnimationsContext'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useContext } from 'react'
import { LilMverseModel } from './LilMverseModel'

export function LilMverse() {
  const { sceneToMove } = useContext(AnimationsContext)

  const lilTypingModel = useGLTF('./LilMverse/typing.glb')
  const lilRappingModel = useGLTF('./LilMverse/rapping.glb')
  const lilRobotModel = useGLTF('./LilMverse/robotHipHopDance.glb')

  const lilTypingModelAnimations = useAnimations(
    lilTypingModel.animations,
    lilTypingModel.scene,
  )

  const lilRappingModelAnimations = useAnimations(
    lilRappingModel.animations,
    lilRappingModel.scene,
  )

  const lilRobotModelAnimations = useAnimations(
    lilRobotModel.animations,
    lilRobotModel.scene,
  )

  const lilMverseVariants = {
    root: {
      postion: [-12.5, -8.5, -24],
      rotation: Math.PI * 1,
      model: lilTypingModel.scene,
      scale: 0.01,
      animation: lilTypingModelAnimations.actions.animation_0,
    },
    second: {
      postion: [18, -9, -12],
      rotation: Math.PI * 1,
      model: lilRappingModel.scene,
      scale: 0.0135,
      animation: lilRappingModelAnimations.actions.animation_0,
    },
    last: {
      postion: [-15, -7.85, -10],
      rotation: -Math.PI * 0.45,
      model: lilRobotModel.scene,
      scale: 0.011,
      animation: lilRobotModelAnimations.actions.animation_0,
    },
  }

  switch (sceneToMove) {
    case '':
      return <LilMverseModel {...lilMverseVariants.root} />

    case 'second':
      return <LilMverseModel {...lilMverseVariants.second} />

    case 'last':
      return <LilMverseModel {...lilMverseVariants.last} />
    default:
      return null
  }
}

useGLTF.preload([
  './Stage/MVERSE.gltf',
  './LilMverse/typing.glb',
  './LilMverse/rapping.glb',
  './LilMverse/robotHipHopDance.glb',
])
