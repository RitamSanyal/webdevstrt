const WaitingForDriver = () => {
  return (
    <div>

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
      </div>
    </div>
  )
}

export default WaitingForDriver