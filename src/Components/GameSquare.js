import React from 'react'

export const GameSquare = ({marker}) => {
    return (
        <div>
            <button className='button'>
            {marker}
            </button>
        </div>
    )
}
