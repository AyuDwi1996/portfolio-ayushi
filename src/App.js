import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MyTimeline from './MyTimeline';
import TicTacToe from './TicTacToe';
import Projects from './Projects';
import MyJourney from './MyJourney';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <MyTimeline />
      </div>
      <MyJourney />
      <TicTacToe />
    </div>
  );
}

export default App;
