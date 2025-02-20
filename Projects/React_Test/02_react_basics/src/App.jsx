import { useState } from "react"

const App = () => {
    const [a, setA] = useState("Ritam Sanyal")
    const [num, setnum] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = () => {
        if (a === "Ritam Sanyal")
            setA("Ankan Kunar Paul");
        else
            setA("Ritam Sanyal")
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), 3000); // Enable after 3 seconds
    };
    return (
        <div>
            <h2 className="text-xl">Username is {a}</h2>
            <button onClick={handleClick} disabled={isDisabled} className={`py-2 px-4 font-bold rounded transition 
        ${isDisabled ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"}`} >Change Username</button>
            <p>Current value is {num}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={() => setnum(num + 1)}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={() => setnum(num - 1)}>Decrement</button>
        </div>
    )
}

export default App