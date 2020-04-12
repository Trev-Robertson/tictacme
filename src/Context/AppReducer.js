export default (state, action) => {
    switch(action.type){
        case 'MARK_SQUARE':
            return {
                ...state, 
                gameBoard: action.payload
            }
        case 'RESET_BOARD':
            return{
                ...state, 
                gameBoard:     
                [["", "", ""],
                ["", "", ""],
                ["", "", ""]
               ]
            }
        
        
        default:
            return state
    }
}