import { useState } from "react";

function Color(){
    const [color, setColor] = useState({
        red: 0,
        green: 0,
        blue: 0
    })

    function favColor(e){
        e.preventDefault()

        alert(`Your favorite color is ${color.red}, ${color.green}, ${color.blue}!`)
    }

    return (
        <form style={{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}} onSubmit={favColor}>
            <input type="number" value={color.red} onChange={(e) => setColor({
                red: e.target.value,
                green: color.green,
                blue: color.blue
            })}/>
            <input type="number" value={color.green} onChange={(e) => setColor({
                red: color.red,
                green: e.target.value,
                blue: color.blue
            })}/>
            <input type="number" value={color.blue} onChange={(e) => setColor({
                red: color.red,
                green: color.green,
                blue: e.target.value
            })}/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Color