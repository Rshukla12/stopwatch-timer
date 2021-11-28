import React, { useState } from "react";
import style from "./Timer.module.css";

const TimerInput = ({time, onSetTime}) => {
    
    return (
        <div className={style.inpBox}>
            <input
                className={style.inp}
                type="text" 
                value={time}
                placeholder="00"
                onChange={(e)=>onSetTime(e.target.value)}
            />
        </div>
    )
}

export default TimerInput;