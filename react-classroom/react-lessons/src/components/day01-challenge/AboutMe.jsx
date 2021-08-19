function AboutMe() {

    const liStyle = {
        listStyle: 'none'
    };

    return (
    <div>
        <h1 style={{color:"red"}}>Kristen Oom</h1>
        <p>I grew up in Hanover Park, Illinois</p>
        <ul>
            <strong>7 places I have visited:</strong>
            <li style={{listStyle:"none"}}>Las Vegas, Nevada</li>
            <li style={liStyle}>Marquette, Michigan</li>
            <li style={liStyle}>Sault Ste. Marie, Michigan</li>
            <li style={liStyle}>Seymour, Indiana</li>
            <li style={liStyle}>Kansas City, Missouri/Kansas</li>
            <li style={liStyle}>Dubuque, Iowa</li>
            <li style={liStyle}>Death Valley National Park</li>
        </ul>
    </div>);
}

export default AboutMe;