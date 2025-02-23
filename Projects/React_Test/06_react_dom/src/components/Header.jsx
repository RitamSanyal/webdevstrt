import { Link } from "react-router-dom"

const Header = () => {
    
    return (
        <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between h-20'>
            <h2 className='text-2xl'>Ritam Sanyal</h2>
            <div className='flex gap-10 text-lg underline'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
                {/*// * Anchor tags given below are not used as they are not SPGA compliant hence they are not used,instead we use Link from react-router-dom as give above */}
                {/* <a className="text underline" href="/">Home</a>
                <a className='text underline' href="/about">About</a>
                <a className='text underline' href="/contact">Contact</a>
                <a className='text underline' href="/product">Product</a> */}
            </div>
        </div>
    )
}

export default Header