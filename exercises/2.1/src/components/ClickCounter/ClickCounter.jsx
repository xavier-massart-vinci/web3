import { useState } from "react";


const ClickCount = ({title, msg10}) =>{
    const [count, setCount] = useState(0);
    
    return (
        <div className="card">
            <p>{title}</p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            {count >= 10 ? <p>{msg10}</p>: null }
            <p>
             Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default ClickCount