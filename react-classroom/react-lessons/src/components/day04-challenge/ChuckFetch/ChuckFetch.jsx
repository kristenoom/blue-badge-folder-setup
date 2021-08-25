import React, { useState, useEffect } from 'react';

function ChuckFetch() {
    const url = `https://api.chucknorris.io/jokes/random`;
    const [joke, setJoke] = useState("");

    const fetchURL = async() => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.value);
        setJoke(data.value);
    };

    useEffect(() => {
        fetchURL();
    }, [])

    const handleClick = () => {
        fetchURL();
    };

    return (
        <div>
            <h1>Hello from Chuck Norris</h1>
            <p>JOKE: {joke}</p>
            <button className="btn btn-primary" onClick={handleClick}>Click for Joke</button>
        </div>
    );
}

export default ChuckFetch;