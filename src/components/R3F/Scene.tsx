/* eslint-disable react/no-unknown-property */
'use client'

import { AnimationsContext } from '@/contexts/AnimationsContext'
import { OrbitControls, Sparkles, useGLTF, useTexture } from '@react-three/drei'
import { RootState, useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

import { useContext } from 'react'

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

  const { nodes }: any = useGLTF('./Stage/MVERSEGLB.glb')
  const stageBakedTexture = useTexture('./Stage/ExtrudeSurface_Color.png')

  return (
    <>
      <OrbitControls />

      <mesh
        scale={0.01}
        geometry={nodes.Extrude.geometry}
        rotation-y={Math.PI * 1}
      >
        <meshBasicMaterial map={stageBakedTexture} map-flipY={false} />
      </mesh>

      <Sparkles
        size={64}
        scale={[60, 30, 60]}
        position-y={2}
        position-z={-12}
        speed={3}
        count={120}
        color="#D0FF0D"
      />
    </>
  )
}

useGLTF.preload(['./Stage/MVERSE.gltf'])
