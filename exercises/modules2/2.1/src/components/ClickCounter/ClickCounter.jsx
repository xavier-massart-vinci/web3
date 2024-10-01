import { useState } from "react";


const ClickCount = ({title, msg10, hover}) =>{
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) );
    const [mouse, setMouse] = useState(false);

    const handleAddOne = () =>{
        const counter = count +1
        localStorage.setItem("count", JSON.stringify(counter))
        setCount(counter)
        
    }


    return (
        <div className="card">
            <p>{title}</p>
            <button onClick={handleAddOne} onMouseEnter={ () => setMouse(true)} onMouseLeave={() => setMouse(false)} >
                {mouse == true ? <span>{hover}</span> : <span>count is {count}</span>}
            </button>
            {count >= 10 ? <p>{msg10}</p>: null }
            <p>
             Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default ClickCount