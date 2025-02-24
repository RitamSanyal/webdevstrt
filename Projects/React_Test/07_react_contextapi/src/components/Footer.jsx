import { DataContext } from "../context/UserContext"
import { useContext } from "react"
const Footer = () => {
    const email = useContext(DataContext);
    return (
        <div>
            <h1>Footer : {email.email}</h1>
        </div>
    )
}

export default Footer