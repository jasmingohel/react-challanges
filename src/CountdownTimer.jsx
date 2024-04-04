import React, { useEffect, useState } from 'react'

function CountdownTimer() {
    const [time, setTime] = useState({ timer: 10 })
    const [counter, setCounter] = useState(0);
    const [run, setRun] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(run)
            run && setTime((pre) => {
                if (pre.timer !== 0) { return { timer: pre.timer - 1 } }
                else {
                    return { timer: 0 }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [run])
    return (
        <div>
            <input type="number" onChange={(e) => setTime(() => { return { timer: e.target.value } })} />
            <div>
                time left:{time.timer} seconds
            </div>
            <div>
                counter: {counter} times
                {time.timer > 0 && <button className='border-2 border-solid border-black p-1' onClick={() => { setCounter((prev) => prev + 1) }}>+</button>}
            </div>

            <button className='text-red-500 ' onClick={() => setRun(() => !run)}>play or pause</button>
        </div>
    )
}

export default CountdownTimer