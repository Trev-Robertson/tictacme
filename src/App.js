import React from 'react';
import './App.css';
import {GlobalProvider} from './Context/GlobalState'
import {GameBoard} from './Components/GameBoard'


function App() {
  return (
    <GlobalProvider>
    <div className="App center" style={{"height" : "100vh"}}>
      <GameBoard />
    </div>
    </GlobalProvider>
  );
}

export default App;
