import React, { useState, useEffect } from "react";
import "./task2.css";

import Square from "./comp/square";
import {Patterns} from "./patterns";

function Task2() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("0");
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("0");
    } else {
      setPlayer("X");
    }
  },[board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  },[result]);

  const selectSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        console.log(board[idx]);
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({winner: player, state: "Won"});
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({winner: "No one", state: "Tie"});
    }
  };

  const restartGame = () => {
    setBoard(["","","","","","","","",""]);
    setPlayer("0");
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game-wrapper">
        <div className="board">
          <div className="row">
            <Square
              val={board[0]}
              selectSquare={() => {
                selectSquare(0);
              }}
            />
            <Square
              val={board[1]}
              selectSquare={() => {
                selectSquare(1);
              }}
            />
            <Square
              val={board[2]}
              selectSquare={() => {
                selectSquare(2)
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[3]}
              selectSquare={() => {
                selectSquare(3);
              }}
            />
            <Square
              val={board[4]}
              selectSquare={() => {
                selectSquare(4);
              }}
            />
            <Square
              val={board[5]}
              selectSquare={() => {
                selectSquare(5)
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[6]}
              selectSquare={() => {
                selectSquare(6);
              }}
            />
            <Square
              val={board[7]}
              selectSquare={() => {
                selectSquare(7);
              }}
            />
            <Square
              val={board[8]}
              selectSquare={() => {
                selectSquare(8)
              }}
            />
          </div>
        </div>
        <div className="game-info">
          <div className="player">Next Player: {player}</div>
          <div className="player">Winner: {result.winner}</div>
          <button onClick={restartGame}>Restart</button>
        </div>
      </div>
    </>
  )
}

export default Task2;