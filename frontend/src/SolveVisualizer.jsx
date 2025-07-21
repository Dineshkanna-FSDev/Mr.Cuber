import React, { useEffect, useRef, useState } from "react";
import "cubing/twisty";

export default function CubePlayer({ solution }) {
  const playerRef = useRef(null);
   
  useEffect(() => {
  
    if (playerRef.current) {
      playerRef.current.setAttribute("alg", solution);
    }
  
  }, [solution]);

  return (
    <>
      <twisty-player
        ref={playerRef}
        puzzle="3x3x3"
        alg={solution}
        background="none"
        controls="none"
        style={{ width: "400px", height: "400px" }}
      ></twisty-player>
    </>
  );
}
