import { useNavigate } from "react-router-dom"

const FinishRide = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h5 onClick={() => {
                props.setFinishRidePanel(false)
            }} className="p-3 text-center absolute top-0 right-0 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>

            <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img className="h-15 w-15 rounded-full object-cover" src="RitamSanyal.jpeg" alt="" />
                    <h2 className="text-lg font-medium">Ritam Sanyal</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 Km</h5>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">

                    <div className="flex items-center gap-5 p-3 border-b-1 border-gray-300">
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">Sundaram Garden</h3>
                            <p className="text-sm -mt-1 text-gray-600">Kalipada Mukherjee Road,Kolkata</p>
                        </div>
                    </div>

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

                <div className="mt-6 w-full">
                        <button onClick={() => {
                            navigate('/captain-home')
                        }} className="bg-blue-900 active:bg-blue-700 w-full text-white font-semibold p-2 rounded-lg mt-3">End Ride</button>
                </div>

            </div>
        </div>
    )
}

export default FinishRide