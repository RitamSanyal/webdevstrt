import { DataContext } from "../context/UserContext";
import { useContext } from "react";
const Section = () => {
    const address = useContext(DataContext);
    return (
        <div>
            <h1>Section: {address.address},</h1>
        </div>
    )
}

export default Section