import "./App.css";

import Board from "./tictac/Board"

function App() {
  return (
    <div className="App">
      <h1 className="hdng">TIC-TAC-TOE GAME</h1>
      <h2 className="hdngtwo">Click on the Squares To Continue</h2>
      <Board />
    </div>
  );
}

export default App;