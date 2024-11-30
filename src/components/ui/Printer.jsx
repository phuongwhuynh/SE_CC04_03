import { useRef, useState } from "react"
import * as THREE from "three"
import ModelView from "./ModelView"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import StatusButton from "./StatusButton"
import SettingButton from "./SettingButton"
import React from "react"
import { useContext } from "react"
import { GlobalContext } from "../../context"


const Printer = ({ model }) => {
  const cameraControlSmall = useRef()
  const small = useRef(new THREE.Group())
  const [rotate, setRotate] = useState(0)
  const { collapse } = useContext(GlobalContext)
  return (
    <div
      className={`${
        collapse ? "w-60 h-[320px]" : "w-72 h-[330px]"
      } border-2 rounded-md transition-all duration-300 ease-in-out`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <div className={`bg-transparent h-52 w-full overflow-hidden flex justify-center ${collapse?'mt-1':'mt-5'}`}>
        {/* <ModelView
          index={1}
          groupRef={small}
          gsapType="view1"
          controlRef={cameraControlSmall}
          setRotationState={setRotate}
          item={model}

        />
    
          <Canvas
            className="w-full h-full"
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: "hidden",
            }}
            eventSource={document.getElementById("root")}
          >
            <View.Port />
          </Canvas> */}
        <img src={model.img} className="w-[80%] h-[80%] object-cover" />
      </div>
      <div className="mx-auto w-full flex items-center flex-col gap-2">
        <p className="text-lg font-semibold mt-[-30px]">{`${model.location} - P${model.number}`}</p>
        <StatusButton model={model} />
        <SettingButton model={model} />
      </div>
    </div>
  )
}

export default Printer
