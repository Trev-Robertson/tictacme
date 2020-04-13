import React, {useContext, useState} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {GameSquare} from './GameSquare'

export const GameBoard = () => {

    const {gameBoardState, markSquare, resetBoard} = useContext(GlobalContext)
    const [marker, setMarker] = useState('X')
    const [moveNumber, setMoveNumber] = useState(0)

    const handleClick = (index) =>{
        const updatedGameBoard = [...gameBoardState]
       
        updatedGameBoard[index] = marker
        markSquare(updatedGameBoard)
        setMarker( marker === 'X' ? 'O' : 'X')
        let newMoveNumber = moveNumber + 1
        setMoveNumber(newMoveNumber)
    }

    
    
    
    // const calculateWinner = () => {
   

    // }


    const reset = () => {

        setMoveNumber(0)

        resetBoard()
    }


    

    return (
        
        <div>
        <div>
            {moveNumber < 9 ? <h1>Current Player: {marker}</h1> : <h1>End Game</h1>}
        </div>
        <div>
            <button className='reset-button' onClick={reset}>
                    Reset Button
            </button>
        </div>
            <div className='center'>
             <GameSquare index={0} marker={gameBoardState[0]} handleClick={handleClick}/>
             <GameSquare index={1} marker={gameBoardState[1]} handleClick={handleClick}/>
             <GameSquare index={2} marker={gameBoardState[2]} handleClick={handleClick}/>
            </div>
            <div className='center'>
             <GameSquare index={3} marker={gameBoardState[3]} handleClick={handleClick}/>
             <GameSquare index={4} marker={gameBoardState[4]} handleClick={handleClick}/>
             <GameSquare index={5} marker={gameBoardState[5]} handleClick={handleClick}/>
            </div>
            <div className='center'>
             <GameSquare index={6} marker={gameBoardState[6]} handleClick={handleClick}/>
             <GameSquare index={7} marker={gameBoardState[7]} handleClick={handleClick}/>
             <GameSquare index={8} marker={gameBoardState[8]} handleClick={handleClick}/>
            </div>
        </div>
    )
}
