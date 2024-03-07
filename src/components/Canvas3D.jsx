/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const Canvas3D = ({ children }) => {
  return (
    <>
      <Canvas 
        shadows 
        style={{width: "100%", height: "100%"}}
      >
        <OrbitControls />
        <Suspense>
          <ambientLight intensity={0} />
          <Environment preset="sunset" background={false} />
          {children}
        </Suspense>
      </Canvas>
    </>
  )
}

export default Canvas3D
