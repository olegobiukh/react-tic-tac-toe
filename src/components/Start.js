import React from 'react';

const Start = ({ StartStyles, handleStart}) => {

    return (
        <div>
            <button className={StartStyles} type="button" onClick={ handleStart }>Start</button>
        </div>
    )
}

export default Start;
