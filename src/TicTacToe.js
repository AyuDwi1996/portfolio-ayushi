import React, { useState } from 'react';
import './TicTacToe.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Email } from '@mui/icons-material';
import logo from './images/logo_ayushi.png';
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
      return 'It\'s a draw!';
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className='background' >
      <div Style={{ display: 'flex', justifyContent: 'center', width: '40%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='text-heading'><h2 style={{ color: '#FFC928' }}>Leaving Already...Play TicTacToe?</h2></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="board">
            <div className="status">{getStatus()}</div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width:'30%',margin:'5%',borderRadius:'25px',border:'dotted' }}>
          <h1 style={{ color: '#FFC928' }}>Find Me</h1>
          <a href="https://www.linkedin.com/in/ayushi-dwivedi-15b469196/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/AyuDwi1996" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a href="mailto:adwivedi@horizon.csueastbay.edu" target="_blank" rel="noopener noreferrer">
            <Email />
            <span>Email</span>
          </a>
        </div>
        <img src={logo} alt="Flower" style={{width:'15%', height:'15%'}} />
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
