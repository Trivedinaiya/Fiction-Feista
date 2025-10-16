import React, { useState } from "react";
export default function aaaa (){
    const [col, setCol] = useState('blue');
    const colours=['pink','yellow','blue','green','orange','violet','grey','red']
    
    function getRandom(){
      return colours[Math.floor(Math.random()*colours.length)];
    }

    function pink(){
      setCol('pink');
    }

    function yellow(){
      setCol('yellow');
    }

    function violet(){
      setCol('violet');
    }

    function grey(){
      setCol('grey');
    }

    function blue(){
      setCol('blue');
    }

    function green(){
      setCol('green');
    }

    function orange(){
      setCol('orange');
    }

    function red(){
      setCol('red');
    }

    function ran(){
      setCol(getRandom());
    }

    return (
        <> 
          <div><button className='col'style={{background:col}}> </button></div>
            <button onClick={pink}>pink</button>
            <button onClick={grey}>grey</button>
            <button onClick={orange}>orange</button>
            <button onClick={red}>red</button>
            <button onClick={green}>green</button>
            <button onClick={blue}>blue</button>
            <button onClick={violet}>violet</button>
            <button onClick={yellow}>yellow</button>
            <button onClick={ran}>Random color</button>
            
        </>
      );
  }
  export {aaaa};