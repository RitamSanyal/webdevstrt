import { Link } from 'react-router-dom'

const RideStarted = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className="h-full w-full object-cover" src="https://www.oreilly.com/api/v2/epubs/urn:orm:book:9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className="flex items-center justify-between">
                    <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">Ritam</h2>
                        <h4 className="text-xl font-semibold -mt-1 -mb-1">WB26 AU 6144</h4>
                        <p className="text-sm text-gray-600">Tata Tiago XE</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-between flex-col items-center">
                    <div className="w-full mt-5">

                        <div className="flex items-center gap-5 p-3 border-b-1 border-gray-300">
                            <i className="ri-map-pin-3-fill"></i>
                            <div>
                                <h3 className="text-lg font-medium">G-9,Nabadarsha</h3>
                                <p className="text-sm -mt-1 text-gray-600">Birati,Kolkata</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 p-3">
                            <i className="ri-money-rupee-circle-fill"></i>
                            <div>
                                <h3 className="text-lg font-medium">Cash</h3>
                                <p className="text-sm -mt-1 text-gray-600">₹193.20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-full mt-5 bg-green-900 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
            </div>
        </div>
    )
}

export default RideStarted