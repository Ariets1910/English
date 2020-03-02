import React from "react";
import classes from "./Player1.module.css"
import state from "../../Redux/State";


const Player1 = (props) => {

    let  player1Name = React.createRef();
    let newScoreElement = React.createRef();
    let increaseScoreByOne = () => {
        props.increaseScoreForFirstPlayer()
    };
    let decreaseScoreByOne = () => {
        props.decreaseScoreForFirstPlayer()
    };
    let changeName = () => {
        let name = player1Name.current.value
        props.newPlayer1Name(name)
    };

    return (


        <div className={classes.players}>


            <div className={classes.player1}>
               <div>

                   <input type="text" ref={player1Name} value={props.player1.name} onChange={changeName}/>
               </div>
            </div>
            <div className={classes.round}>
                <input type="text" value={props.player1RoundScore}/>

            </div>

            <div>

                <input type="text" ref={newScoreElement} value={props.player1StartScore} width="20px"/>
                <div>
                    <button onClick={increaseScoreByOne}>Plus</button>
                    <button onClick={decreaseScoreByOne}>Minus</button>
                </div>

            </div>

        </div>

    )
};

export default Player1

