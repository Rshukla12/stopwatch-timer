import React, { useEffect, useRef, useState } from "react";
import TimerInput from "./TimerInput";
import style from "./Timer.module.css";

const Timer = () => {
    const [time, setTime] = useState("");
    const [isActive, setIsActive] = useState(false);
    const refTimer = useRef(null);
    
    const startTimer = () => {
        if ( refTimer.current || time === "" ) return;
        setIsActive(true);
        refTimer.current = setInterval(()=> {
            setTime( prev => {
                if ( prev === 1 ) {
                    clearInterval(refTimer.current);
                    setIsActive(true);
                }
                return prev-1;
            });
        }, 1000);
    }

    const stopTimer = () => {
        setIsActive(false);
        if ( !refTimer.current ) return;
        clearInterval(refTimer.current);
        refTimer.current = null;
    }

    const resetTimer = () => {
        stopTimer();
        setTime("");
    }

    return(
        <div className={style.main}>
            <TimerInput time={time} onSetTime={setTime}/>
            <div className={style.btns}>
                { isActive ? ( 
                    <button 
                        className={style.stop}
                        onClick={stopTimer}
                    >
                        Stop
                    </button> 
                ) : (
                    <button 
                        className={style.start}
                        onClick={startTimer}
                    >
                        Start
                    </button>  
                ) }
                <button 
                    className={style.reset}
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
        
    )
}

export default Timer;