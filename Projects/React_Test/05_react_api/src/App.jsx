import axios from "axios"
import { useState, useEffect } from 'react'
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }

  // * (ref 1) since we are using use effect button to call getData(),button is not required hence disabled
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="p-10">
      {/*// * this button is disabled (ref 1)  */}
      {/* <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl mb-2 px-6 py-3 rounded hover:bg-emerald-700 hover:scale-105 active:scale-95 transition duration-100'>Get Axios Data</button> */}
      <div className="p-5 mt-2 bg-gray-950">
        {data.map(function (elem, idx) {
          return <Card key={idx} author={elem.author} download_url={elem.download_url} />
        })}
      </div>
    </div>
  )
}

export default App