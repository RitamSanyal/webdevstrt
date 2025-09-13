import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserDataContext } from "../context/UserDataContext"

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigate = useNavigate()

    const { setUser } = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password
        }

        const resposnse = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (resposnse.status === 201) {
            const data = resposnse.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <h1 className="font-extrabold text-2xl mb-3">Welcome New User</h1>
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
                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center">Already Have a Account ? <Link to='/login' className="text-blue-600">Login</Link></p>
            </div>
        </div>
    )
}

export default UserSignup