import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

// const initialState = {
//   gameBoard: {
//     row1: ["X", "O", "O"],
//     row2: ["O", "X", "X"],
//     row3: ["X", "O", "X"]
//   }
// };
const initialState = {
    gameBoard: 
      [["X", "O", "O"],
       ["O", "X", "X"],
       ["X", "O", "X"]
      ]
  };

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function markSquare(updatedBoard){
        dispatch({
            type: 'MARK_SQUARE', 
            payload: updatedBoard
        })
    }

    function resetBoard(){
        dispatch({
            type: 'RESET_BOARD'
        })
    }
    return (<GlobalContext.Provider
                value={{
                    gameBoardState: state.gameBoard, 
                    markSquare, 
                    resetBoard
                }}
            >

                {children}


           </GlobalContext.Provider>
    )

}
