import { Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App