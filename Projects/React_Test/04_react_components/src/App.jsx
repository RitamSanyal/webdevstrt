// * Part-1 Learning Components 
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Footer />
//     </>
//   )
// }


// * Part-2 Learning Props

import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <div className="p-10">
        <Card user="Ritam Sanyal" age='23' city="Kolkata" />
      </div>
    </div>
  )
}

export default App