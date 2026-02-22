import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // Array di città prese da DB
  const cities = [
    {
      id: 0,
      name: "New York",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, et.",
      imgURL: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      name: "Tokyo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque velit porro nemo debitis.",
      imgURL: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Naples",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, velit saepe officiis facere recusandae perferendis nulla et distinctio deserunt voluptatem.",
      imgURL: "https://images.unsplash.com/photo-1581242125825-f9faf0f350bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5hcGxlc3xlbnwwfHwwfHx8MA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Dublin",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas nesciunt dolores in tempore.",
      imgURL: "https://plus.unsplash.com/premium_photo-1699626666262-1314de6e6896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fER1YmxpbnxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: false,
    },
  ]

  return (
    <>
    <div className="grid grid-cols-4 gap-10">
      
      {cities
      .map((city) => (
      <Card 
        key = {city.id}
        title = {city.name}
        imgURL={city.imgURL}
        isVisited={city.isVisited}
        >
        {city.description}
        </Card>
        ))}
  
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
