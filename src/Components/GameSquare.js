import React from 'react'
// import {GlobalContext} from '../Context/GlobalState'

export const GameSquare = ({index, handleClick, marker}) => {

    return (
        <div>
            <button className='button' onClick={marker === '' ? () => handleClick(index) : null }>
            <h1>{marker}</h1>
            </button>
        </div>
    )
}
