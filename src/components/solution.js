import React, { useState, useEffect } from 'react';

const Solution = () => {
    
    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');
    const [isInputValid, setIsInputValid] = useState(false)
    const [result, setResult] = useState('');
    const displayResultHandler = () => {
        setResult(+numberOne + +numberTwo)
        setIsInputValid(false)
    }
    const isValidNumber = num => {
        if(num === '') return false;
        if(isNaN(num)) return false;
        return true;
    }

    useEffect(() => {
        if (isValidNumber(+numberOne) && isValidNumber(numberTwo)) {
            setIsInputValid(true)
        } else {
            setIsInputValid(false) 
        }
    }, [numberOne, numberTwo])

    const el = (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input id='Text1' value={numberOne} onChange={(event) => setNumberOne(event.target.value)} />
            <input id='Text2' value={numberTwo} onChange={(event) => setNumberTwo(event.target.value)} />
            <input disabled id='txtresult' value={result} />
            <button disabled={!isInputValid} name='clickbtn' onClick={displayResultHandler}>Display Result</button>
        </div>

    )
    return (
        <div style={{width: '200px', height:'50px'}}>
            {el}
        </div>
    )
}

export default Solution