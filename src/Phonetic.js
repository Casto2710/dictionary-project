import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div classNmae="Phonetic">
        <a href={props.phonetic.audio} target="_audio">
            Listen
        </a>
        <br />
        {props.phonetic.text}
        </div>
    );
}