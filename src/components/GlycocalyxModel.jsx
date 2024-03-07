/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'

export default function GlycocalyxModel(props) {
  const { nodes, materials } = useGLTF('/glycocalyx-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Membrane.geometry} material={materials.PaletteMaterial001} position={[0, -1.685, 13.267]} />
    </group>
  )
}

useGLTF.preload('/glycocalyx-transformed.glb')
