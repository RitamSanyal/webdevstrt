import PropTypes from 'prop-types';
import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {

    const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    }

    return (
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    )
};


UserContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserContext;