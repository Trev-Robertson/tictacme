import React from 'react'
// import {GlobalContext} from '../Context/GlobalState'

export const GameSquare = ({handleClick, marker, coordinates}) => {

    return (
        <div>
            <button className='button' onClick={marker === '' ? () => handleClick(coordinates) : null }>
            <h1>{marker}</h1>
            </button>
        </div>
    )
}
