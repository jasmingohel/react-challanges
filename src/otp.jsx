import React, { useRef } from 'react';

function OTPhotstar() {
    const refs = useRef([]);


    const handleClick = () => {
        console.log('ref:', refs)
        // Example of focusing the first input
        refs.current.map((ref) => {
            console.log('map::', ref.value)
            if (ref.value !== '') {
                ref.focus()
            }

        })
    };

    return (
        <div>
            {[0, 1, 2, 3].map((index) => (
                <input
                    key={index}
                    type="text"
                    ref={(el) => (refs.current[index] = el)}
                    onChange={(e) => handleClick()}

                />
            ))}
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default OTPhotstar;
