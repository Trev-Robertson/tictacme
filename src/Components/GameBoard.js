import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {GameSquare} from './GameSquare'

export const GameBoard = () => {

    const {gameBoardState} = useContext(GlobalContext)
    

    return (
        <div>
        <div>
            {gameBoardState.map((row, index) => {
                return (
                    <div className='center' key={index}>
                        {row.map((square, index) => 
                            <div className='center' key={index}>
                                <GameSquare key={index} marker={square}/>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>



        </div>
    )
}
