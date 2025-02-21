import Navbar_Part2 from "./Navbar_Part2"

const Navbar = () => {
    return (
        <>
            <nav className='bg-emerald-700 flex py-5 px-10 items-center justify-between'>
                <h2 className='text-2xl'>Ritam Sanyal</h2>
                <Navbar_Part2/>
            </nav>
        </>
    )
}

export default Navbar