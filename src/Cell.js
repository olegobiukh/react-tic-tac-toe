import React from 'react';

export default function Cell(props) {
    // const colors = {
    //     1: 'red',
    //     2: 'yellow',
    //     3: 'white'
    // }

    // const stylesColor = {
    //     backgroundColor: colors[props.value],
    // };

    return (
        <div className={(props.value === 1) ? "Cell bg_red"
                        : (props.value === 2) ? "Cell bg_yellow"
                        : (props.value === 3) ? "Cell bg_white"
                        : "Cell bg_white"
                    }
            order={props.index}
            state={props.value}
            onClick={props.handleClick}
        /> 
    )
}


