import React, { useEffect } from 'react'
import { useState } from 'react'

function ColorGuessGame() {
    const [color, setcolor] = useState(
        ["#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
        "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
        "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),]
    )
    let randomProperty = Math.floor(Math.random() * 3)

    const checkResult = (selectedColor) => {
        console.log(randomProperty, '---', selectedColor)
        if (selectedColor === randomProperty) {
            alert('correct')
        }
        else {
            alert('never try again')
        }
    }

    useEffect(() => {

    }, [])


    return (
        <div className='flex flex-col items-center justify-center ' >
            <span className='text-[44px] font-bold mb-3'>color guess</span>
            <span>{color[randomProperty]}</span>
            <h3>guess the color</h3>
            <div className='w-full h-full flex gap-6 justify-center mt-3'>
                <div onClick={() => checkResult(0)} style={{ background: `${color[0]}`, width: '50px', height: '50px' }} className={` w-14 h-14`}></div>
                <div onClick={() => checkResult(1)} style={{ background: `${color[1]}`, width: '50px', height: '50px' }} className={` w-14 h-14`}></div>
                <div onClick={() => checkResult(2)} style={{ background: `${color[2]}`, width: '50px', height: '50px' }} className={` w-14 h-14`}></div>
            </div>
        </div >
    )
}

export default ColorGuessGame