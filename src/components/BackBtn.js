import React from 'react';

export default function BackBtn(props) {

    return (

        <button 
            className="Back_btn btn"
            onClick={props.handleBack}
        >
            back
        </button>
    )
}


