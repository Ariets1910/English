import React from "react";
import classes from "./Score.module.css"



const Score = (props) => {
    return (
        <div className={classes.score}>
           <div>
               Score
           </div>
            <div>
                Total
            </div>
            <div>
                Round
            </div>
            <div>
                Plus/Minus
            </div>
        </div>

    )
};

export default Score

