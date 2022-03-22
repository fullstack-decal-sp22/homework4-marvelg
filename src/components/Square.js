import React, { useState } from "react";
import './styles/Square.css';

function Square(props) {
    
    return (
        <button className="square" onClick = {() => props.squareClick(props.i)} >
            {props.value}
        </button>
    )
}

export default Square;