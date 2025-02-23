import { Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App