import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

  const handleSquareClick = clickedPosiion => {
    if (squares[clickedPosiion]  || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosiion == position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
