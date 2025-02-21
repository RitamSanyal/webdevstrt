import { useState } from "react"
const App = () => {
  const [username, setusername] = useState('');
  const submitHandler = (e) => {
    e.preventDefault(),
      console.log(username),
      setusername('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          value={username}
          onChange={(e) => { setusername(e.target.value) }}
          className="px-2 py-1 mx-2 rounded-sm" type="text"
          placeholder="Enter your Name"
        />
        <button className="bg-emerald-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ">Submit</button>
      </form>
    </div>
  )
}

export default App