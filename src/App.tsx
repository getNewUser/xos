import './App.css';
import { GameBoard } from './components/gameboard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import markingReducer from './reducers/markingReducer'; 
import { ScoreBoard } from './components/scoreboard';

const store = configureStore({reducer: markingReducer});

function App() {
  return (
    <Provider store = {store}>      
      <GameBoard/>
      <ScoreBoard/>
    </Provider>
  )
}

export default App;
