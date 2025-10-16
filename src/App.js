import './App.css';
import React from 'react';

function App(props) {
  return (
    <>
    <div className="aab">
    <h1 className="pqr">{props.name}</h1>
    <img src={props.img} />
    <p>{props.desc}</p>
    </div> 
    </>
  );
}
export default App;

