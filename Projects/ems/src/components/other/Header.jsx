const Header = () => {
    return (
        <div className="!bg-[#1C1C1C] flex items-end justify-between">
            <h1 className="!bg-[inherit] text-2xl font-medium">Hello <br /><span className="!bg-[#1C1C1C] text-3xl font-semibold">Ritam 👋🏽</span></h1>
            <button className="!bg-red-600 px-5 py-2 text-lg font-medium rounded" >Log Out</button>
        </div>
    )
}

export default Header