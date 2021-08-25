import React, { useState, useEffect } from 'react';
import MortyChild from './MortyChild';
import { CardColumns } from 'reactstrap';

const MortyParent = (props) => {
    const [results, setResults] = useState([]);
 
    const url = `https://rickandmortyapi.com/api/character/`;

    const fetchURL = async() => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);

        setResults(data.results);
    };

    useEffect(() => {
        fetchURL();
    }, []);

    const handleClick = () => {
        fetchURL();
    }

    const displayCards = () => results.map((character) => <MortyChild key={character.id} character={character} />)

    return(
        <div>hello from MortyParent<br />
            <button className="btn btn-secondary" onClick={handleClick}>Click for Character</button>
            <br />
            <CardColumns>
                {displayCards()}
            </CardColumns>
        </div>
    )
}

export default MortyParent;