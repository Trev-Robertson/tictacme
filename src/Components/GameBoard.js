import React, {useContext, useState} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {GameSquare} from './GameSquare'

export const GameBoard = () => {

    const {gameBoardState, markSquare, resetBoard} = useContext(GlobalContext)
    const [marker, setMarker] = useState('X')
    const [moveNumber, setMoveNumber] = useState(0)

    const handleClick = (coordinates) =>{
        const updatedGameBoard = [...gameBoardState]
       const [a, b] = coordinates
        updatedGameBoard[a][b] = marker
        markSquare(updatedGameBoard)
        setMarker( marker === 'X' ? 'O' : 'X')
        let newMoveNumber = moveNumber + 1
        setMoveNumber(newMoveNumber)
    }

    
    
    
    // const calculateWinner = () => {
    //     const list = [
    //         [[0,0], [0,1], [0, 2]], 
    //         [[1,0], [1,1], [1, 2]],
    //         [[2,0], [2,1], [2, 2]],
            
    //         [[0,0], [1,1], [2, 2]],
    //         [[0,2], [1,1], [2, 0]],
            
    //         [[0,0], [1,0], [2, 0]],
    //         [[0,1], [1,1], [2, 1]],
    //         [[0,2], [1,2], [2, 2]],
    //     ]
    
    //       const updatedGameBoard = [...gameBoardState]
        
    //     for (let i = 0; i < list.length; i++) {
           
    //     } 
        
    // }


    const reset = () => {

        setMoveNumber(0)

        resetBoard()
    }

    

    return (

        <div>
            {moveNumber < 9 ? <h1>Current Player: {marker}</h1> : <h1>End Game</h1>}
        <div>
            <button className='reset-button' onClick={reset}>
                    Reset Button
            </button>
        <div>
            {gameBoardState.map((row, index) => {
                const column = index
                return (
                    <div className='center' key={index}>
                        {row.map((square, index) => 
                            <div className='center'  key={index}>
                                <GameSquare key={index} marker={square} coordinates={[column, index]} handleClick={handleClick}/>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
        </div>
        </div>
    )
}
