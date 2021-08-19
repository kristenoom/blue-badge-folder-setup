function ChildComponent(props) { //props is referencing the information being pushed from ParentComponent
    const {name, count} = props.votes; //call out the properties 

    //Final Output: Abe Lincoln had a total vote count of 139033
    return (
            /*<div>{props.votes.name} had a total vote count of {props.votes.count}</div> if you don't use line 2 to define the properties of the variable object from ParentComponent, this will work.*/
            <div>
                <p>{name} had a total vote count of {count}.</p>
                {/* <p>{props.phrase}</p> */}
            </div>
    );
};

export default ChildComponent;