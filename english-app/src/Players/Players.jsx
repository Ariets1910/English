import React from "react";
import classes from "./Players.module.css"
import Player1 from "./Player1/Player1";
import Player2 from "./Player2/Player2";
import Score from "./Score/Score";


const Players = (props) => {

    return (
        <div className={classes.playersMainField}>
            <div className={classes.score}>
                <Score/>
            </div>
            <div className={classes.player}>
                <Player1
                    player1={props.players.player1}
                    newPlayer1Name={props.newPlayer1Name}
                    decreaseScoreForFirstPlayer={props.decreaseScoreForFirstPlayer}
                    increaseScoreForFirstPlayer={props.increaseScoreForFirstPlayer}
                    player1StartScore={props.player1StartScore}
                    player1RoundScore={props.player1RoundScore}/>
            </div>
            <div className={classes.player}>
                <Player2

                    player2={props.players.player2}
                    newPlayer2Name={props.newPlayer2Name}
                    increaseScoreForSecondPlayer={props.increaseScoreForSecondPlayer}
                    decreaseScoreForSecondPlayer={props.decreaseScoreForSecondPlayer}
                    player2StartScore={props.player2StartScore}
                    player2RoundScore={props.player2RoundScore}/>
            </div>

        </div>

    )
};

export default Players

