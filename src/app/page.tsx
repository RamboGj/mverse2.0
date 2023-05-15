'use client'

import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import { Scene } from '@/components/R3F/Scene'
import { Steps } from '@/components/NextApp/Steps'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Leva />
      <Canvas
        flat
        camera={{
          fov: 75,
          near: 0.25,
          far: 1500,
          position: [0, 1, 24],
          rotation: [0, 5, 0],
          zoom: 1.5,
        }}
        className="min-h-screen w-full z-0 backdrop-blur-lg"
      >
        <Scene />
      </Canvas>
      <Steps />
    </div>
  )
}
