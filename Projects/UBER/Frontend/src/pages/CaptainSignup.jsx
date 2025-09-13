import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainDataContext"
import axios from "axios"

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    // const [captainData, setCaptainData] = useState({})

    const {captain, setCaptain} = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData= {
            fullname:{
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }
    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <h1 className="font-extrabold text-2xl mb-3">Welcome New Captain</h1>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-base w-1/2 font-medium mb-2">What's your name</h3>
                    <div className="flex gap-3 mb-5">
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-none text-base placeholder:text-sm"
                            placeholder="First Name"
                        />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-none text-base placeholder:text-sm"
                            placeholder="Last Name"
                        />
                    </div>
                    <h3 className="text-base font-medium mb-2">Whats your email ?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="youremail@mail.com"
                    />
                    <h3 className="text-base font-medium mb-2">Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="******"
                    />
                    <h3 className="text-base font-medium mb-2">Vehicle Color</h3>
                    <input
                        required
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="text"
                        placeholder="Vehicle Color"
                    />
                    <h3 className="text-base font-medium mb-2">Vehicle Plate</h3>
                    <input
                        required
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="text"
                        placeholder="Vehicle Plate Number"
                    />
                    <h3 className="text-base font-medium mb-2">Vehicle Capacity</h3>
                    <input
                        required
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="number"
                        min="1"
                        placeholder="Vehicle Capacity"
                    />
                    <h3 className="text-base font-medium mb-2">Vehicle Type</h3>
                    <select
                        required
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border-none w-full text-lg"
                    >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="auto">Auto</option>
                    </select>
                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center mt-7 mb-3">Already Have a Captain Account ? <Link to='/captain-login' className="text-blue-600">Login</Link></p>
            </div>
        </div>
    )
}

export default CaptainSignup