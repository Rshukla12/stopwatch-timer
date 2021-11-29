import React, { useState } from "react";
import Timer from "./Timer/Timer.jsx";
import Stopwatch from "./Stopwatch/Stopwatch";
import style from "./TimerStopwatch.module.css";

const TimerStopwatch = () => {
    const [ show, setShow ] = useState("timer");

    return (
        <div className={style.main}>
            <div className={style.btns} >
                <div 
                    onClick={() => setShow("timer")}
                    className={ show==="timer" ? style.activeBtn : style.btn  }
                >
                    Timer
                </div>
                <div
                    onClick={() => setShow("stopwatch")} 
                    className={ show==="stopwatch" ? style.activeBtn : style.btn  }
                >
                    Stopwatch
                </div>
            </div>
            <div>
                <Timer isVisible={show==="timer"}/>
                <Stopwatch isVisible={show==="stopwatch"}/>
            </div>
        </div>
    )
}

export default TimerStopwatch;