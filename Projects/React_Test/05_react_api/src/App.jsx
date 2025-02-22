import axios from "axios"
import {useState} from 'react'
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
    console.log(data)
  }

  return (
    <div className="p-10">
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl mb-2 px-6 py-3 rounded hover:bg-emerald-700 hover:scale-105 active:scale-95 transition duration-100'>Get Axios Data</button>
      <div className="p-5 mt-2 bg-gray-950">
        {data.map(function(elem,idx){
          return <Card key={idx} author={elem.author} download_url={elem.download_url}/>
        })}
      </div>
    </div>
  )
}

export default App