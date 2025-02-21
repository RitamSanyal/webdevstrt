/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="bg-white text-black inline-block p-6 text-center rounded">
            <h1>Username: {props.user} </h1>
            <h2>City:{props.city},Age:{props.age}</h2>
            <button>Add Friend</button>
        </div>
    )
}

export default Card