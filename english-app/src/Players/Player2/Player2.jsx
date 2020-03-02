import React from "react";
import classes from "./Player2.module.css"



const Player2 = (props) => {
    let  player2Name = React.createRef();
    let newScoreElement = React.createRef();
    let increaseScoreByOne = () => {
        props.increaseScoreForSecondPlayer()
    };
    let decreaseScoreByOne = () => {
        props.decreaseScoreForSecondPlayer()
    };
    let changeName = () => {
        let name = player2Name.current.value
        props.newPlayer2Name(name)
    };
    return (


        <div className={classes.players}>


            <div className={classes.player2}>
                <div>

                    <input type="text" ref={player2Name} value={props.player2.name} onChange={changeName}/>
                </div>
            </div>
            <div className={classes.round}>
                <input type="text" value={props.player2RoundScore}/>
            </div>

            <div>

                <input type="text" ref={newScoreElement} value={props.player2StartScore} width="20px"/>
                <div>
                    <button onClick={increaseScoreByOne}>Plus</button>
                    <button onClick={decreaseScoreByOne}>Minus</button>
                </div>

            </div>

        </div>

    )
};
export default Player2

