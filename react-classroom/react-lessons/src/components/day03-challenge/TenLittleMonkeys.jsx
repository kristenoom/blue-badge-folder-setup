import React, { useState } from 'react';
/* shortcut: imrs */

const TenLittleMonkeys = (props) => {

    //let count = 0;
    const [count, setCount] = useState(10);

    //const [isDisabled, setIsDisabled] = useState(false);
    
    function handleClick(e){
        console.log("Button Was Clicked");

        setCount(count-1);
        //if (count - 1 === 0) {
            // setIsDisabled(true);
        //}
    }

    return ( 
        <div>
            <h1>{count} Little Monkeys Jumping on the Bed</h1>
            <button className="btn btn-primary" onClick={handleClick}>CLICK ME</button>
            <br />One fell off and bumped his head
Mama called the doctor and the doctor said...
            {/*{count < 10 ? <button className="btn btn-primary" onClick={handleClick}>CLICK ME</button> : null}*/}
            {/* <p>Monkeys in bed: {count}</p> */}
            {count === 10 ? <p> </p> : count !== 0 ? <p>"No more monkeys jumping on the bed!"</p> : count === 0 ? <p>"Put those monkeys right to bed!"</p> : null}
            {/* {count == 0 ? <p>"Put those monkeys right to bed!"</p> : null} */}
        </div>
    );
}
 
export default TenLittleMonkeys;