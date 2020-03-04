import React from "react";
import classes from "./Body.module.css"
import arrow from "../../src/images/arrow-down-4-48.png"
import state from "../Redux/State";
import Speech from "react-speech";


const Body = (props) => {

    let i = (Math.floor(Math.random() * props.body.id.length));

    let nextBody = () => {
        state.games.functions.changeBody()
    };

    return (


        <div className={classes.game}>


            <div className={classes.flagField}>

                <h1>
                    What is it?
                </h1>
                <h3>
                    Tap the picture to see the next challenge
                </h3>
                <button className={classes.button} onClick={nextBody}>
                    <img className={classes.img} src={props.body.id[i]} alt="flag"/>
                </button>
                <div className={classes.textBelow}>
                    Point your mouse here
                    <div>
                        <img className={classes.arrow} src={arrow} alt="pidkazka"/>
                    </div>
                    <div className={classes.voice}>
                        <h2>{props.body.name[i]}  <Speech text={props.body.name[i]}
                                                          voice="Google UK English Female"
                        /></h2>
                    </div>


                </div>
            </div>


        </div>

    )


};


export default Body

