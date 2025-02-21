const Navbar = () => {
    return (
        <>
            <nav className='bg-emerald-700 flex py-5 px-10 items-center justify-between'>
                <h2 className='text-2xl'>Ritam Sanyal</h2>
                <div className='flex gap-8 items-center'>
                    <h4 className='text-xl'>About</h4>
                    <h4 className='text-xl'>Contact</h4>
                    <h4 className='text-xl'>Services</h4>
                    <h4 className='text-xl'>Your Account</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar