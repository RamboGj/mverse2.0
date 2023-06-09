/* eslint-disable react/no-unknown-property */
'use client'

import { AnimationsContext } from '@/contexts/AnimationsContext'
import {
  Cloud,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from '@react-three/drei'
import { RootState, useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

import { Suspense, useContext } from 'react'
import { LilMverse } from './LilMverse'

interface PositionProps {
  x: number
  y: number
  z: number
}

export function Scene() {
  const { sceneToMove } = useContext(AnimationsContext)

  function gsapCameraMove(state: RootState, endPosition: PositionProps) {
    gsap.to(state.camera.position, {
      x: endPosition.x,
      y: endPosition.y,
      z: endPosition.z,
      duration: 3,
    })
  }

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime

    switch (sceneToMove) {
      case 'second':
        gsapCameraMove(state, {
          x: 36,
          y: 6,
          z: -32,
        })
        break
      case 'last':
        gsapCameraMove(state, { x: -44, y: 5, z: -22 })

        break
      case 'root':
        gsapCameraMove(state, { x: 4, y: 3.5, z: 18 })

        break
      default:
        state.camera.position.x += Math.sin(angle) * 0.02
    }
  })

  const { nodes }: any = useGLTF('./Stage/MverseEnv.glb')
  const stageBakedTexture = useTexture('./Stage/stageBaked.png')

  return (
    <>
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
      </EffectComposer> */}

      <Sparkles
        size={64}
        scale={[50, 25, 50]}
        position-y={2}
        position-z={-12}
        speed={3}
        count={60}
        color="#D0FF0D"
      />

      <OrbitControls />

      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}

      <mesh
        scale={0.01}
        geometry={nodes.Cylinder1.geometry}
        rotation-y={Math.PI * 1}
      >
        <meshBasicMaterial map={stageBakedTexture} map-flipY={false} />
      </mesh>
      {/* Clouds from root/first step */}
      <Cloud color="#817979" speed={0.5} position={[0, -8, 15]} />
      <Cloud color="#817979" speed={0.5} position={[0, -8, 15]} />

      {/* Clouds from second step */}
      <Cloud color="#817979" speed={0.5} position={[20, -8, -15]} />
      <Cloud color="#817979" speed={0.5} position={[25, -8, -20]} />

      <Suspense fallback={null}>
        <LilMverse />
      </Suspense>
    </>
  )
}
