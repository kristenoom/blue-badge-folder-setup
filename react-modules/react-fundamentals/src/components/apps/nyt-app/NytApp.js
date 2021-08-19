import React, {useState} from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '73nG96tpcGC2ZjYojDCr3Pb3igzbKxyb';

const NytApp = (props) => {

    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        setPageNumber(0);
        fetchResults();
        event.preventDefault();
    };

    const changePageNumber = (event, direction) => { /* pagination function */
        event.preventDefault();
        if(direction === 'down') {
            if(pageNumber > 0){ /* Prevent showing negative page numbers */
                setPageNumber(pageNumber - 1);
                fetchResults();
            }
        }
        if(direction === 'up') {
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
    };
    
    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date : </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
                    <br />
                    <span>Enter an end date : </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null}
            </div>
        </div>
    );
};

export default NytApp;

/* 
    LINE 46:
    {results.length > 0 ? <NytResults results={results} /> : null} 
    Using another ternary, this time the condition we're checking for is if our results lenght is greater than zero, AKA do we have any results
    if there are results, then display our NytResults component, if we don't then we can just display an empty div
    The props that we are passing to the NytResults component is equal to the results state value.
    In order to access this prop in the NytResults component, we need to use props.results since that's what we named our prop.
    If prop was named nytResults instead of results then we would have to use props.nytResults

    {results.length > 0 ? <NytResults results={results} changePage={ChangePageNumber} /> : null}
    Line updated to pass our changePageNumber function from NytResults as a prop called changePage

*/