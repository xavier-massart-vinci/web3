
import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";


const ClickCount = ({title, msg10, hover}) =>{
    const [count, setCount] = useLocalStorage("count", 0);
    const [mouse, setMouse] = useState(false);


    return (
        <div className="card">
            <p>{title}</p>
            <button onClick={() => setCount(count + 1)} onMouseEnter={ () => setMouse(true)} onMouseLeave={() => setMouse(false)} >
                {!mouse ? <span>{hover}</span> : <span>count is {count}</span>}
            </button>
            {count >= 10 ? <p>{msg10}</p>: null }
            <p>
             Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default ClickCount