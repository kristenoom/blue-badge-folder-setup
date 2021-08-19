import ChildComponent from './ChildComponent.jsx';

function ParentComponent(props) {

    const votes = [
        {name: "Abe Lincoln", count: 139033},
        {name: "Stephen Douglas", count: 115509}
    ];

    return (
        <div>
            <div>Hello from ParentComponent</div>
            {votes.map(vote=> <ChildComponent votes={vote} phrase={props.phrase} />)}
            {/* calling variable array, using singular version of variable to define then mapping for each component in the array */}
            
            {/* <ChildComponent votes={votes} phrase={props.phrase} />  REMOVED TO USE MAP FUNCTION ABOVE*/}
            {/* Passing the variable votes down to the ChildComponent */}
        </div>
    );
};

export default ParentComponent;