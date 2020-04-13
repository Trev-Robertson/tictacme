import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    gameBoard:     
    ["", "", "",
    "", "", "",
    "", "", ""]
   
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
