import React, {useEffect, useState} from "react";

export default function CurrentTime(){
    const [tenMinutes, setTenMinutes] = useState(9)
    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
        setInterval(() => {
            setSeconds(prevValue => {
                if(prevValue === 0){
                    setTenMinutes(prevMinute => prevMinute - 1)
                    prevValue = 60
                }
                return prevValue - 1
            })
        },1000)
    },[])




    return(
        <div className="timer-container">
            <h3>Time is running out! Join now!</h3>
            <p className="timer">{tenMinutes}:{seconds <= 9 ? `0${seconds}` : seconds}</p>
        </div>
    )
}