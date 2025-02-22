const Card = (elem) => {
    return (
        <div className="bg-gray-50 text-black inline-block items-center justify-between w-full px-7 py-6 rounded mb-2">
            <img className="h-70 w-100 mr-1 rounded inline-block" src={elem.download_url} alt="" />
            <h1 className="inline-block">{elem.author}</h1>
        </div>
    )
}

export default Card