import React, { useState } from 'react';
import axios from "axios";
import CubeColorState from "./CubeColorState";
import './App.css'
import Navbar from './Navbar';
import SolveVisualizer from './SolveVisualizer';
function App() {
  const [upcolor, setUpcolor] = useState("");
  const [rightcolor, setRightcolor] = useState("");
  const [frontcolor, setFrontcolor] = useState("");
  const [downcolor, setDowncolor] = useState("");
  const [leftcolor, setLeftcolor] = useState("");
  const [backcolor, setBackcolor] = useState("");
  const [solution, setSolution] = useState("");

  const [up, setUp] = useState("");
  const [right, setRight] = useState("");
  const [front, setFront] = useState("");
  const [down, setDown] = useState("");
  const [left, setLeft] = useState("");
  const [back, setBack] = useState("");


  const HandleOnSubmit = async (e) => {
     e.preventDefault();

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/cube/', {
        up: upcolor,
        right: rightcolor,
        front: frontcolor,
        down: downcolor,
        left: leftcolor,
        back: backcolor,
      });
      setSolution(res.data.solution || "No solution returned");
    } catch (error) {
      setSolution("Error: " + (error.response?.data?.error || "Something went wrong"));
    }
  };

  const HandleOnChangeUp=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setUp(value)

    const map={
      'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    setUpcolor(result);
  }
  const HandleOnChangeDown=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setDown(value);
    const map={
      'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    setDowncolor(result);
  }
  const HandleOnChangeLeft=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setLeft(value);
    const map={
      'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    setLeftcolor(result);
  }
  const HandleOnChangeRight=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setRight(value)
    const map={
      'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    console.log(value)
    console.log(rightcolor)
    setRightcolor(result);
  }
  const HandleOnChangeBack=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setBack(value)
    const map={
      'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    setBackcolor(result);
  }
  const HandleOnChangeFront=(e)=>{
    const value=e.target.value.toUpperCase().slice(0,9)
    setFront(value)
    const map={
     'W': 'U',
      'Y': 'D',
      'R': 'L',
      'O': 'R',
      'B': 'B',
      'G': 'F'
    }
    const result= value.split('').map(props=>map[props]||props).join('');
    setFrontcolor(result);
  }
  const inputString = upcolor+rightcolor+frontcolor+downcolor+leftcolor+backcolor;

  const mapColorToCSS = (char) => {
  switch (char) {
    case 'W': return 'white';
    case 'Y': return 'yellow';
    case 'R': return 'red';
    case 'O': return 'orange';
    case 'G': return 'green';
    case 'B': return 'blue';
    default: return 'gray';
  }
  };


  return (
      <div className='body '>
      <Navbar/>
      {inputString.length === 54 && (
        <CubeColorState facelets={inputString} />
      )}
        <div className='scrambled_cube' style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
          {["Up", "Right", "Front", "Down", "Left", "Back"].map((face, i) => {
            const faceColor = [up, right, front, down, left, back][i]; // raw input like WWWWWWWWW
            return (
              <div className='text-light' key={face} style={{ margin: "10px" }}>
                <h4>{face}</h4>
                <div className='cube_margin' >
                  <div  style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)", gap: "3px" }}>
                  {faceColor.split('').map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: mapColorToCSS(color),
                        border: "1px solid #000",
                        borderRadius:"7px",
                      }}
                    ></div>
                  ))}
                </div>
                </div>
                
              </div>
            );
          })}
        </div>
    <div className="form_container">
  <form className="input_form" onSubmit={HandleOnSubmit}>
    <div className="form_group">
      <label>White Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: WWWWWWWWW" onChange={HandleOnChangeUp} />
    </div>

    <div className="form_group">
      <label>Red Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: RRRRRRRRR" onChange={HandleOnChangeRight} />
    </div>

    <div className="form_group">
      <label>Green Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: GGGGGGGGG" onChange={HandleOnChangeFront} />
    </div>

    <div className="form_group">
      <label>Yellow Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: YYYYYYYYY" onChange={HandleOnChangeDown} />
    </div>

    <div className="form_group">
      <label>Orange Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: OOOOOOOOO" onChange={HandleOnChangeLeft} />
    </div>

    <div className="form_group">
      <label>Blue Face:</label>
      <input type="text" maxLength={9} placeholder="Eg: BBBBBBBBB" onChange={HandleOnChangeBack} />
    </div>

    <button type="submit" className="solve_btn">Solve</button>
  </form>
</div>



      
      <div className='d-flex justify-content-evenly '>
        {solution && (
        <div >
          <h3 className='text-light'>Solution:</h3>
          <p className='text-light' >{solution}</p>
        </div>
      )}
      <div className='d-flex justify-content-center mb-5'>
        <SolveVisualizer solution={solution}/>
      </div>
      </div>
     
      
    
    </div>
    
    
  );
}

export default App;
