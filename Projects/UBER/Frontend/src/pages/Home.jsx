import { useRef, useState } from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const pannelCloseRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
        ease: "power3.out"
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0
      })
    }
  },[panelOpen,pannelCloseRef])

  return (
    <div className="h-screen relative">
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://www.oreilly.com/api/v2/epubs/urn:orm:book:9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
        <h5 ref={pannelCloseRef} onClick={()=>{
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
              <LocationSearchPanel/>
        </div>
      </div>
    </div>
  )
}

export default Home