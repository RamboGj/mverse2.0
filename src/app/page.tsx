'use client'

import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import { Scene } from '@/components/R3F/Scene'
import { Steps } from '@/components/NextApp/Steps'
import { Suspense, useState } from 'react'
import { LoadingScreen } from '@/components/NextApp/LoadingScreen'

export default function Home() {
  const [start, setStart] = useState<boolean>(false)

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
        <Suspense fallback={null}>{start ? <Scene /> : null}</Suspense>
      </Canvas>

      <LoadingScreen visible={!start} onStart={() => setStart(true)} />

      {start ? <Steps /> : null}
    </div>
  )
}
