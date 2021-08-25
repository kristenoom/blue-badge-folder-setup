import React, { useState, useEffect } from 'react';
/* shortcut: imrse */

const UseEffectPractice = (props) => {
    const [animal, setAnimal] = useState("alligator");
    const [isPredator, setIsPredator] = useState();

    const handleClick = () => {
        setAnimal("monkey");
    };

    useEffect(() => {
        console.log(animal);
        console.log(isPredator);
        //this useEffect should only run when animal is changed
        //use a switch to determine fi the animal is a predator or not

        //example: Case is a Monkey you need to change the value of isPredator to false... make a case for the alligator and change the value to isPredator to true.
        switch(animal) {
            case "monkey":
                setIsPredator(false);
                break;
            case "alligator":
                setIsPredator(true);
                break;
            default:
                setIsPredator(undefined);
        }
        
    }, [animal]) //only want useEffect to run for animal

    return (
        <div>
            <p>Hello from UseEffectPractice component</p>
            <p>
                The current animal is {animal} and predator status is {isPredator?.toString()}.
            </p>
            <button onClick={handleClick}>Click to Change Animal</button>
            {/* <button onClick={() => setIsPredator(!isPredator)}>Change isPredator</button> */}
        </div>
    );
}
 
export default UseEffectPractice;