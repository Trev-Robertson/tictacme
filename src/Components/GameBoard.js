import React, {useContext, useState} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {GameSquare} from './GameSquare'

export const GameBoard = () => {

    const {gameBoardState, markSquare, resetBoard} = useContext(GlobalContext)
    const [marker, setMarker] = useState('X')
    const [moveNumber, setMoveNumber] = useState(0)

    const handleClick = (index) =>{
        if (!calculateWinner()){
        const updatedGameBoard = [...gameBoardState]
       
        updatedGameBoard[index] = marker

        markSquare(updatedGameBoard)
        setMarker( marker === 'X' ? 'O' : 'X')
        let newMoveNumber = moveNumber + 1
        setMoveNumber(newMoveNumber)
        }
    }

    
    
    
    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameBoardState[a] && gameBoardState[a] === gameBoardState[b] && gameBoardState[a] === gameBoardState[c]) {
            //   return [gameBoardState[a], lines[i]];
            return [true, gameBoardState[a], lines[i]]
            }
          }
          return null;

    }

    const gameStatus = calculateWinner()

    const reset = () => {
        setMoveNumber(0)
        setMarker('X')
        resetBoard()
    }


    

    return (
        
        <div>
            <h1>Renee, Raiyah, and Raielle's Ultimate Tic Tac Toe</h1>
        <div>
    {moveNumber >= 9 ? <h2>End Game</h2> : calculateWinner() ? <h2>Player {`${calculateWinner()[1]}`} is the Winner! </h2> : <h2>Current Player: {marker}</h2>}
        </div>
        <div>
            <button className='reset-button' onClick={reset}>
                    Reset Game
            </button>
        </div>
            <div className='center'>
             <GameSquare index={0} marker={gameBoardState[0]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={1} marker={gameBoardState[1]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={2} marker={gameBoardState[2]} handleClick={handleClick} gameStatus={gameStatus}/>
            </div>
            <div className='center'>
             <GameSquare index={3} marker={gameBoardState[3]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={4} marker={gameBoardState[4]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={5} marker={gameBoardState[5]} handleClick={handleClick} gameStatus={gameStatus}/>
            </div>
            <div className='center'>
             <GameSquare index={6} marker={gameBoardState[6]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={7} marker={gameBoardState[7]} handleClick={handleClick} gameStatus={gameStatus}/>
             <GameSquare index={8} marker={gameBoardState[8]} handleClick={handleClick} gameStatus={gameStatus}/>
            </div>
        </div>
    )
}
