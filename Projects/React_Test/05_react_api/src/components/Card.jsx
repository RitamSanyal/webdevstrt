const Card = (elem) => {
    return (
        <div className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-2">
            <img className="h-70 w-100 rounded" src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
        </div>
    )
}

export default Card