import React, { useRef, useState } from "react";
import TimerInput from "./TimerInput";
import style from "./Timer.module.css";

const Timer = ({isVisible}) => {
    const [time, setTime] = useState("");
    const [isActive, setIsActive] = useState(false);
    const refTimer = useRef(null);
    
    
    if ( !isVisible ) return null;

    const startTimer = () => {
        if ( refTimer.current || time === "" ) return;
        setIsActive(true);
        refTimer.current = setInterval(()=> {
            setTime( prev => {
                if ( prev <= 1 ) {
                    stopTimer();
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
                        className={time ? style.stop : style.btn}
                        onClick={stopTimer}
                        disabled={ !time }
                    >
                        Stop
                    </button> 
                ) : (
                    <button 
                        className={time ? style.start : style.btn}
                        onClick={startTimer}
                        disabled={ !time }
                    >
                        Start
                    </button>  
                ) }
                <button 
                    className={time ? style.reset : style.btn}
                    onClick={resetTimer}
                    disabled={ !time }
                >
                    Reset
                </button>
            </div>
        </div>
        
    )
}

export default Timer;