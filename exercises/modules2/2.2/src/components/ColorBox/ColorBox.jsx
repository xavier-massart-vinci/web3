import { useState } from "react";
import './ColorBox'


const color = ["red", "green", "blue", "yellow", "purple"];

const ColorBox = () => {
    const [colorIndex, setColorIndex] = useState(0);
    return(
        <>
            <div class="color" style={{ backgroundColor: color[colorIndex] }}>
                <button onClick={() => setColorIndex((colorIndex + 1) % color.length)}>{color[colorIndex]}</button>
            </div>
            
        </>
    )
}

export default ColorBox;