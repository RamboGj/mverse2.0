/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export function Test() {
  const { scene } = useGLTF('./L3Logo.glb')

  const logo3D = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    logo3D.current.rotation.z += delta
  })

  return (
    <>
      <OrbitControls />

      <Stage>
        <primitive
          ref={logo3D}
          object={scene}
          scale={5}
          rotation-x={Math.PI * 0.5}
          rotation-y={Math.PI * 0.1}
        />
      </Stage>
    </>
  )
}

useGLTF.preload('./L3Logo.glb')
