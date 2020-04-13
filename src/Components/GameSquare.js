import React from 'react'
// import {GlobalContext} from '../Context/GlobalState'

export const GameSquare = ({index, handleClick, marker, gameStatus}) => {
    
    
    const winner = () => {
        if (gameStatus){
         return gameStatus[2].some(value => value === index)
        }
    }
    



    return (
        <div >
            <button className='button' onClick={marker === '' ? () => handleClick(index) : null } style={{backgroundColor: winner() ? 'green' : null }}>
            <h1>{marker}</h1>
            </button>
        </div>
    )
}
