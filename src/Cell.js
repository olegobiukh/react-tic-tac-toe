import React from 'react';

export default function Cell(props) {
    const colors = {
        1: 'red',
        2: 'yellow',
        3: 'white'
    }

    const stylesColor = {
        backgroundColor: colors[props.value],
    };

    return (
        <div style={stylesColor} className='Cell' order={props.index} state={props.value} onClick={props.handleClick} />
    )
}
