import React from 'react';

const NytResults = (props) => {

    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result._id}>
                        <h3>{result.headline.main}</h3>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                        <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
            <div>
                <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
                <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
            </div>
        </div>
    );
};

export default NytResults;

/* 
    LINES: 7-23
    ***IN NytResults RETURN****
    Map essentially takes every item in an array and performs the same action on it. So in this case, map is taking each result, and formatting it in JSX.
    Things to notice:
    - unique keys are required when you create multiples of the same item (so when you use map). Here we have an id we can use.
    - We're taking the main headline and putting it in a H3 tag
    - We use another ternary to check if there is more than 1 (AKA at least 2) things in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a 'large' size and not the 'XL' size [0]
    - We put the article snippet in a P tag
    - We use another ternary to check if there are keywords. If there are we display the string: 'Keywords:'
    - We use a list and map to put every keyword into a list item
    - We link to the URL of the article

    LINES: 25-26
    created 2 buttons, one for Previous 10 articles and one for Next 10 articles.
    both buttons call to the changePage function we defined in the parent and passing the corresponding direction

*/