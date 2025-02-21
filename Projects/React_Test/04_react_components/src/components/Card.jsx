/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="mr-5 mb-3 bg-white text-black inline-block p-6 text-center rounded">
            <img className="ml-3 h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
            <h1 className="text-2xl font-semibold mb-4">{props.user} </h1>
            <h4 className="text-blue-600">{props.profession}</h4>
            <h2>City: {props.city}, Age: {props.age}</h2>
            <button className="mt-5 bg-emerald-600 text-white px-4 py-2 rounded font-medium hover:bg-emerald-700 hover:scale-105 active:bg-emerald-800 active:scale-100 transition duration-200" onClick={() => alert('Friend added!')}>Add Friend</button>
        </div>
    )
}

export default Card