import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopUp from "../components/RidePopUp"
import { useRef, useState } from "react"
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(false)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function(){
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    }
  },[ridePopupPanel])

  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      })
    }
  }, [confirmRidePopUpPanel])

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
        <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
        <RidePopUp setridePopupPanel={setridePopupPanel}/>
      </div>

      <div ref={confirmRidePopUpPanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setridePopupPanel={setridePopupPanel} />
      </div>

    </div>
  )
}

export default CaptainHome