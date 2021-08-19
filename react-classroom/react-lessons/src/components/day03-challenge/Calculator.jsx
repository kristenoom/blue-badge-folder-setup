import React, { useState } from 'react';
/* shortcut: imrs */

const Calculator = (props) => {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [total, setTotal] = useState(number1 + number2);

    function calculateTotal() {
        setTotal(number1 + number2);
    }

    return ( 
        <div>
            <h1>Hello from Calculator</h1>
            <input type="number" value={number1} onChange={e => setNumber1(+e.target.value)} placeholder="Enter a number" />&nbsp;&#43;&nbsp;<input type="number" value={number2} onChange={e => setNumber2(+e.target.value)} placeholder="Enter a number" />&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={calculateTotal}>CALCULATE</button>
            <h2>Total: {total}</h2>
        </div>
    );
}
 
export default Calculator;