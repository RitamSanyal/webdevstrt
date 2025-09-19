import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='h-screen'>

            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain/logout' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className="h-full w-full object-cover" src="https://www.oreilly.com/api/v2/epubs/urn:orm:book:9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="" />
            </div>

            <div className='h-1/5 p-6 flex items-center justify-between bg-gray-400'>
                <h4 className='text-xl font-semibold'>4 Km Away</h4>
                <button className='bg-blue-900 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

        </div>
    )
}

export default CaptainRiding