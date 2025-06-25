import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
const App = () => {

  const [user, setuser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role);
      setLoggedInUserData(userData.data);
    }

  },[])


  const handelLogin = (email, password) => {
    if (email == "ritam@ss.dd" && password == "123") {
      setuser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setuser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setuser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App