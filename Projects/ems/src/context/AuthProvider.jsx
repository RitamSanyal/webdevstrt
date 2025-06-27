import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage();
        setuserData(employees);
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setuserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider