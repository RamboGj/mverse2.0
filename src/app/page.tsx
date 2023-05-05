'use client'

import { Canvas } from '@react-three/fiber'

import { AnimationsContext } from '@/contexts/AnimationsContext'
import { useContext } from 'react'
import { Leva } from 'leva'
import { Scene } from '@/components/R3F/Scene'
import { Steps } from '@/components/NextApp/Steps'

export default function Home() {
  const { sceneToMove } = useContext(AnimationsContext)

  return (
    <div className="w-full h-full">
      <Leva />
      <Canvas
        flat
        camera={{
          fov: 75,
          near: 0.25,
          far: 1500,
          position: [4, 3.5, 18],
          rotation: [0, 5, 0],
          zoom: 1.5,
        }}
        className="min-h-screen w-full z-0"
      >
        <Scene />
      </Canvas>
      <Steps step={sceneToMove} />
    </div>
  )
}
