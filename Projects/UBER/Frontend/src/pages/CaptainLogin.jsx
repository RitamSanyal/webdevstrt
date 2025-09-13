import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainDataContext"
import axios from "axios"

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()


    const submitHandler = async(e) => {
        e.preventDefault()
        const captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
        if (response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
    }
    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <h1 className="font-extrabold text-2xl mb-3">Welcome Captain</h1>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} action="">
                    <h3 className="text-lg font-medium mb-2">Whats your email ?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="youremail@mail.com"
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="******"
                    />
                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center">Want to Join a fleet ? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
            </div>
            <div>
                <Link
                    to='/login'
                    className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                >
                    Sign In as User
                </Link>
            </div>
        </div>
    )
}

export default CaptainLogin