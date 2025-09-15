const LocationSearchPanel = () => {
    // sample array of locations
    const locations = [
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
    ]
    return (
        <div>
            {/* Sample Data */}
            <div className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">Sundaram Garden,Kalipada Mukherjee Road,Kolkata</h4>
            </div>
            <div className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">Sundaram Garden,Kalipada Mukherjee Road,Kolkata</h4>
            </div>
            <div className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">Sundaram Garden,Kalipada Mukherjee Road,Kolkata</h4>
            </div>
        </div>
    )
}

export default LocationSearchPanel