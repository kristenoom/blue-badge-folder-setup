function PresidentChild(props){

    const {first, last, year, passed} = props.presidentsArray;

    let deathAge = passed - year;
    return (
        <div>
        President {first} {last} 
        {props.showDeathAge ? ' ' + deathAge : ''}
    </div>
    );
};

export default PresidentChild;