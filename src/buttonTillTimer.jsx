import React, { useEffect, useState } from 'react'

function ButtonTillTimer() {
    const [time, setTime] = useState({ timer: 10 })
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((pre) => {
                if (pre.timer !== 0) { return { timer: pre.timer - 1 } }
                else {
                    return { timer: 0 }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    return (
        <div>
            <div>
                time left:{time.timer} seconds
            </div>
            <div>
                counter: {counter} times
                {time.timer > 0 && <button className='border-2 border-solid border-black p-1' onClick={() => { setCounter((prev) => prev + 1) }}>+</button>}
            </div>
        </div>
    )
}

export default ButtonTillTimer