import React from "react";
import style from "./Timer.module.css";

const TimerInput = ({time, onSetTime}) => {

    const updateTime = (e) => {
        if ( Number.isNaN(Number(e.target.value)) ) return;
        onSetTime(e.target.value)
    }


    return (
        <div className={style.inpBox}>
            <input
                className={style.inp}
                type="text" 
                value={time}
                placeholder="00"
                onChange={updateTime}
            />
        </div>
    )
}

export default TimerInput;