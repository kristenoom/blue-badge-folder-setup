import React, { useState } from 'react';

const InputField = () => {
    
    const [username, setUsername] = useState('');

    function handleOnChange(e) {
        console.log("handleOnChange was called")
        //set username
        //do not use username = e.target.value
        setUsername(e.target.value);
        console.log(e.target.value);
    }

    return ( 
        <div>
            <h1>Hello from InputField</h1>
            <input type="text" value={username} onChange={handleOnChange} />
            {/* <input type="text" onChange={e => setFirstName(e.target.value)} /> */}
            
        </div>
    );
}
 
export default InputField;