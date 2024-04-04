import React, { useEffect } from 'react'
import { useState } from 'react'

const positiveAdjectives = ['Beautiful', 'Joyful', 'Kind', 'Loving', 'Patient', 'Thoughtful', 'Courageous', 'Intelligent', 'Ambitious', 'Creative', 'Confident', 'Enthusiastic'];

const funnyNouns = ['Sausage', 'Pickle', 'Cactus', 'Kitten', 'Zombie', 'Unicorn', 'Yeti', 'Alien', 'Shark', 'Giraffe', 'Elephant', 'Gorilla', 'Panda', 'Sloth', 'Flamingo', 'Chimpanzee', 'Giraffe', 'Hippopotamus', 'Ostrich', 'Crocodile', 'Squirrel', 'Koala', 'Pig', 'Chicken', 'Mouse', 'Cat', 'Dog', 'Squirrel', 'Llama', 'Fox', 'Polar bear'];

const HeroName = () => {


    return (
        <div className='flex justify-center'>
            <select name="month" id="month">
                {positiveAdjectives.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            <select name="month" id="month">
                {funnyNouns.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>

        </div>
    );
};
export default HeroName