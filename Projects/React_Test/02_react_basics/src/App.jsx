import { useState } from "react"

const App = () => {
    const [a, setA] = useState("Ritam Sanyal")
    const changeA = () => {
        if (a === "Ritam Sanyal")
            setA("Ankan Kunar Paul");
        else
            setA("Ritam Sanyal")
    }
    const [num, setnum] = useState(0)
    return (
        <div>
            <h2 className="text-xl">Username is {a}</h2>
            <button className="" onClick={changeA}>Change Username</button>
            <p>Current value is {num}</p>
            <button onClick={() => setnum(num + 1)}>Increment</button>
            <button onClick={() => setnum(num - 1)}>Decrement</button>
        </div>
    )
}

export default App