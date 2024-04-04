// import React, { useEffect } from 'react'
// import { useState } from 'react'

// function InsertText() {
//     const [text, seText] = useState()
//     const handle = () => {
//         const textInput = document.getElementById('w3review');
//         textInput?.addEventListener('keydown', (event) => {
//             if (event.key == 'Enter') {
//                 console.log('Enter key pressed!', event.target.value);
//                 seText(() => event.target.value);
//                 // Perform desired actions here
//             }
//         });
//     }

//     useEffect(() => {

//     }, [text])

//     return (
//         <div>
//             <div >current:
//                 {console.log('hmm')}
//                 <span className='animate-glow'>
//                     {text}
//                 </span>
//             </div>
//             <div>
//                 <textarea onKeyDown={() => handle()} id="w3review" name="w3review" rows="4" cols="50"></textarea>
//             </div>
//         </div>
//     )
// }

// export default InsertText

import React, { useEffect, useState } from 'react';

function InsertText() {
    const [text, setText] = useState('');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                console.log('Enter key pressed!', event.target.value);
                event.currentTarget.className += 'animate-glow'
                setText(event.target.value);
                console.log('start')
                console.log(event.currentTarget.disabled)
                event.currentTarget.disabled = true
                setAnimate((prev) => !prev); // Trigger animation
            }
        };

        const textInput = document.getElementById('w3review');
        textInput.addEventListener('keydown', handleKeyDown);

        return () => {
            textInput.removeEventListener('keydown', handleKeyDown);
        };

    }, []);

    const handleAnimationEnd = (e) => {
        console.log('??', e.target.classList)
        e.target.classList.remove("animate-glow");
        e.currentTarget.disabled = false

        setAnimate((prev) => !prev); // Remove the animation trigger
    };

    return (
        <div>
            <div>
                <span   >current:{text}</span>
            </div>
            <div>
                <textarea id="w3review" name="w3review" rows="4" cols="50" onAnimationEnd={(e) => handleAnimationEnd(e)}></textarea>
            </div>
        </div>
    );
}

export default InsertText;
