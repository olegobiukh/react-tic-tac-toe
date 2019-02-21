import React from 'react';

const Start = ({ startstyle, handleStart }) => {
    return (
        <div>
            <button style={startstyle} className='Start_btn btn' type="button" onClick={ handleStart }>Start</button>
        </div>
    )
}


export default Start;