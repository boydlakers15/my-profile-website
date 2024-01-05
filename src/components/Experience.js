import {
    CameraControls,
    Environment,
    MeshReflectorMaterial,
    RenderTexture,
    Text,
    useFont,
  } from "@react-three/drei";
  import { useFrame } from "@react-three/fiber";
  import { useAtom } from "jotai";
  import { useEffect, useRef } from "react";
  import { Color } from "three";
  import { degToRad, lerp } from "three/src/math/MathUtils";
  import { Model } from "./Billboard";
  import { currentPageAtom } from "./UI";


  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.5);
  
  export const Experience = () => {
    const controls = useRef();
    const meshFitCameraHome = useRef();
    const meshFitCameraStore = useRef();
    const textMaterial = useRef();
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  
    useFrame((_, delta) => {
      textMaterial.current.opacity = lerp(
        textMaterial.current.opacity,
        currentPage === "home" || currentPage === "intro" ? 1 : 0,
        delta * 1.5
      );
    });
  
    const intro = async () => {
      controls.current.dolly(-22);
      controls.current.smoothTime = 1.6;
      setTimeout(() => {
        setCurrentPage("home");
      }, 1200);
      fitCamera();
    };
  
    const fitCamera = async () => {
      if (currentPage === "store") {
        controls.current.smoothTime = 0.8;
        controls.current.fitToBox(meshFitCameraStore.current, true);
      } else {
        controls.current.smoothTime = 1.6;
        controls.current.fitToBox(meshFitCameraHome.current, true);
      }
    };
  
    useEffect(() => {
      intro();
    }, []);
  
    useEffect(() => {
      fitCamera();
      window.addEventListener("resize", fitCamera);
      return () => window.removeEventListener("resize", fitCamera);
    }, [currentPage]);
  
    return (
      <>
        <CameraControls ref={controls} />
        <mesh ref={meshFitCameraHome} position={[3.1, 1, .3]} visible={false}>
          <boxGeometry args={[12.5, 2, 2]} />
          <meshBasicMaterial color="orange" transparent opacity={0.9} />
        </mesh>
        <Text
          font={"fonts/Poppins-SemiBoldItalic.ttf"}
          position-x={-.5}
          position-y={-0.5}
          position-z={1.1}
          lineHeight={0.8}
          textAlign="center"
          rotation-y={degToRad(30)}
          anchorY={"bottom"}
          fontSize={0.7} // Adjust the font size as needed
        >
         WELCOME
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={textMaterial}
          >
            <RenderTexture attach={"map"}>
              <color attach="background" args={["#fff"]} />
              <Environment preset="sunset" />
              
                <Model
                  scale={1.2}
                  rotation-y={-degToRad(17.5)}
                  position-x={-0.29} // Adjust the X position to move it to the right
                  position-y={0.67}
                  position-z={1.193}
                />
             
            </RenderTexture>
          </meshBasicMaterial>
        </Text>

        <Text
            font={"fonts/Poppins-SemiBoldItalic.ttf"}
            position-x={5} // Adjust the X position to move it to the right
            position-y={-0.4}
            position-z={1.8}
            lineHeight={0.8}
            textAlign="center"
            rotation-y={degToRad(-30)} // Adjust the rotation if needed
            anchorY={"bottom"}
            fontSize={0.7} // Adjust the font size as needed
            >
            Open to Discover
            <meshBasicMaterial
                color={bloomColor}
                toneMapped={false}
                ref={textMaterial} // Consider using a different ref for the second Text component
            >
                <RenderTexture attach={"map"}>
                <color attach="background" args={["#fff"]} />
                <Environment preset="sunset" />
                
                </RenderTexture>
            </meshBasicMaterial>
            </Text>
        <group rotation-y={degToRad(-90)} position-x={1.7} position-y={-.4} position-z={-.1}>
          <Model scale={0.07} html />
          <mesh ref={meshFitCameraStore} position={[0, 2.5, -1]} visible={false}>
            <boxGeometry args={[2, 2, 4]} />
            <meshBasicMaterial color="red" transparent opacity={0.5} />
          </mesh>
        </group>
        <mesh position-y={-.48} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1.1}
            opacity={0.5}
            transparent
            minDepthThreshold={0.2}
            maxDepthThreshold={1.4}
            color="#333"
            metalness={0.5}
          />
        </mesh>
        <Environment preset="sunset" />
      </>
    );
  };
  
  useFont.preload("fonts/Poppins-SemiBoldItalic.ttf");