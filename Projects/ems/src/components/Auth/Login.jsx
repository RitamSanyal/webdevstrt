
const Login = () => {
    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="border-2 rounded-xl border-red-600 p-20">
                <form className="flex flex-col items-center justify-center">
                    <input className="bg-transparent! outline-none border-2 border-red-500 text-xl py-3 px-5 rounded-full" type="email" placeholder="Enter your email" />
                    <input className="bg-transparent! outline-none border-2 border-red-500 text-xl py-3 px-5 mt-3 rounded-full" type="password" placeholder="Enter your password" />
                    <button className="bg-red-500! outline-none border-none mt-5 text-xl py-3 px-5 rounded-full">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login