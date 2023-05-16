import { useTexture } from '@react-three/drei'
import { useEffect } from 'react'
import { AnimationAction } from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

/* eslint-disable react/no-unknown-property */
interface ModelProps {
  postion: number[]
  rotation: number
  model: GLTF['scene']
  scale: number
  animation: AnimationAction | null
}

export function LilMverseModel(props: ModelProps) {
  const lilMverseBakedTexture = useTexture('./LilMverse/lilBakedTexture.png')

  useEffect(() => {
    props.animation?.play()
  }, [props.animation])

  return (
    <primitive
      rotation-y={props.rotation}
      position={props.postion}
      object={props.model}
      scale={props.scale}
      material={lilMverseBakedTexture}
    />
  )
}
