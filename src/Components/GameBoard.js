import React from 'react'
import {GameSquare} from './GameSquare'

export const GameBoard = () => {






    return (
        <div>
        <div className='center'>
            <GameSquare /> <GameSquare /> <GameSquare />
        </div>
        <div className='center'>
        <GameSquare /> <GameSquare /> <GameSquare />
        </div>
        <div className='center'>
        <GameSquare /> <GameSquare /> <GameSquare />
        </div>
        </div>
    )
}
