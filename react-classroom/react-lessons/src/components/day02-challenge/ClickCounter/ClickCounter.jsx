import React, { useState } from 'react';
/* shortcut: imrs */

const ClickCounter = (props) => {

    //let count = 0;
    const [count, setCount] = useState(0);
    /* READ ONLY VARIABLE.*/
    /* shortcut: usf */
    const [isDisabled, setIsDisabled] = useState(false);
    
    function handleClick(e){
        console.log("Button Was Clicked");
        // count = count + 1;
        setCount(count+1);
        //console.log(count)
        if (count + 1 === 10) {
            setIsDisabled(true);
        }
    }

    return ( 
        <div>
            <button className="btn btn-primary" onClick={handleClick}>CLICK ME</button>
            {/*{count < 10 ? <button className="btn btn-primary" onClick={handleClick}>CLICK ME</button> : null}*/}
            <p>Current Count: {count}</p>
            {count > 9 ? <p>You clicked too many times</p> : null}
        </div>
    );
}
 
export default ClickCounter;