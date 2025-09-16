import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out"
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out"
      })
    }
  }, [panelOpen, pannelCloseRef])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        ease: "power3.out"
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0,
        ease: "power3.out"
      })
    }
  }, [vehiclePanel,pannelCloseRef])

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://www.oreilly.com/api/v2/epubs/urn:orm:book:9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={pannelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className="absolute opacity-0 right-6 top-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-15 w-1 top-[48%] left-10 bg-gray-500 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location" />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination" />
          </form>
        </div>
        <div ref={panelRef} className="opacity-0 bg-white h-0">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-8">
        <h5 onClick={() => {
          setVehiclePanel(false)
        }} className="p-3 text-center absolute top-0 right-0 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose A Vehicle</h3>

        <div className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">UberGo<span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        <div className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">Moto<span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">1 mins away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable, bikes rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹53.70</h2>
        </div>

        <div className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">Auto<span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">8 mins away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable, Auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹100.18</h2>
        </div>

      </div>
    </div>
  )
}

export default Home