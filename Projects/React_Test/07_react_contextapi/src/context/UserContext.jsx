// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {

    const username = "Ritam Sanyal"

    return (
        <div>
            <h1>User is : {username}.</h1>
            {children}
        </div>
    )
}
export default UserContext