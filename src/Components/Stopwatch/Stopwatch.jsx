import React, { useRef, useState } from "react";
import style from "./Stopwatch.module.css";

const Stopwatch = ({isVisible}) => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const refTimer = useRef(null);

    if ( !isVisible ) return null;
    
    const startTimer = () => {
        if ( refTimer.current ) return;
        setIsActive(true);
        refTimer.current = setInterval(()=> {
            setTime( prev => prev+1);
        }, 10);
    }

    const stopTimer = () => {
        setIsActive(false);
        if ( !refTimer.current ) return;
        clearInterval(refTimer.current);
        refTimer.current = null;
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }

    return(
        <div className={style.main}>
                <div className={style.time}>
                    <div className={style.secs}>{Math.floor(time/100)}</div>
                    <div className={style.ms}>{time%100}</div>
                </div>
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

export default Stopwatch;