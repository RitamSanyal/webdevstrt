const VehiclePannel = (props) => {
    function handleClick() {
        props.setConfirmRidePanel(true);
        props.setVehiclePanel(false);
    }
    return (
        <div>
            <h5 ref={props.vehiclePanelCloseRef} onClick={() => {
                props.setVehiclePanel(false)
            }} className="p-3 text-center absolute top-0 right-0 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Choose A Vehicle</h3>

            <div onClick={() => {
                handleClick();
            }} className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-lg">UberGo<span><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-700">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>

            <div onClick={() => {
                handleClick();
            }} className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-lg">Moto<span><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className="font-medium text-sm">1 mins away</h5>
                    <p className="font-normal text-xs text-gray-700">Affordable, bikes rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹53.70</h2>
            </div>

            <div onClick={() => {
                handleClick();
            }} className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-lg">Auto<span><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className="font-medium text-sm">8 mins away</h5>
                    <p className="font-normal text-xs text-gray-700">Affordable, Auto rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹100.18</h2>
            </div>

        </div>
    )
}

export default VehiclePannel