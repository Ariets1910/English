import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    decreaseScoreForFirstPlayer,
    decreaseScoreForSecondPlayer,
    increaseScoreForFirstPlayer,
    increaseScoreForSecondPlayer, newPlayer1Name, newPlayer2Name
} from "./Redux/State";


export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         newPlayer1Name={newPlayer1Name}
                         newPlayer2Name={newPlayer2Name}
                         increaseScoreForFirstPlayer={increaseScoreForFirstPlayer}
                         increaseScoreForSecondPlayer={increaseScoreForSecondPlayer}
                         decreaseScoreForFirstPlayer={decreaseScoreForFirstPlayer}
                         decreaseScoreForSecondPlayer={decreaseScoreForSecondPlayer}

    />, document.getElementById('root'));
};