import React from 'react';

import './App.css';
import Header from "./Header/Header";
import {HashRouter, Route} from "react-router-dom";
import Players from "./Players/Players";
import Flags from "./Flags/Flags";
import Body from "./Body/Body";
import Footer from "./Footer/footer";


function App (props) {


    return (
        <HashRouter>
        <div class="mainGrid">
            <div class="header">
              <Header/>
            </div>
            <div class="players">
                <Players
                    newPlayer2Name={props.newPlayer2Name}
                    newPlayer1Name={props.newPlayer1Name}
                    increaseScoreForFirstPlayer={props.increaseScoreForFirstPlayer}
                    increaseScoreForSecondPlayer={props.increaseScoreForSecondPlayer}
                    player1StartScore={props.state.player1StartScore}
                    player2StartScore={props.state.player2StartScore}
                    player1RoundScore={props.state.player1RoundScore}
                    player2RoundScore={props.state.player2RoundScore}
                    decreaseScoreForFirstPlayer={props.decreaseScoreForFirstPlayer}
                    decreaseScoreForSecondPlayer={props.decreaseScoreForSecondPlayer}
                    players={props.state.players}/>
            </div>
            <div className="game">
                <Route path="/Flags" render={() => <Flags
                    games={props.state.games}

                />}
                />
                <Route path="/Body" render={() => <Body
                    body={props.state.games.body}

                />}
                />

            </div>
            <div className="footer">
                <Footer/>
            </div>


        </div>
        </HashRouter>
    );
}

export default App;
