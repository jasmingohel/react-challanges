import React, { useEffect, useState } from 'react'

function Test() {
    const [time, setTime] = useState({ timer: 0 })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((pre) => {
                if (pre.timer !== 18) { return { timer: pre.timer + 1 } }
                else {
                    return { timer: 0 }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='flex justify-center flex-col items-center w-full'>
            <div>{time.timer}</div>
            {time.timer >= 0 && time.timer <= 10 && <div className={`${(time.timer >= 0 && time.timer <= 10) ? 'flex' : 'hidden'}  bg-red-500 w-[25px] h-[25px] rounded-full`}>red</div>}
            {time.timer > 10 && time.timer <= 13 && <div className={`${(time.timer > 10 && time.timer <= 13) ? 'flex' : 'hidden'} bg-yellow-500 w-[25px] h-[25px] rounded-full`}>yellow</div>}
            {time.timer > 13 && time.timer <= 18 && <div className={`${(time.timer > 13 && time.timer <= 18) ? 'flex' : 'hidden'} bg-green-500 w-[25px] h-[25px] rounded-full`}>green</div>}
        </div>
    )
}

export default Test
