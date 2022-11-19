import React, { useState, useEffect } from 'react'
import './index.css'

const CounterComponents = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            setCount(0);
            alert("Can't decrease less than 0")
        }
    }
    const reset = () => {
        setCount(0);
    }

    useEffect(() => {
        console.log(count)
    })

    return (
        <div className='container'>
            <h1>Counter App</h1>
                <br />

                {count >= 1 && 
                <> 
                <br /> 
                <h2>{count}</h2> 
                </>
                }
                <br /> <br />

                <button className='btn' onClick={increment}>Increment</button>
                <button className='btn' onClick={decrement}>Decrement</button>

                {count >= 10 && 
                <> 
                <br /> 
                <button className='btn' onClick={reset}>GO BACK TO 0</button>
                </>
                }

        </div>
    )
}

export default CounterComponents