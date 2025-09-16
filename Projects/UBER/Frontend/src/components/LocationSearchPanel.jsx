const LocationSearchPanel = (props) => {
    // sample array of locations
    const locations = [
        "Sundaram Garden,Kalipada Mukherjee Road,Kolkata",
        "Howrah Railway Station, Howrah, Kolkata",
        "Victoria Memorial, Queens Way, Kolkata",
        "Park Street, Kolkata",
        "Science City, JBS Haldane Avenue, Kolkata"
    ]
    return (
        <div>
            {
                locations.map(function (elem, idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true),
                            props.setPanelOpen(false)
                    }} className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start">
                        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                        <h4 className="font-medium">{elem}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel