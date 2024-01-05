// LandingPage.js

import React from 'react';
import "./LandingPage.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { Canvas } from '@react-three/fiber';

const LandingPage = () => {
  return (
    <div className="landing-page">
       
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 42 }}>
              <color attach="background" args={["#171720"]} />
            
              <Suspense>
                <Experience />
              </Suspense>
              <EffectComposer>
                <Bloom mipmapBlur intensity={1.2} />
              </EffectComposer>
            </Canvas>
            
               
                 
      {/* Header */}
      <div className="header-container">
      <UI />
       
        
        <h3 className="header-text"></h3>
        
      </div>
    </div>
  );
};

export default LandingPage;
