import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelCloseRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)


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
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out"
      })
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 1,
        duration: 0.4,
        delay: 0.2,
        ease: "power3.out"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out"
      })
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power3.out"
      })
    }
  }, [vehiclePanel, vehiclePanelCloseRef])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    }
  }, [waitingForDriver])

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

      <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
        <VehiclePannel setConfirmRidePanel={setConfirmRidePanel} vehiclePanelCloseRef={vehiclePanelCloseRef} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
        <LookingForDriver />
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>

    </div>
  )
}

export default Home