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

  const users = [
    {
      "name": "Amit Sharma",
      "city": "Mumbai",
      "age": 28,
      "profession": "Software Engineer",
      "profile_photo": "https://example.com/photos/amit.jpg"
    },
    {
      "name": "Priya Verma",
      "city": "Delhi",
      "age": 25,
      "profession": "Graphic Designer",
      "profile_photo": "https://example.com/photos/priya.jpg"
    },
    {
      "name": "Rahul Das",
      "city": "Kolkata",
      "age": 30,
      "profession": "Data Scientist",
      "profile_photo": "https://example.com/photos/rahul.jpg"
    },
    {
      "name": "Neha Singh",
      "city": "Bangalore",
      "age": 27,
      "profession": "Marketing Manager",
      "profile_photo": "https://example.com/photos/neha.jpg"
    },
    {
      "name": "Arjun Nair",
      "city": "Chennai",
      "age": 29,
      "profession": "Cybersecurity Analyst",
      "profile_photo": "https://example.com/photos/arjun.jpg"
    },
    {
      "name": "Sneha Patel",
      "city": "Pune",
      "age": 26,
      "profession": "UI/UX Designer",
      "profile_photo": "https://example.com/photos/sneha.jpg"
    },
    {
      "name": "Vikram Rao",
      "city": "Hyderabad",
      "age": 32,
      "profession": "DevOps Engineer",
      "profile_photo": "https://example.com/photos/vikram.jpg"
    },
    {
      "name": "Ananya Bose",
      "city": "Jaipur",
      "age": 24,
      "profession": "Content Writer",
      "profile_photo": "https://example.com/photos/ananya.jpg"
    },
    {
      "name": "Siddharth Mehta",
      "city": "Ahmedabad",
      "age": 31,
      "profession": "AI Researcher",
      "profile_photo": "https://example.com/photos/siddharth.jpg"
    },
    {
      "name": "Kavya Reddy",
      "city": "Lucknow",
      "age": 23,
      "profession": "Product Manager",
      "profile_photo": "https://example.com/photos/kavya.jpg"
    }
  ]


  return (
    <div>
      <div className="p-10">
        {users.map(function(elem,idx){
          return <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} photo={elem.profile_photo} />
        })}
      </div>
    </div>
  )
}

export default App