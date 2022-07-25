import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    let arttır = () => (setCount(count + 1))
    let azalt = () => (setCount(count - 1))
    let sıfırla = () => (setCount(0))
        
    return (
        <div className='counter'>
            <h1>Counter App</h1>
            <div>
                <h2>{count}</h2>
                <button onClick={arttır}>Arttır</button>
                <button onClick={azalt}>Azalt</button>
                <button onClick={sıfırla}>Sıfırla</button>
            </div>
        </div>
    )
}
