import React, { useState, useEffect } from 'react';
/* shortcut: imrse */

const UseEffectPractice = (props) => {
    const [animal, setAnimal] = useState("alligator");
    const [isPredator, setIsPredator] = useState(true);

    const handleClick = () => {
        setAnimal("monkey");
    };

    useEffect(() => {
        console.log(animal);
    }, [])

    return (
        <div>
            <p>Hello from UseEffectPractice</p>
            <p>The current animal is {animal}</p>
            <button onClick={handleClick}>Click to Change Animal</button>
            <button onClick={() => setIsPredator(!isPredator)}>Change isPredator</button>
        </div>
    );
}
 
export default UseEffectPractice;