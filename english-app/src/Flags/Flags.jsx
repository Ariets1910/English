import React from "react";
import classes from "./Flags.module.css"
import arrow from "../../src/images/arrow-down-4-48.png"
import state from "../Redux/State";
import Speech from "react-speech";

document.getElementById('node')

// const style = {
//     play: {
//         button: {
//             width: '48',
//             height: '48',
//             cursor: 'pointer',
//             pointerEvents: 'none',
//             outline: 'none',
//             backgroundColor: 'yellow',
//             border: 'solid 1px rgba(255,255,255,1)',
//             borderRadius: 6
//         },
//     }
// };

const Flags = (props) => {

    let i = (Math.floor(Math.random() * props.games.flags.countries.length));

    let nextFlag = () => {
        state.games.functions.changeFlag()
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
                <button className={classes.button} onClick={nextFlag}>
                    <img className={classes.img} src={props.games.flags.countries[i]} alt="flag"/>
                </button>
                <div className={classes.textBelow}>
                    Point your mouse here
                    <div>
                        <img className={classes.arrow} src={arrow} alt="pidkazka"/>
                    </div>
                    <div className={classes.voice}>
                        <h2> {props.games.list[i]} <Speech
                            // styles={style}
                            text={props.games.list[i]}
                            voice="Google UK English Female"/></h2>
                    </div>


                </div>
            </div>


        </div>

    )


};


export default Flags

