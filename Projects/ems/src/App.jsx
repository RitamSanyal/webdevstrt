import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
const App = () => {

  const [user, setuser] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setuser(loggedInUser.role);
      }
    }
  }, [authData])


  const handelLogin = (email, password) => {
    if (email == "ritam@ss.dd" && password == "123") {
      setuser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    }
    else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      setuser("employee")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee' }));
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ''}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App