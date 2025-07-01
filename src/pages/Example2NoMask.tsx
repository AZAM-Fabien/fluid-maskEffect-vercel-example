import { EffectComposer } from "@react-three/postprocessing";
import { FluidMask, useConfig } from "fluid-maskeffect";
import img from "../assets/img.jpg";
import Text from "./Text";
import { useTexture } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';   

const Image = () => {
  const texture = useTexture(img);

  return (
    <mesh position-z={-4}>
      <planeGeometry args={[7, 10, 20, 20]} attach="geometry" />
      <meshBasicMaterial map={texture} color="#c4b4d2" />
    </mesh>
  );
};

const Example5 = () => {
  const config = useConfig();
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <Image />
        <Text />
        <EffectComposer>
          <FluidMask
          {...config}
            maskMode={false}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Example5;
