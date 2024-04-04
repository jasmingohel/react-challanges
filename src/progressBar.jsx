import React from 'react'
import { useState } from 'react'

function ProgressBar() {
    const [fill, setFill] = useState(0);
    const [isAnimation, setIsAnimation] = useState(false)
    const handlePlay = () => {
        setIsAnimation(() => true)
        setFill(() => 100)
        document.getElementById('progressBar').style.animationPlayState = 'running';
    }
    const handlePause = () => {
        document.getElementById('progressBar').style.animationPlayState = 'paused';
    }
    const handleReset = () => {
        setIsAnimation(() => false)
        setFill(() => 0)
    }
    return (
        <div>
            <div className='w-[100%]'></div>
            <div className='container w-[200px] h-[180px] bg-gray-400' >
                <div id='progressBar' style={{ height: `${fill}%` }} className={`bar w-[100%]  bg-blue-400 ${isAnimation && 'animate-fill'}`}></div>
            </div>
            <button onClick={() => { handlePlay() }} className='border border-solid border-gray-500 p-2 m-2'>play</button>
            <button onClick={() => { handlePause() }} className='border border-solid border-gray-500 p-2 m-2'>pause</button>
            <button onClick={() => { handleReset() }} className='border border-solid border-gray-500 p-2 m-2'>reset</button>
        </div>
    )
}

export default ProgressBar