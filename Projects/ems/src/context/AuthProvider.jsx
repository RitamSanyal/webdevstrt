import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear(); // Clear localStorage for testing purposes

    const [userData, setuserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage();
        setuserData(employees);
    }, [])
    // console.log(userData)

    return (
        <div>
            <AuthContext.Provider value={[userData, setuserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider