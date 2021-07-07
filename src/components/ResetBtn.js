import React from 'react';

export default function ResetBtn(props) {

    return (

        <button
            className="Reset_btn btn"
            onClick={props.handleReset}
        >
            reset
        </button>
    )
}


