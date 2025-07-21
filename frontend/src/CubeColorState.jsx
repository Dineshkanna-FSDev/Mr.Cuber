import React, { useEffect, useRef } from "react";
import "cubing/twisty"; 

function CubeColorState({ facelets }) {
  const pickerRef = useRef(null);

  useEffect(() => {
    if (pickerRef.current && facelets.length === 54) {
      pickerRef.current.state = {
        puzzle: "3x3x3",
        stickerColors: facelets.toUpperCase().split("")
      };
    }
  }, [facelets]);

  return (
    <div>
      <twisty-color-picker
        ref={pickerRef}
        style={{ width: "300px", height: "300px" }}
      ></twisty-color-picker>
    </div>
  );
}

export default CubeColorState;
