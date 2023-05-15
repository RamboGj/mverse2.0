/* eslint-disable no-useless-computed-key */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'

export function LilMverse({ scene }: { scene: string }) {
  const lilMverseBakedTexture = useTexture('./LilMverse/lilBakedTexture.png')
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

  useEffect(() => {
    switch (scene) {
      case '' || 'root':
        lilTypingModelAnimations.actions.animation_0?.play()
        break
      case 'second':
        lilRappingModelAnimations.actions.animation_0?.play()
        break
      case 'last':
        lilRobotModelAnimations.actions.animation_0?.play()
        break
    }
  }, [scene])

  const modelPositions = {
    ['root']: [-5, -7.5, 11],
    ['second']: [18, -9, -12],
    ['last']: [-15, -7.85, -10],
  }

  switch (scene) {
    case '':
      return (
        <primitive
          rotation-y={Math.PI * 0.3}
          position={modelPositions.root}
          object={lilTypingModel.scene}
          scale={0.01}
          material={lilMverseBakedTexture}
        />
      )

    case 'second':
      return (
        <primitive
          position={modelPositions.second}
          rotation-y={Math.PI * 1}
          object={lilRappingModel.scene}
          scale={0.0135}
          material={lilMverseBakedTexture}
        />
      )

    case 'last':
      return (
        <primitive
          position={modelPositions.last}
          rotation-y={-Math.PI * 0.45}
          object={lilRobotModel.scene}
          scale={0.011}
          material={lilRobotModelAnimations}
        />
      )
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
