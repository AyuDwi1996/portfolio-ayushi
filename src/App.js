import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MyTimeline from './MyTimeline';
import TicTacToe from './TicTacToe';
import Description from './TicTacToeDescription';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <MyTimeline />
      </div>
      <Description />
      <TicTacToe />
    </div>
  );
}

export default App;
