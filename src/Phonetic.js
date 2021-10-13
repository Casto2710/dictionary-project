import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div classNmae="Phonetic">
        <a href={props.phonetic.audio} target="_audio">
            Listen
        </a>
       <span className="text">{props.phonetic.text} </span>
        </div>
    );
}