import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import React from "react"
import * as THREE from "three"
import Loader from "./Loader"
import { Canon } from "../Canon"


const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
}) => {
  

  return (
    <View index={index} id={gsapType} className={`w-full h-full absolute`}>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name="small" position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Canon scale={[0.06, 0.06, 0.06]} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
