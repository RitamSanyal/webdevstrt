import { Link } from "react-router-dom"

const CaptainHome = () => {
  return (
    <div className='h-screen'>

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain/logout' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className="h-full w-full object-cover" src="https://www.oreilly.com/api/v2/epubs/urn:orm:book:9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="" />
      </div>

      <div className='h-2/5 p-6'>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="RitamSanyal.jpeg" alt="" />
            <h4 className="text-lg font-medium">Ritam Sanyal</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹190.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex p-3 mt-6 bg-gray-200 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">24</h5>
            <p className="text-sm text-gray-600">KM Driven</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-star-line"></i>
            <h5 className="text-lg font-medium">4.9</h5>
            <p className="text-sm text-gray-600">Ratting</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default CaptainHome