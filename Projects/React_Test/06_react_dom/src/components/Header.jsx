const Header = () => {
    return (
        <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
            <h2 className='text-2xl'>Ritam Sanyal</h2>
            <div className='flex gap-10'>
                <a className='text underline' href="/about">About</a>
                <a className='text underline' href="/contact">Contact</a>
                <a className='text underline' href="/product">Product</a>
            </div>
        </div>
    )
}

export default Header